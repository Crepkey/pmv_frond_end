import { Fragment } from "react";

/* Interafaces */
import { Word } from "../../../utils/interfaces";

/* Components */
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	activeWords?: Word[];
	deletedWords?: Word[];
	saveWord(word: Word): void;
	deleteWord(word: Word): void;
	restoreWord(word: Word): void;
}

export default function Words({ activeWords, deletedWords, saveWord, deleteWord, restoreWord }: WordsProps) {
	const displayedWords = activeWords ? activeWords : deletedWords;

	return (
		<Fragment>
			{displayedWords?.map((word: Word, index: number) =>
				activeWords ? (
					<ActiveWordRow key={word.id} word={word} rowNumber={index} saveWord={saveWord} deleteWord={deleteWord} />
				) : (
					<DeletedWordRow
						key={word.id}
						word={word}
						rowNumber={index}
						saveWord={saveWord}
						deleteWord={deleteWord}
						restoreWord={restoreWord}
					/>
				),
			)}
		</Fragment>
	);
}
