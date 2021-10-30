import { WordWithScores } from "./../../../utils/interfaces";
import { LanguageType } from "../../../utils/interfaces";

export interface WordInGame extends WordWithScores {
	wordToAsk: string;
	wordToAnswer: string;
	mainWordType: LanguageType;
	tagColors: TagColor[];
}
