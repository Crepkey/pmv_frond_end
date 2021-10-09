export interface Owner {
	name: string;
	sex: "male" | "female";
	id: number;
}

export type WordType = "word" | "expression";
export interface Word {
	ownerId: number;
	english: string;
	hungarian: string[];
	sentences: string[];
	notes?: string;
	type?: WordType;
	favourite?: boolean;
	memoryLevel?: number;
}
