"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = exports.companions = exports.campaign = void 0;
const util_1 = require("./util");
const skills_1 = require("./skills");
const localSkills = [
    {
        skillId: 'advancedsecurity',
        type: 'noncombat',
        description: '',
        category: 'adventuring',
        name: 'Advanced Security',
        attributes: ['focus', 'conviction'],
    },
    {
        skillId: 'dryscienceknowledge',
        type: 'noncombat',
        description: '',
        category: 'knowledge',
        name: 'Dry Science Knowledge',
        attributes: ['conviction', 'focus'],
    },
    {
        skillId: 'drysciencetinker',
        type: 'noncombat',
        description: '',
        category: 'knowledge',
        name: 'Dry Science Tinker',
        attributes: ['conviction', 'focus'],
    },
    {
        skillId: 'hacking',
        type: 'noncombat',
        description: '',
        category: 'adventuring',
        name: 'Hacking',
        attributes: ['conviction', 'focus'],
    },
    {
        skillId: 'piloting',
        type: 'noncombat',
        description: '',
        category: 'movement',
        name: 'Piloting',
        attributes: ['speed', 'conviction', 'focus'],
    },
    {
        skillId: 'wetscienceknowledge',
        type: 'noncombat',
        description: '',
        category: 'knowledge',
        name: 'Wet Science Knowledge',
        attributes: ['conviction', 'focus'],
    },
    {
        skillId: 'wetsciencetinker',
        type: 'noncombat',
        description: '',
        category: 'knowledge',
        name: 'Wet Science Tinker',
        attributes: ['conviction', 'focus'],
    },
];
exports.campaign = {
    type: 'campaign',
    name: 'Tales of Dinosaurs and Stuff',
    description: 'also Time Travel and Alien Spaceships',
    acl: {},
    skills: skills_1.commonSkills.concat(localSkills),
};
const players = [
    {
        name: 'Ry McGinnis',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(5, 0, 'might'),
            speed: util_1.attr(5, 0, 'speed'),
            focus: util_1.attr(10, 1, 'focus'),
            conviction: util_1.attr(7, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
            inept: [],
            proficient: [
                'dryscienceknowledge',
                'drysciencetinker',
                'combatprediction',
                'hacking',
                'health',
                'tactics',
                'jumpy',
                'providence',
                'legerdemain',
                'toughness',
                'movement',
                'perception',
                'persuade',
                'picklocks',
                'piloting',
                'sensemotive',
                'sneaking',
                'dodge',
                'commandanimal',
                'faith',
            ],
            trained: ['advancedsecurity'],
            expert: [],
        }),
        equipment: {},
        auras: [],
        abilities: [],
        experience: 27,
        initiative: 0,
    },
    {
        name: 'Connecticut (Connie) Butler',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(5, 0, 'might'),
            speed: util_1.attr(5, 0, 'speed'),
            focus: util_1.attr(7, 0, 'focus'),
            conviction: util_1.attr(10, 2, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
            inept: [
                'dryscienceknowledge',
                'drysciencetinker',
                'wetscienceknowledge',
                'wetsciencetinker',
            ],
            proficient: [
                'health',
                'legerdemain',
                'lie',
                'medicine',
                'toughness',
                'otherknowledge',
                'perception',
                'persuade',
                'sneaking',
                'wildernesslore',
            ],
            trained: ['advancedsecurity'],
            expert: [],
        }),
        equipment: {},
        auras: [],
        abilities: [],
        experience: 34,
        initiative: 0,
    },
    {
        name: 'Momentus Undergrave',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(5, 0, 'might'),
            speed: util_1.attr(7, 0, 'speed'),
            focus: util_1.attr(10, 1, 'focus'),
            conviction: util_1.attr(5, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
            inept: [
                'dryscienceknowledge',
                'drysciencetinker',
                'wetscienceknowledge',
                'wetsciencetinker',
            ],
            proficient: [
                'health',
                'legerdemain',
                'lie',
                'medicine',
                'toughness',
                'otherknowledge',
                'perception',
                'persuade',
                'sneaking',
                'wildernesslore',
            ],
            trained: ['advancedsecurity'],
            expert: [],
        }),
        equipment: {},
        auras: [],
        abilities: [],
        experience: 22,
        initiative: 0,
    },
    {
        name: 'Chad',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(10, 2, 'might'),
            speed: util_1.attr(6, 1, 'speed'),
            focus: util_1.attr(5, 0, 'focus'),
            conviction: util_1.attr(7, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
            inept: [
                'dryscienceknowledge',
                'drysciencetinker',
                'wetscienceknowledge',
                'wetsciencetinker',
            ],
            proficient: [
                'health',
                'legerdemain',
                'lie',
                'medicine',
                'toughness',
                'otherknowledge',
                'perception',
                'persuade',
                'sneaking',
                'wildernesslore',
            ],
            trained: ['advancedsecurity'],
            expert: [],
        }),
        equipment: {},
        auras: [],
        abilities: [],
        experience: 18,
        initiative: 0,
    },
    {
        name: 'Thomson Anning',
        acl: {},
        description: '',
        type: 'character',
        subtype: 'player',
        attributes: {
            health: util_1.attr(10, 0, 'health'),
            might: util_1.attr(5, 0, 'might'),
            speed: util_1.attr(10, 1, 'speed'),
            focus: util_1.attr(7, 1, 'focus'),
            conviction: util_1.attr(5, 0, 'conviction'),
        },
        skills: util_1.skillBlock(exports.campaign.skills, {
            inept: [
                'dryscienceknowledge',
                'drysciencetinker',
                'wetscienceknowledge',
                'wetsciencetinker',
            ],
            proficient: [
                'health',
                'legerdemain',
                'lie',
                'medicine',
                'toughness',
                'otherknowledge',
                'perception',
                'persuade',
                'sneaking',
                'wildernesslore',
            ],
            trained: ['advancedsecurity'],
            expert: [],
        }),
        equipment: {},
        auras: [],
        abilities: [],
        experience: 16,
        initiative: 0,
    },
];
exports.companions = [
    {
        name: 'Sparks',
        description: 'Ornithomimid',
        acl: {},
        type: 'character',
        subtype: 'companion',
        attack: 2,
        defend: 2,
        armor: 0,
        attributes: {
            health: util_1.attr(12, 0, 'health'),
            loyalty: util_1.attr(8, 0, 'loyalty'),
        },
        skills: skills_1.companionBaseSkills(),
        initiative: 0,
        equipment: {},
        auras: [],
        abilities: [],
        baseInitiative: 4,
    },
    {
        name: 'Biscuit',
        description: 'Ankylosaur',
        acl: {},
        type: 'character',
        subtype: 'companion',
        attack: 2,
        defend: 2,
        armor: 6,
        skills: skills_1.companionBaseSkills(),
        attributes: {
            health: util_1.attr(12, 0, 'health'),
            loyalty: util_1.attr(6, 0, 'loyalty'),
        },
        initiative: 0,
        equipment: {},
        auras: [],
        abilities: [],
        baseInitiative: 4,
    },
    {
        name: 'Dr. Fantabulous',
        description: 'Centrosaurus',
        acl: {},
        type: 'character',
        subtype: 'companion',
        attack: 1,
        defend: 6,
        armor: 10,
        attributes: {
            health: util_1.attr(14, 0, 'health'),
            loyalty: util_1.attr(6, 0, 'loyalty'),
        },
        skills: skills_1.companionBaseSkills(),
        initiative: 0,
        equipment: {},
        auras: [],
        abilities: [],
        baseInitiative: 4,
    },
    {
        name: 'Smammal',
        description: 'Small Mammal and Occasional Plot Device',
        acl: {},
        type: 'character',
        subtype: 'companion',
        attack: 1,
        defend: 3,
        armor: 0,
        attributes: {
            health: util_1.attr(8, 0, 'health'),
            loyalty: util_1.attr(4, 0, 'loyalty'),
        },
        skills: skills_1.companionBaseSkills(),
        initiative: 0,
        equipment: {},
        auras: [],
        abilities: [],
        baseInitiative: 4,
    },
    {
        name: 'Nugget 2.0',
        description: 'Raptor',
        acl: {},
        type: 'character',
        subtype: 'companion',
        skills: skills_1.companionBaseSkills(),
        attack: 4,
        defend: 1,
        armor: 2,
        attributes: {
            health: util_1.attr(15, 0, 'health'),
            loyalty: util_1.attr(5, 0, 'loyalty'),
        },
        initiative: 0,
        equipment: {},
        auras: [],
        abilities: [],
        baseInitiative: 4,
    },
];
exports.characters = players.concat(exports.companions);
