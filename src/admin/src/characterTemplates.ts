import { NewCompanion } from '../../../src/types/companion';
import { NewNonplayerCharacter } from '../../../src/types/nonplayer_character';
import { NewPlayerCharacter } from '../../../src/types/player_character';

export const playerTemplate: NewPlayerCharacter = {
  name: '',
  acl: {},
  description: '',
  type: 'player',
  attributes: {
    health: {
      edge: 0,
      pool: 5,
    },
    speed: {
      edge: 0,
      pool: 5,
    },
    might: {
      edge: 0,
      pool: 5,
    },
    focus: {
      edge: 0,
      pool: 5,
    },
    conviction: {
      edge: 0,
      pool: 5,
    },
  },
  skills: {
    movement: -1,
    riding: -1,
    piloting: -1,
    swimming: -1,
    sneaking: -1,
    mightdefense: -1,
    speeddefense: -1,
    convictiondefense: -1,
    focusdefense: -1,
    healthdefense: -1,
    initiative: -1,
    wildernesslore: -1,
    medicine: -1,
    commandanimal: -1,
    perception: -1,
    mightmeleeattack: -1,
    speedmeleeattack: -1,
    focusmeleeattack: -1,
    convictionmeleeattack: -1,
    mightrangedattack: -1,
    speedrangedattack: -1,
    focusrangedattack: -1,
    convictionrangedattack: -1,
    wetscienceknowledge: -1,
    wetsciencetinker: -1,
    dryscienceknowledge: -1,
    drysciencetinker: -1,
    otherknowledge: -1,
    persuade: -1,
    lie: -1,
    intimidate: -1,
    sensemotive: -1,
    legerdemain: -1,
    hacking: -1,
    picklocks: -1,
    advancedsecurity: -1,
  },
  status: {},
};

export const companionTemplate: NewCompanion = {
  name: '',
  description: '',
  acl: {},
  type: 'companion',
  attack: 0,
  defend: 0,
  armor: 0,
  attributes: {
    health: {
      edge: 0,
      pool: 5,
    },
    loyalty: {
      edge: 0,
      pool: 5,
    },
  },
  skills: {},
  status: {},
  abilities: [],
};

export const nonplayerTemplate: NewNonplayerCharacter = {
  name: '',
  description: '',
  type: 'nonplayer',
  armor: 0,
  attack: 0,
  defend: 0,
  health: 0,
  acl: {},
  status: {},
};
