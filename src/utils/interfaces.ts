export interface Owner {
	name: string;
	sex: "male" | "female";
}

export type WordType = "word" | "expression";
export interface Word {
	english: string;
	hungarian: string[];
	sentences: string[];
	notes?: string;
	type?: WordType;
	favourite?: boolean;
}
