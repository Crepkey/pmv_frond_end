import { useState } from "react";

// Styles
import styled from "styled-components";
import { colors } from "../../../utils/colors";

// Interfaces
import { Word } from "../../../utils/interfaces";

// Icons
import { BsCheckCircleFill, BsDashCircle } from "react-icons/bs";

// Utils
import get from "lodash/get";
import set from "lodash/set";
import flatten from "lodash/flatten";

// TODO general card component??
const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	margin: 16px;
	width: 32%;
	min-width: 20rem;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const CardHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: 450;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	border-bottom: 1px solid ${colors.border};
	padding: 0 16px 0 16px;
	min-height: 3rem;
`;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 24px;
`;

const ScrollContainer = styled.div`
	min-width: 0;
	min-height: 0;
	overflow: scroll;
	flex: 1;
	margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 16px;
	border: none;
	width: 30%;
	background-color: ${colors.acceptButtonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.acceptButtonGradientLight} 5%, ${colors.acceptButtonGradientDark} 100%);
		background-color: ${colors.acceptButtonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

const Block = styled.div`
	display: flex;
	background: ${colors.blockBackground};
	border-radius: 24px;
	padding: 24px;
	margin-bottom: 24px;
	font-weight: 300;
	align-items: center;
`;

const CheckBox = styled.div`
	margin-right: 16px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

interface EvaluationRowProps {
	title?: string;
	checked: boolean;
	toggleChecked: () => void;
}

function EvaluationRow({ title, checked, toggleChecked }: EvaluationRowProps) {
	return (
		<Block>
			<CheckBox onClick={toggleChecked}>{checked ? <BsCheckCircleFill size={20} /> : <BsDashCircle size={20} />}</CheckBox>
			{title}
		</Block>
	);
}

interface EvaluationFormProps {
	actualWord: Word;
	getNextCard: () => void;
}

export default function EvaluationForm({ actualWord, getNextCard }: EvaluationFormProps) {
	const emptyStatistics = { english: false, hungarian: [] };
	// We only store the actual evaluation in the state and calculate the values (that we need in the database) while saving
	const [statistics, setStatistics] = useState<{ english: boolean; hungarian: boolean[] }>(emptyStatistics);
	const [correctGrammar, setCorrectGrammar] = useState<boolean>(false);

	function save() {
		// calculate the values that we need to save
		const scoreBefore = actualWord.actualScore;
		const scoreNow = flatten(Object.values(statistics)).filter((s: boolean) => s === true).length;
		const actualScore = scoreBefore + scoreNow;

		// TODO set deleted property in word, if ActualScore >= ScoreToAchieve ---> you don't have to practice this word anymore
		const wordToSave = { ...actualWord, actualScore, memoryLevel: (actualScore / actualWord.scoreToAchieve) * 100 };
		console.log(wordToSave);
		// TODO save to database

		// clear statistics is state
		setStatistics(emptyStatistics);
		setCorrectGrammar(false);
		// show next card
		getNextCard();
	}

	return (
		<Card>
			<CardHeader>Evaluation Form</CardHeader>

			<CardBody>
				<ScrollContainer>
					<EvaluationRow
						title={actualWord.english}
						checked={statistics.english}
						toggleChecked={() => setStatistics({ ...statistics, english: !statistics.english })}
					/>
					{actualWord.hungarian.map((meaning: string, i: number) => {
						const checked = get(statistics, ["hungarian", i], false);
						return (
							<EvaluationRow
								key={i}
								title={meaning}
								checked={checked}
								toggleChecked={() => {
									const evaluatedHungarian = set([...statistics.hungarian], i, !checked);
									setStatistics({ ...statistics, hungarian: evaluatedHungarian });
								}}
							/>
						);
					})}
					<EvaluationRow title="grammatical structure" checked={correctGrammar} toggleChecked={() => setCorrectGrammar(!correctGrammar)} />
				</ScrollContainer>
				<ButtonContainer>
					<Button onClick={save}>Save</Button>
				</ButtonContainer>
			</CardBody>
		</Card>
	);
}

/*  In the database:

Words table:
ActualScore: number --- after the evaluation and calculation, we will store the new score in this column
ScoreToAchieve: number --- the final score, if ActualScore >= ScoreToAchieve, you don't have to practice this word anymore
MemoryLevel: number --- ActualScore / ScoreToAchieve : shows in percentage, where you are now in the learning phase
Statistics: object: 
        {
            english: number;
            hungarian: number[]; // numbers have the same indices as words in the 'hungarian' column
        }
        We store your knowledge levels in this object, which is needed for the statistics of the words.
        The sum of the object's values should be the ActualScore

Users + Grammatical structures table:
We have to store, if the user knew the chosen grammatical structure or not
 */
