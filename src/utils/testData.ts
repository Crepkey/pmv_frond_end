import { Owner, Word } from "./interfaces";

export const testOwners: Owner[] = [
	{
		name: "Ati",
		sex: "male",
		id: 1,
	},
	{
		name: "Petra",
		sex: "female",
		id: 2,
	},
];

export const testWords: Word[] = [
	{
		type: "word",
		english: "ditch",
		hungarian: ["árok", "csatorna", "körülárkol"],
		sentences: ["Why do you have a ditch in front of your house?"],
		notes: "A narrow channel dug in the ground, typically used for drainage alongside a road or the edge of a field.",
		ownerId: 1,
		actualScore: 20,
		scoreToAchieve: 40,
		memoryLevel: 50,
		statistics: {
			english: 8,
			hungarian: [8, 1, 3],
		},
	},
	{
		type: "word",
		english: "candid",
		hungarian: ["őszinte", "nyílt", "pártatlan"],
		sentences: ["His responses were remarkably candid.", "Candid is my new favourite word."],
		ownerId: 2,
		actualScore: 0,
		scoreToAchieve: 40,
		memoryLevel: 0,
		statistics: {
			english: 0,
			hungarian: [0, 0, 0],
		},
	},
	{
		type: "word",
		english: "correct",
		hungarian: ["helyes", "korrekt", "helytálló", "kijavít", "helyesbít", "korrigál", "javít"],
		sentences: ["Make sure you have been given the correct information"],
		notes: "Free from error.",
		ownerId: 1,
		actualScore: 72,
		scoreToAchieve: 80,
		memoryLevel: 90,
		statistics: {
			english: 10,
			hungarian: [12, 8, 6, 9, 5, 10, 12],
		},
	},
	{
		type: "word",
		english: "achieve",
		hungarian: ["elér", "megvalósít"],
		sentences: ["He achieved his ambition to become a journalist"],
		ownerId: 2,
		actualScore: 8,
		scoreToAchieve: 30,
		memoryLevel: 26.66,
		statistics: {
			english: 2,
			hungarian: [5, 1],
		},
	},
];
