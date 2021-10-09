import { useState } from "react";

// Styles
import styled from "styled-components";
import { colors } from "../../../utils/colors";

// Interfaces
import { Word } from "../../../utils/interfaces";

// Icons
import { BsCheckCircleFill, BsDashCircle } from "react-icons/bs";

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

const ScrollContainer = styled.div`
	padding: 24px;
	min-width: 0;
	min-height: 0;
	overflow: scroll;
	flex: 1;
	margin-bottom: 24px;
`;

const Requirement = styled.div`
	display: flex;
`;

interface EvaluationRowProps {
	title?: string;
	checked: boolean;
	toggleChecked: () => void;
}

function EvaluationRow({ title, checked, toggleChecked }: EvaluationRowProps) {
	return (
		<Requirement>
			<div onClick={toggleChecked}>{checked ? <BsCheckCircleFill /> : <BsDashCircle />}</div>
			{title}
		</Requirement>
	);
}

interface EvaluationFormProps {
	actualWord: Word | undefined;
}

export default function EvaluationForm({ actualWord }: EvaluationFormProps) {
	// We only store the actual evaluation in the state and calculate the values (that we need in the database) while saving
	const [statistics, setStatistics] = useState<{ english: boolean; hungarian: boolean[] }>({ english: false, hungarian: [] });

	return (
		<Card>
			<CardHeader>Evaluation Form</CardHeader>

			<ScrollContainer>
				<EvaluationRow
					title={actualWord?.english}
					checked={statistics.english}
					toggleChecked={() => setStatistics({ ...statistics, english: !statistics.english })}
				/>

				{actualWord?.hungarian.map((meaning: string, i: number) => (
					<Requirement key={i}>{meaning}</Requirement>
				))}

				<Requirement>Example sentence + grammatical structure</Requirement>
			</ScrollContainer>
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
