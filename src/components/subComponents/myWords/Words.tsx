import { Fragment } from "react";

/* Interafaces */
import { ExtendedWord } from "../../../utils/interfaces";
import { APICallResult } from "../../mainComponents/MyWords";

/* Components */
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	words: APICallResult;
	displayedWordsType: "active" | "deleted";
	openModal(): void;
}

export default function Words({ words, displayedWordsType, openModal }: WordsProps) {
	const displayedWords: ExtendedWord[] = displayedWordsType === "active" ? words.activeWords : words.deletedWords;

	return (
		<Fragment>
			{displayedWords.map((word: ExtendedWord, index: number) =>
				displayedWordsType === "active" ? (
					<ActiveWordRow key={word.id} word={word} rowNumber={index} openModal={openModal} />
				) : (
					<DeletedWordRow key={word.id} word={word} rowNumber={index} openModal={openModal} />
				),
			)}
		</Fragment>
	);
}
