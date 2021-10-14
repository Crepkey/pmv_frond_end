/* Interfaces */
import { Word } from "../../../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import SpinnerBar from "../../generalComponents/SpinnerBar";

/* Components */
import WordHandlerIcons from "./WordHandlerIcons";

/* Utils */
import { calculateRowBackground, convertMemoryLevelToText } from "./utils";
import dayjs, { Dayjs } from "dayjs";

const WordRow = styled.div<{ background: string }>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2rem;
	padding: 3px 12px 3px 12px;
	background: ${({ background }) => background};
	border-bottom: 1px ${colors.rowBorder} solid;
`;

const EnglishWord = styled.div`
	display: flex;
	flex: 2;
	padding-right: 12px;
	font-weight: 450;
`;

const HungarianWords = styled.div`
	display: flex;
	flex: 5;
	padding-right: 12px;
	font-weight: 300;
`;

const MemoryLevel = styled.div`
	display: flex;
	flex: 2;
	align-items: center;
	padding-right: 12px;
`;

const MemoryState = styled.div`
	font-weight: 350;
`;

const DeletionCountdown = styled.div`
	display: flex;
	flex: 1;
	color: ${colors.error};
`;

interface DeletedWordRowProps {
	word: Word;
	rowNumber: number;
	saveWord(word: Word): void;
	deleteWord(word: Word): void;
}

export default function DeletedWordRow({ word, rowNumber, saveWord, deleteWord }: DeletedWordRowProps) {
	function calcDiffBetweenDates() {
		const today: Dayjs = dayjs();
		const deletionDate: Dayjs = dayjs(word.deletionDate);
		const result = today.diff(deletionDate, "day");
		const text = result === 1 ? " day left" : " days left";
		return result + text;
	}

	return (
		<WordRow key={word.id} background={calculateRowBackground(rowNumber)}>
			<EnglishWord>{word.english}</EnglishWord>
			<HungarianWords>{word.hungarian.map((hunWord: string) => `${hunWord} `)}</HungarianWords>
			<MemoryLevel>
				<SpinnerBar size={24} status={word.memoryLevel} style={{ margin: "0 12px 0 0", background: calculateRowBackground(rowNumber) }} />
				<MemoryState>{convertMemoryLevelToText(word.memoryLevel)}</MemoryState>
			</MemoryLevel>
			<DeletionCountdown>{calcDiffBetweenDates()}</DeletionCountdown>
			<WordHandlerIcons word={word} saveWord={saveWord} deleteWord={deleteWord} />
		</WordRow>
	);
}
