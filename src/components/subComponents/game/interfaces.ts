import { WordWithScores, LanguageType, TagColor } from "sharedInterfaces";

export interface WordInGame extends WordWithScores {
	wordToAsk: string;
	wordToAnswer: string;
	mainWordType: LanguageType;
	tagColors: TagColor[];
}
