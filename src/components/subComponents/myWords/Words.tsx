import { Fragment } from "react";

/* Interafaces */
import { Word } from "../../../utils/interfaces";

/* Components */
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	activeWords?: Word[];
	deletedWords?: Word[];
}

export default function Words({ activeWords, deletedWords }: WordsProps) {
	const displayedWords = activeWords ? activeWords : deletedWords;

	return (
		<Fragment>
			{displayedWords?.map((word: Word, index: number) =>
				activeWords ? (
					<ActiveWordRow key={word.id} word={word} rowNumber={index} />
				) : (
					<DeletedWordRow key={word.id} word={word} rowNumber={index} />
				),
			)}
		</Fragment>
	);
}
