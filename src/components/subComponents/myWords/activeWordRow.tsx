import React from "react";

/* Interfaces */
import { ExtendedWord } from "../../../utils/interfaces";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import SpinnerBar from "../../generalComponents/SpinnerBar";

/* Components */
import WordHandler from "./wordHandler";

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
	words: ExtendedWord[];
}

export default function ActiveWordRow({ words }: ActiveWordRowProps) {
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
		<React.Fragment>
			{words.map((word: ExtendedWord, index: number) => (
				<WordRow key={word.id} background={calculateRowBackground(index)}>
					<EnglishWord>{word.english}</EnglishWord>
					<HungarianWords>{word.hungarian.map((hunWord: string) => `${hunWord} `)}</HungarianWords>
					<MemoryLevel>
						<SpinnerBar size={24} status={word.memoryLevel} style={{ margin: "0 12px 0 0", background: calculateRowBackground(index) }} />
						<MemoryState>{convertMemoryLevelToText(word.memoryLevel)}</MemoryState>
					</MemoryLevel>
					<WordHandler word={word} />
				</WordRow>
			))}
		</React.Fragment>
	);
}
