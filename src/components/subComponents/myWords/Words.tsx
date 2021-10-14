import { Fragment } from "react";

/* Interafaces */
import { Word } from "../../../utils/interfaces";

/* Components */
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	activeWords?: Word[];
	deletedWords?: Word[];
	save(word: Word): void;
}

export default function Words({ activeWords, deletedWords, save }: WordsProps) {
	const displayedWords = activeWords ? activeWords : deletedWords;

	return (
		<Fragment>
			{displayedWords?.map((word: Word, index: number) =>
				activeWords ? (
					<ActiveWordRow key={word.id} word={word} rowNumber={index} save={save} />
				) : (
					<DeletedWordRow key={word.id} word={word} rowNumber={index} save={save} />
				),
			)}
		</Fragment>
	);
}
