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
		english: "ditch",
		hungarian: ["árok", "csatorna", "körülárkol"],
		sentences: ["Why do you have a ditch in front of your house?"],
		notes: "I dont have notes here",
		ownerId: 1,
	},
	{
		english: "candid",
		hungarian: ["őszinte", "nyílt", "pártatlan"],
		sentences: ["His responses were remarkably candid.", "Candid is my new favourite word."],
		ownerId: 2,
	},
];
