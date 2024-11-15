// item type (determines stat options?)
const itemTypes = [
	"Sword",
	"Shield",
	"Helmet",
	"Chestplate",
	"Platelegs",
	"Boots",
];

// Level (determine stat weights)

// rarity (determines stat options?/weights)
const rarities = {
	Common: { multiplier: 1 },
	Uncommon: { multiplier: 1.1 },
	Rare: { multiplier: 1.2 },
	Epic: { multiplier: 1.3 },
	Legendary: { multiplier: 1.4 },
	Mythic: { multiplier: 1.5 },
	rollRarity() {
		const randNum = Math.random();

		if (randNum < 0.01) {
			// 0.01
			return "Mythic";
		} else if (randNum < 0.035) {
			// 0.025
			return "Legendary";
		} else if (randNum < 0.085) {
			// 0.05
			return "Epic";
		} else if (randNum < 0.185) {
			// 0.10
			return "Rare";
		} else if (randNum < 0.435) {
			// 0.25
			return "Uncommon";
		} else {
			// ~0.565
			return "Common";
		}
	},
};

// stat groups (stat:ratio)

const statGroups = {
	Strength: {
		str: 1,
	},
	Agility: {
		agi: 1
	},
	Stamina: {
		sta: 1
	},
	Intellect: {
		int: 1
	},
	Versatility: {
		ver: 1
	},
	"The Tiger": {
		str: 0.6,
		agi: 0.6,
	},
	"The Bear": {
		str: 0.6,
		sta: 0.6,
	},
	"The Gorilla": {
		str: 0.6,
		int: 0.6
	},
	"The Boar": {
		str: 0.6,
		ver: 0.6
	},
	"The Monkey": {
		agi: 0.6,
		sta: 0.6
	},
	"The Falcon": {
		agi: 0.6,
		int: 0.6
	},
	"The Wolf": {
		agi: 0.6,
		ver: 0.6
	},
	"The Eagle": {
		sta: 0.6,
		int: 0.6
	},
	"The Whale": {
		sta: 0.6,
		ver: 0.6
	},
	"The Owl": {
		int: 0.6,
		ver: 0.6
	},
	rollGroup() {
		const keys = Object.keys(this);
		return keys[Math.floor(Math.random() * (keys.length - 1))];
	},
};

const droppedItem = {
	name: "Dummy",
	type: "dummy",
	rarity: "trash",
	statGroup: "nothing",
	level: 0,
	str: 0,
	agi: 0,
	sta: 0,
	int: 0,
	ver: 0,
};

function genItem() {
	//pick item type
	droppedItem.type = itemTypes[Math.floor(Math.random() * itemTypes.length)];
	//roll for rarity
	droppedItem.rarity = rarities.rollRarity();
	//roll for group
	droppedItem.statGroup = statGroups.rollGroup();
	//roll level
	droppedItem.level = Math.floor(1 + Math.random() * 10);
	//gen name
	droppedItem.name = `${droppedItem.rarity} ${droppedItem.type} of ${droppedItem.statGroup}`;
	//apply stats
	const stats = statGroups[droppedItem.statGroup];
	const statsKeys = Object.keys(statGroups[droppedItem.statGroup]);
	statsKeys.forEach((stat) => {
		droppedItem[stat] = Math.round(stats[stat] * ((droppedItem.level * 10) * rarities[droppedItem.rarity].multiplier));
	});
}

/*
//test rarity roll
const rolls = {
	Rolls: 0,
	Common: { Count: 0, Percent: 0 },
	Uncommon: { Count: 0, Percent: 0 },
	Rare: { Count: 0, Percent: 0 },
	Epic: { Count: 0, Percent: 0 },
	Legendary: { Count: 0, Percent: 0 },
	Mythic: { Count: 0, Percent: 0 },
};
//tabulate them
for (let i = 0; i < 9999; i++) {
	rolls.Rolls++;
	const curRoll = rarities.rollRarity();
	rolls[curRoll].Count++;
}
//get % of each
rolls.Common.Percent = (rolls.Common.Count / rolls.Rolls) * 100;
rolls.Uncommon.Percent = (rolls.Uncommon.Count / rolls.Rolls) * 100;
rolls.Rare.Percent = (rolls.Rare.Count / rolls.Rolls) * 100;
rolls.Epic.Percent = (rolls.Epic.Count / rolls.Rolls) * 100;
rolls.Legendary.Percent = (rolls.Legendary.Count / rolls.Rolls) * 100;
rolls.Mythic.Percent = (rolls.Mythic.Count / rolls.Rolls) * 100;

console.log(
	`Rolls: ${rolls.Rolls}
	Common: ${rolls.Common.Count} %${rolls.Common.Percent}
	Uncommon: ${rolls.Uncommon.Count} %${rolls.Uncommon.Percent}
	Rare: ${rolls.Rare.Count} %${rolls.Rare.Percent}
	Epic: ${rolls.Epic.Count} %${rolls.Epic.Percent}
	Legendary: ${rolls.Legendary.Count} %${rolls.Legendary.Percent}
	Mythic: ${rolls.Mythic.Count} %${rolls.Mythic.Percent}`
);
*/

genItem();

console.log(`Drop: Level ${droppedItem.level} ${droppedItem.name}`);
if (droppedItem.str) console.log(`Strength: ${droppedItem.str}`);
if (droppedItem.agi) console.log(`Agility: ${droppedItem.agi}`);
if (droppedItem.sta) console.log(`Stamina: ${droppedItem.sta}`);
if (droppedItem.int) console.log(`Intellect: ${droppedItem.int}`);
if (droppedItem.ver) console.log(`Versatility: ${droppedItem.ver}`);

