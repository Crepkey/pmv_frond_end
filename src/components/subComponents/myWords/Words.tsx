import { Fragment } from "react";
import { ExtendedWord } from "../../../utils/interfaces";
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	activeWords: ExtendedWord[];
	deletedWords: ExtendedWord[];
	displayedWordsType: "active words" | "deleted words";
}

export default function Words({ activeWords, deletedWords, displayedWordsType }: WordsProps) {
	const displayedWords: ExtendedWord[] = displayedWordsType === "active words" ? activeWords : deletedWords;

	return (
		<Fragment>
			{displayedWords.map((word: ExtendedWord, index: number) =>
				displayedWordsType === "active words" ? (
					<ActiveWordRow word={word} rowNumber={index} />
				) : (
					<DeletedWordRow word={word} rowNumber={index} />
				),
			)}
		</Fragment>
	);
}
