import {
  COMPANION_TEMPLATE,
  NONPLAYER_TEMPLATE,
  PLAYER_TEMPLATE,
} from './characterTemplates.js';
import { skillLevelSeed, skillSeed } from './skills.js';

import admin from 'firebase-admin';
import serviceAccount from './keys/tales-280319-firebase-adminsdk-t4ypx-70cc741d90.json';

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://tales-280319.firebaseio.com',
});

await app.firestore().doc('/rules/skills').set(skillSeed);
await app.firestore().doc('/rules/skillLevels').set(skillLevelSeed);
await app
  .firestore()
  .doc('/rules/characters/templates/player')
  .set(PLAYER_TEMPLATE);
await app
  .firestore()
  .doc('/rules/characters/templates/nonplayer')
  .set(NONPLAYER_TEMPLATE);
await app
  .firestore()
  .doc('/rules/characters/templates/companion')
  .set(COMPANION_TEMPLATE);
