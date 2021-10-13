import { Fragment } from "react";

/* Interafaces */
import { Word } from "../../../utils/interfaces";
import { APICallResult } from "../../mainComponents/MyWords";

/* Components */
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	words: APICallResult;
	displayedWordsType: "active" | "deleted";
}

export default function Words({ words, displayedWordsType }: WordsProps) {
	const displayedWords: Word[] = displayedWordsType === "active" ? words.activeWords : words.deletedWords;

	return (
		<Fragment>
			{displayedWords.map((word: Word, index: number) =>
				displayedWordsType === "active" ? (
					<ActiveWordRow key={word.id} word={word} rowNumber={index} />
				) : (
					<DeletedWordRow key={word.id} word={word} rowNumber={index} />
				),
			)}
		</Fragment>
	);
}
