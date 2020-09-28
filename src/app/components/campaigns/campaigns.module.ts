import { ActionsModule } from 'src/app/actions/actions.module';
import { CharactersModule } from '../characters/characters.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GmviewComponent } from './gmview/gmview.component';
import { MaterialModule } from '../../core/material/material.module';
import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/core/pipes/pipes.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [GmviewComponent, MessageComponent, ViewComponent],
  imports: [
    CharactersModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    PipesModule,
    ActionsModule,
  ],
  exports: [],
})
export class CampaignsModule {}
