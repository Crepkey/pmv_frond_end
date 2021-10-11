/* Interfaces */
import { ExtendedWord } from "../../../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import SpinnerBar from "../../generalComponents/SpinnerBar";

/* Components */
import WordHandler from "./WordHandler";

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
	word: ExtendedWord;
	rowNumber: number;
}

export default function DeletedWordRow({ word, rowNumber }: DeletedWordRowProps) {
	function calculateRowBackground(index: number) {
		if (index % 2 === 0) return colors.rowBackgroundLight;
		return colors.rowBackgroundDark;
	}

	function convertMemoryLevelToText(memoryLevel: number) {
		if (memoryLevel === 0) return "Unused word";
		if (memoryLevel >= 1 && memoryLevel <= 25) return "New word";
		if (memoryLevel >= 26 && memoryLevel <= 50) return "Short term memory";
		if (memoryLevel >= 51 && memoryLevel <= 75) return "Medium term memory";
		if (memoryLevel >= 76 && memoryLevel <= 100) return "Long term memory";
	}

	return (
		<WordRow key={word.id} background={calculateRowBackground(rowNumber)}>
			<EnglishWord>{word.english}</EnglishWord>
			<HungarianWords>{word.hungarian.map((hunWord: string) => `${hunWord} `)}</HungarianWords>
			<MemoryLevel>
				<SpinnerBar size={24} status={word.memoryLevel} style={{ margin: "0 12px 0 0", background: calculateRowBackground(rowNumber) }} />
				<MemoryState>{convertMemoryLevelToText(word.memoryLevel)}</MemoryState>
			</MemoryLevel>
			<DeletionCountdown>10 days left</DeletionCountdown>
			<WordHandler word={word} />
		</WordRow>
	);
}
