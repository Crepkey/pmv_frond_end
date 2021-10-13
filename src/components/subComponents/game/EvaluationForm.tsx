//React
import { useState } from "react";

// Styles
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, Block, GreenButton } from "../../generalComponents/styles";
import { CheckBox, BoldText, ButtonContainer } from "./styles";

// Interfaces
import { Word } from "../../../utils/interfaces";
import { GameStatistics } from "./interfaces";

// Icons
import { BsCheckCircleFill, BsDashCircle } from "react-icons/bs";

// Utils
import get from "lodash/get";
import set from "lodash/set";
import capitalize from "lodash/capitalize";

// Helper functions
import { calculateWordToAsk } from "./calculateByKnowledgeLevels";
import { calculateDataToSave, calculateGamePoints } from "./calculateFinalResult";

interface EvaluationRowProps {
	title: string;
	mainWord?: boolean;
	checked: boolean;
	toggleChecked: () => void;
}

function EvaluationRow({ title, checked, toggleChecked, mainWord }: EvaluationRowProps) {
	return (
		<Block>
			<div style={{ display: "flex", alignItems: "center" }}>
				<CheckBox onClick={toggleChecked}>{checked ? <BsCheckCircleFill size={20} /> : <BsDashCircle size={20} />}</CheckBox>
				{mainWord && <BoldText>main word:</BoldText>}
				{title}
			</div>
		</Block>
	);
}

interface EvaluationFormProps {
	actualWord: Word;
	getNextCard: () => void;
	userPoints: number;
	setUserPoints: (newPoints: number) => void;
}

export default function EvaluationForm({ actualWord, getNextCard, userPoints, setUserPoints }: EvaluationFormProps) {
	const emptyStatistics: GameStatistics = { english: false, hungarian: [] };
	// We only store the actual evaluation in the state and calculate the values (that we need in the database) while saving
	const [statistics, setStatistics] = useState<GameStatistics>(emptyStatistics);
	const [correctGrammar, setCorrectGrammar] = useState<boolean>(false);
	const [mainWordKnown, setMainWordKnown] = useState<boolean>(false);

	const { wordToAsk, wordToAnswer, mainWordType } = calculateWordToAsk(actualWord);

	function save() {
		// calculate the values that we need to save
		const wordToSave = calculateDataToSave(actualWord, statistics);
		/*  TODO 
		1) save to database (it would be better, if we didn't need the whole word, just the modified columns)
		2) save the grammatical knowledge (correctGrammar in state) to some grammatical statistics table
 		*/

		// calculate game points
		const earnedPoints = calculateGamePoints(actualWord, statistics, mainWordKnown, mainWordType, correctGrammar);
		setUserPoints(userPoints + earnedPoints);

		// clear statistics in the state
		setStatistics(emptyStatistics);
		setCorrectGrammar(false);
		setMainWordKnown(false);
		// show next card
		getNextCard();
	}

	return (
		<Card>
			<CardHeader>Evaluation Form</CardHeader>

			<CardBody>
				<CardTitle>
					{capitalize(actualWord.type)} to ask: {wordToAsk}
				</CardTitle>

				<CardBodyScrollContainer>
					{wordToAsk !== actualWord.english && (
						<EvaluationRow
							title={actualWord.english}
							mainWord={wordToAnswer === actualWord.english}
							checked={statistics.english}
							toggleChecked={() => {
								setStatistics({ ...statistics, english: !statistics.english });
								if (wordToAnswer === actualWord.english) {
									setMainWordKnown(!mainWordKnown);
								}
							}}
						/>
					)}
					{actualWord.hungarian.map((meaning: string, i: number) => {
						const checked = get(statistics, ["hungarian", i], false);
						if (wordToAsk !== meaning) {
							return (
								<EvaluationRow
									key={i}
									title={meaning}
									mainWord={wordToAnswer === meaning}
									checked={checked}
									toggleChecked={() => {
										const evaluatedHungarian = set([...statistics.hungarian], i, !checked);
										setStatistics({ ...statistics, hungarian: evaluatedHungarian });
										if (wordToAnswer === meaning) {
											setMainWordKnown(!mainWordKnown);
										}
									}}
								/>
							);
						}
						return null;
					})}
					<EvaluationRow title="grammatical structure" checked={correctGrammar} toggleChecked={() => setCorrectGrammar(!correctGrammar)} />
				</CardBodyScrollContainer>

				<ButtonContainer>
					<GreenButton onClick={save}>Save</GreenButton>
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
