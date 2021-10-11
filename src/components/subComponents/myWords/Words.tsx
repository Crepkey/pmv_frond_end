import { Fragment } from "react";
import { ExtendedWord } from "../../../utils/interfaces";

interface WordsProps {
	activeWords: ExtendedWord[];
	deletedWords: ExtendedWord[];
	displayedWordsType: "active words" | "deleted words";
}

export default function Words({ activeWords, deletedWords, displayedWordsType }: WordsProps) {
	const displayedWords: ExtendedWord[] = displayedWordsType === "active words" ? activeWords : deletedWords;

	return <Fragment></Fragment>;
}
