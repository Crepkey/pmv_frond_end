/* Styles */
import { colors } from "../../../utils/colors";
import styled from "styled-components";
import { Word } from "sharedInterfaces";
import { generateID } from "src/utils/utils";
import ScoreboardRow from "./ScoreboardRow";

/* Components */

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
`;

const Title = styled.div`
	display: flex;
	justify-content: center;
	padding: 24px;
	font-weight: 600;
	font-size: 1.5rem;
`;

const TableContainer = styled.div`
	display: flex;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 12px 24px 12px 24px;
`;

const TableBlock = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
	padding: 32px;
	background: ${colors.blockBackground};
	border-radius: 24px;
`;

const TableHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 2rem;
	font-weight: 550;
	padding: 3px 12px 3px 12px;
	border-radius: 16px 16px 0 0;
	border: 1px ${colors.border} solid;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
`;

const TableHeaderElement = styled.div<{ size: number }>`
	display: flex;
	flex: ${({ size }) => size};
	align-items: center;
`;

const WordContainer = styled.div`
	display: flex;
	flex: 10;
	flex-direction: column;
	overflow: scroll;
	min-width: 0;
	min-height: 0;
	border-left: 1px solid ${colors.border};
	border-right: 1px solid ${colors.border};
	border-bottom: 1px solid ${colors.border};
	border-radius: 0 0 16px 16px;
	background: ${colors.background};
`;

export default function Scoreboard() {
	const dummyData: Word[] = [
		{
			id: generateID(),
			english: "Unwed",
			hungarian: ["hajadon", "nőtlen"],
			exampleSentences: [
				"What would have happened to those children of unwed teenage mothers if they hadn't been adopted?",
				"Even over the past two years, it is estimated there are 18,000 fewer nuclear family homes, including both married and unwed parents",
			],
			type: "word",
			ownerId: 1,
			memoryLevel: 6,
			favourite: false,
			notes: "Petra is unwed",
			definitions: ["Not married"],
			deletionDate: null,
		},
		{
			id: generateID(),
			english: "Adamant",
			hungarian: ["hajthatatlan", "gyémántkeménységű anyag"],
			exampleSentences: [
				"He is adamant that he is not going to resign",
				"We tried to persuade them to let us show the film at Edinburgh, but Venice's new director was adamant that we couldn't",
			],
			type: "word",
			ownerId: 1,
			memoryLevel: 6,
			favourite: false,
			notes: "Petra is unwed",
			definitions: [
				"Refusing to be persuaded or to change one's mind.",
				"A legendary rock or mineral to which many, often contradictory, properties were attributed, formerly associated with diamond or lodestone.",
			],
			deletionDate: null,
		},
		{
			id: generateID(),
			english: "Skillful",
			hungarian: ["ügyes", "gyakorlott"],
			exampleSentences: [
				"You are brilliant, active and skillful in professional ventures and gain repute in your field of activity",
				"He was also a robust, competitive and skillful GAA player in both hurling and football",
			],
			type: "word",
			ownerId: 1,
			memoryLevel: 6,
			favourite: false,
			notes: "Petra is unwed",
			definitions: ["Having or showing skill."],
			deletionDate: null,
		},
	];
	return (
		<MainContainer>
			<Title>THE RESULT OF YOUR PRACTICE</Title>
			<TableContainer>
				<TableBlock>
					<TableHeader>
						<TableHeaderElement size={1}>Question</TableHeaderElement>
						<TableHeaderElement size={1}>Your answer</TableHeaderElement>
						<TableHeaderElement size={1}>Possible Answers</TableHeaderElement>
						<TableHeaderElement size={1}>Result</TableHeaderElement>
					</TableHeader>
					<WordContainer>
						{dummyData.map((word: Word, index: number) => (
							<ScoreboardRow word={word} rowNumber={index} />
						))}
					</WordContainer>
				</TableBlock>
			</TableContainer>
		</MainContainer>
	);
}
