/* Interfaces */
import { ColorCodeType, Word, WordOperationType } from "../../../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import SpinnerBar from "../../generalComponents/SpinnerBar";

/* Components */
import ActiveWordIcons from "./ActiveWordIcons";

/* Utils */
import { calculateRowBackground, convertMemoryLevelToText } from "./utils";

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

interface ActiveWordRowProps {
	word: Word;
	rowNumber: number;
	updateWord(word: Word, operation: WordOperationType): void;
}

export default function ActiveWordRow({ word, rowNumber, updateWord }: ActiveWordRowProps) {
	const background: ColorCodeType = calculateRowBackground(rowNumber);
	return (
		<WordRow key={word.id} background={background}>
			<EnglishWord>{word.english}</EnglishWord>
			<HungarianWords>{word.hungarian.map((hunWord: string) => `${hunWord} `)}</HungarianWords>
			<MemoryLevel>
				<SpinnerBar size={24} status={word.memoryLevel} style={{ margin: "0 12px 0 0", background }} />
				<MemoryState>{convertMemoryLevelToText(word.memoryLevel)}</MemoryState>
			</MemoryLevel>
			<ActiveWordIcons word={word} updateWord={updateWord} />
		</WordRow>
	);
}
