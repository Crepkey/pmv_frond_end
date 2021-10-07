export interface Owner {
	name: string;
	sex: "male" | "female";
}

export interface Word {
	english: string;
	hungarian: string[];
	sentences: string[];
	notes?: string;
}
