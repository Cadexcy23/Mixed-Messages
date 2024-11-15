// simulate loot drops for a warrior

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
// Level 1:10 Stat
// Level 2:20 Stat

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
// Strength (Str:1)
// The Tiger (Str:.6 Dex:.6)
// The Bear (Str:.6 Sta:.6)
// The Gorilla (Str:.6 Int:.6)
// The Boar (Str:.6 Ver:.6)
// Agility (Agi:1)
// The Monkey (Agi:.6 Sta:.6)
// The Falcon (Agi:.6 Int:.6)
// The Wolf (Agi:.6 Ver:.6)
// Stamina (Sta:1)
// The Eagle (Sta:.6 Int:.6)
// The Whale (Sta:.6 Ver:.6)
// Intellect (Int:1)
// The Owl (Int:.6 Ver:.6)
// Versatility (Ver:1)

const statGroups = {
	Strength: {
		str: 1,
	},
	"The Tiger": {
		str: 0.6,
		dex: 0.6,
	},
	"The Bear": {
		str: 0.6,
		sta: 0.6,
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

function randType() {
	return itemTypes[Math.floor(Math.random() * itemTypes.length)];
}

function genItem() {
	//pick item type
	droppedItem.type = randType();
	//roll for rarity
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
console.log(droppedItem);
