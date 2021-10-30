import { Fragment } from "react";

/* Interafaces */
import { WordOperationType } from "../../../utils/interfaces";
import { Word } from "sharedInterfaces";

/* Components */
import ActiveWordRow from "./ActiveWordRow";
import DeletedWordRow from "./DeletedWordRow";

interface WordsProps {
	activeWords?: Word[];
	deletedWords?: Word[];
	updateWord(word: Word, operation: WordOperationType): void;
	deleteWord?(word: Word): void;
}

export default function Words({ activeWords, deletedWords, updateWord, deleteWord }: WordsProps) {
	const displayedWords = activeWords ? activeWords : deletedWords;

	return (
		<Fragment>
			{displayedWords?.map((word: Word, index: number) =>
				activeWords ? (
					<ActiveWordRow key={word.id} word={word} rowNumber={index} updateWord={updateWord} />
				) : (
					<DeletedWordRow
						key={word.id}
						word={word}
						rowNumber={index}
						updateWord={updateWord}
						deleteWord={deleteWord ? deleteWord : () => {}}
					/>
				),
			)}
		</Fragment>
	);
}
