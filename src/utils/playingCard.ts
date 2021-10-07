import { Owner, Word } from "./interfaces";
interface Data {
	owner: Owner;
	word: Word;
}

export const data: Data = {
	owner: {
		name: "Petra",
		sex: "female",
	},
	word: {
		english: "ditch",
		hungarian: ["árok", "csatorna", "körülárkol"],
		sentences: ["Why do you have a ditch in front of your house?"],
		notes: "I dont have notes here",
	},
};

export const data_2: Data = {
	owner: {
		name: "Édi",
		sex: "male",
	},
	word: {
		english: "candid",
		hungarian: ["őszinte", "nyílt", "pártatlan"],
		sentences: ["His responses were remarkably candid.", "Candid is my new favourite word."],
	},
};
