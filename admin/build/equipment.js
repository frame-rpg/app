"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feet = exports.shield = exports.stoneCloak = exports.longbow = exports.magicCrossbow = exports.crossbow = exports.staff = exports.lightMace = exports.dagger = exports.magicRapier = exports.rapier = void 0;
function weapon({ name, initiative, size, damage, skills, }) {
    return {
        name,
        description: `A ${name}`,
        slot: 'hand',
        size,
        equipped: true,
        abilities: [
            {
                type: 'action',
                name: `Attack: ${name}`,
                description: `Basic attack with a ${name}.`,
                category: 'attack',
                skills,
                costs: [
                    { type: 'initiative', cost: { type: 'concrete', cost: initiative } },
                ],
                effects: [
                    {
                        type: 'bonus',
                        damage: damage,
                        duration: 'roll',
                    },
                ],
            },
        ],
    };
}
exports.rapier = weapon({
    name: 'Rapier',
    initiative: 4,
    damage: 2,
    size: 1,
    skills: ['fencing', 'combatinsight'],
});
exports.magicRapier = {
    ...exports.rapier,
    abilities: [
        ...exports.rapier.abilities,
        {
            type: 'action',
            name: 'Anti Chaos Strike',
            description: 'Magical strike against a chaotic foe.',
            category: 'attack',
            skills: ['fencing', 'combatinsight'],
            costs: [
                { type: 'initiative', cost: { type: 'concrete', cost: 4 } },
                { type: 'depletion', level: 0, target: 4 },
            ],
            effects: [
                {
                    type: 'bonus',
                    damage: 2,
                    assets: 1,
                    duration: 'roll',
                },
            ],
        },
    ],
};
exports.dagger = weapon({
    name: 'Dagger',
    initiative: 3,
    damage: 0,
    size: 1,
    skills: ['fencing', 'combatinsight', 'sniper', 'quickdraw'],
});
exports.lightMace = weapon({
    name: 'Light Mace',
    initiative: 4,
    damage: 2,
    size: 1,
    skills: ['fencing', 'combatinsight'],
});
exports.staff = weapon({
    name: 'Staff',
    initiative: 6,
    damage: 4,
    size: 2,
    skills: ['fencing', 'combatinsight'],
});
exports.crossbow = weapon({
    name: 'Crossbow',
    initiative: 8,
    damage: 5,
    size: 2,
    skills: ['sniper', 'quickdraw'],
});
exports.magicCrossbow = {
    ...exports.crossbow,
    name: 'Blood Crossbow',
    depleted: false,
    abilities: [
        ...exports.crossbow.abilities,
        {
            type: 'modifier',
            name: 'Imbue with Blood',
            description: 'You pour a little bit of your soul into the crossbow. It appreciates the donation.',
            costs: [
                { type: 'depletion', level: 0, target: 4 },
                { type: 'pool', pool: ['health'], cost: { type: 'concrete', cost: 1 } },
            ],
            effects: [
                {
                    duration: 'roll',
                    type: 'bonus',
                    damage: 10,
                },
            ],
            category: 'attack',
        },
    ],
};
exports.longbow = weapon({
    name: 'Longbow',
    initiative: 6,
    damage: 3,
    size: 2,
    skills: ['hipshot', 'quickdraw', 'sniper'],
});
exports.stoneCloak = {
    name: 'Stone Cloak',
    equipped: true,
    description: 'A cloak the same color and consistency of old stone, it provides additional defense as well as camouflage.',
    slot: 'body',
    size: 1,
    depleted: false,
    abilities: [
        {
            type: 'passive',
            name: 'Defensive Assist',
            description: 'The stone cloak swirls of its own accord, confounding your foe',
            category: 'defense',
            effects: [
                {
                    type: 'bonus',
                    assets: 1,
                    duration: 'roll',
                },
            ],
            costs: [{ type: 'depletion', target: 3, level: 0 }],
        },
        {
            type: 'passive',
            name: 'Defensive Assist',
            description: 'The stone cloak helps you hide.',
            category: 'noncombat',
            skills: ['sneaking'],
            effects: [
                {
                    type: 'bonus',
                    assets: 1,
                    duration: 'roll',
                },
            ],
            costs: [{ type: 'depletion', target: 3, level: 0 }],
        },
    ],
};
exports.shield = {
    name: 'Shield',
    description: 'A simple shield.',
    slot: 'hand',
    size: 1,
    equipped: true,
    abilities: [
        {
            type: 'passive',
            name: 'Shield Bonus',
            description: 'You use your shield to aid your defense',
            category: 'defense',
            effects: [
                {
                    type: 'bonus',
                    edge: 1,
                    duration: 'roll',
                },
            ],
            costs: [],
        },
        {
            type: 'passive',
            name: 'Shield Nonproficency Penalty',
            description: 'Your shield hinders your attack',
            category: 'attack',
            effects: [
                {
                    type: 'bonus',
                    assets: -1,
                    duration: 'roll',
                },
            ],
            costs: [],
        },
    ],
};
exports.feet = {
    name: 'Unarmed Strike',
    type: 'action',
    costs: [{ type: 'initiative', cost: { type: 'concrete', cost: 3 } }],
    effects: [
        {
            type: 'bonus',
            damage: 2,
            duration: 'roll',
        },
    ],
    category: 'attack',
    skills: ['unarmed'],
    description: 'With fists and feet of fury, pummel your foes.',
};
