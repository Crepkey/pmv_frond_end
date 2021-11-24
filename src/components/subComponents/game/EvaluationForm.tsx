//React
import { useContext, useEffect, useState } from "react";

// Context
import { AppContext } from "src/AppContext";

// Styles
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, GreenButton } from "../../generalComponents/styles";
import { CheckBox, BoldText, ButtonContainer, EvalRow, TitleContainer, TitleIcon } from "./styles";

// Interfaces
import { GameStatistics, ServerError, WordInGame } from "sharedInterfaces";

// Icons
import { BsCheckCircleFill, BsDashCircle } from "react-icons/bs";
import { IoTimerOutline } from "react-icons/io5";

// Utils
import get from "lodash/get";
import set from "lodash/set";
import capitalize from "lodash/capitalize";
import { generateID } from "src/utils/utils";

// Helper functions
import { calculateGamePoints } from "./calculations/calculateFinalResult";

interface EvaluationRowProps {
	title: string;
	mainWord?: boolean;
	checked: boolean;
	toggleChecked: () => void;
}

function EvaluationRow({ title, checked, toggleChecked, mainWord }: EvaluationRowProps) {
	return (
		<EvalRow onClick={toggleChecked}>
			<CheckBox>{checked ? <BsCheckCircleFill size={20} /> : <BsDashCircle size={20} />}</CheckBox>
			{mainWord && <BoldText>main word:</BoldText>}
			{title}
		</EvalRow>
	);
}

interface EvaluationFormProps {
	actualWord: WordInGame;
	grammaticalStructureId: number;
	getNextCard: () => void;
	userPoints: number;
	setUserPoints: (newPoints: number) => void;
}

export default function EvaluationForm({ actualWord, grammaticalStructureId, getNextCard, userPoints, setUserPoints }: EvaluationFormProps) {
	const emptyStatistics: GameStatistics = { english: false, hungarian: [] };
	// We only store the actual evaluation in the state and calculate the values (that we need in the database) while saving
	const [gameStatistics, setGameStatistics] = useState<GameStatistics>(emptyStatistics);
	const [correctGrammar, setCorrectGrammar] = useState<boolean>(false);

	const [timeCounter, setTimeCounter] = useState<number>(0);
	const [timeIntervalId, setTimeIntervalId] = useState<NodeJS.Timeout | null>(null);

	const { createToast } = useContext(AppContext);

	const { wordToAsk, wordToAnswer } = actualWord;

	useEffect(() => {
		if (timeCounter === 0) {
			clearInterval(timeIntervalId as NodeJS.Timeout);
			setTimeIntervalId(null);
		}
	}, [timeCounter, timeIntervalId]);

	function countDown(timeOfCounting: number) {
		if (timeIntervalId !== null) {
			clearInterval(timeIntervalId as NodeJS.Timeout);
			setTimeIntervalId(null);
			return;
		}
		setTimeCounter(timeOfCounting);
		const newIntervalId = setInterval(() => {
			setTimeCounter((prevCount) => prevCount - 1);
		}, 1000);
		setTimeIntervalId(newIntervalId);
	}

	async function save() {
		// save updated word and grammatical knowledge on backend
		const response = await fetch(`/lets-play/${actualWord.id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ word: actualWord, gameStatistics, grammaticalStructure: { id: grammaticalStructureId, known: correctGrammar } }),
		});
		const parsedResponse: WordInGame | ServerError = await response.json();
		if ("error" in parsedResponse) {
			createToast({
				id: generateID(),
				type: "error",
				title: "Server Error",
				details: `An error occurred while saving the evaluation result: ${parsedResponse.message}`,
			});
			return;
		}
		createToast({
			id: generateID(),
			type: "success",
			title: "Success",
			details: "Save successful, please wait 5 seconds for the next word.",
		});

		// calculate game points
		const earnedPoints = calculateGamePoints(actualWord, gameStatistics, correctGrammar);

		// show next card
		setTimeout(() => {
			setUserPoints(userPoints + earnedPoints);
			getNextCard();
		}, 5000);
	}

	return (
		<Card>
			<CardHeader>Evaluation form</CardHeader>

			<CardBody>
				<TitleContainer>
					<CardTitle>
						{capitalize(actualWord.type)} to ask: {wordToAsk}
					</CardTitle>
					<TitleIcon onClick={() => countDown(30)}>
						<IoTimerOutline size={32} />
						<div>{timeCounter}</div>
					</TitleIcon>
				</TitleContainer>

				<CardBodyScrollContainer>
					{wordToAsk !== actualWord.english && (
						<EvaluationRow
							title={actualWord.english}
							mainWord={wordToAnswer === actualWord.english}
							checked={gameStatistics.english}
							toggleChecked={() => {
								setGameStatistics({ ...gameStatistics, english: !gameStatistics.english });
							}}
						/>
					)}
					{actualWord.hungarian.map((meaning: string, i: number) => {
						const checked = get(gameStatistics, ["hungarian", i], false);
						if (wordToAsk !== meaning) {
							return (
								<EvaluationRow
									key={i}
									title={meaning}
									mainWord={wordToAnswer === meaning}
									checked={checked}
									toggleChecked={() => {
										const evaluatedHungarian = set([...gameStatistics.hungarian], i, !checked);
										setGameStatistics({ ...gameStatistics, hungarian: evaluatedHungarian });
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
