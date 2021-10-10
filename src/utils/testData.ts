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
		notes: "A narrow channel dug in the ground, typically used for drainage alongside a road or the edge of a field.",
		ownerId: 1,
	},
	{
		english: "candid",
		hungarian: ["őszinte", "nyílt", "pártatlan"],
		sentences: ["His responses were remarkably candid.", "Candid is my new favourite word."],
		ownerId: 2,
	},
	{
		english: "correct",
		hungarian: ["helyes", "korrekt", "helytálló", "kijavít", "helyesbít", "korrigál", "javít"],
		sentences: ["Make sure you have been given the correct information"],
		notes: "Free from error.",
		ownerId: 1,
	},
	{
		english: "achieve",
		hungarian: ["elér", "megvalósít"],
		sentences: ["He achieved his ambition to become a journalist"],
		ownerId: 2,
	},
];
