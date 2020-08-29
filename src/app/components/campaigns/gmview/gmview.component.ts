import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  Character,
  Companion,
  NonplayerCharacter,
  PlayerCharacter,
} from 'types/character';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest, of } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  publishReplay,
  refCount,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { Campaign } from 'types/campaign';
import { CampaignService } from 'src/app/data/campaign.service';
import { InitiativeService } from 'src/app/actions/initiative/initiative.service';
import { Roll } from 'types/event';

@Component({
  selector: 'campaign-gmview',
  templateUrl: './gmview.component.html',
  styleUrls: ['./gmview.component.scss'],
})
export class GmviewComponent implements OnInit, OnDestroy {
  campaign: Observable<Campaign>;
  openCharacter: Character;
  allCharacters: Observable<Character[]>;
  rolls: Observable<Roll[]>;
  triggerInitiative = new Subject<MouseEvent>();
  destroyingSubject = new Subject<boolean>();
  destroying = this.destroyingSubject
    .asObservable()
    .pipe(filter((v) => v === true));

  constructor(
    private campaignService: CampaignService,
    private initiativeService: InitiativeService,
    private route: ActivatedRoute,
    private auth: AngularFireAuth
  ) {}

  ngOnDestroy(): void {
    this.destroyingSubject.next(true);
  }

  ngOnInit(): void {
    this.campaign = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.campaignService.get(params.get('id'))
      ),
      publishReplay(1),
      refCount()
    );
    this.allCharacters = this.campaign.pipe(
      switchMap(({ id, characters }) =>
        this.campaignService.characters({ id, characters })
      ),
      map((characters) =>
        characters.sort((a, b) => {
          if (a.status?.initiative >= 0 && b.status?.initiative >= 0) {
            return a.status.initiative - b.status.initiative;
          } else if (a.status?.initiative) {
            return -1;
          } else if (b.status?.initiative) {
            return 1;
          } else {
            return a.name.localeCompare(b.name);
          }
        })
      )
    );
    this.rolls = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.campaignService.listRolls(params.get('id'))
      ),
      publishReplay(1),
      refCount()
    );

    combineLatest([
      this.campaign,
      this.auth.user,
      this.triggerInitiative.asObservable(),
    ])
      .pipe(
        distinctUntilChanged((a, b) => a[2] === b[2]),
        takeUntil(this.destroying)
      )
      .subscribe(([campaign, user]) => {
        this.initiativeService.trigger(campaign, user.email);
      });
  }

  trackById(_: number, item: { id: string }) {
    return item.id;
  }

  initiative(event: MouseEvent) {
    this.triggerInitiative.next(event);
  }
}