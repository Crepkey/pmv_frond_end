// React
import { useEffect, useState } from "react";

// Styles
import { GameMainContainer } from "../subComponents/game/styles";

// Interfaces
import { GrammaticalStructure, User, Points } from "../../utils/interfaces";
import { WordInGame } from "sharedInterfaces";

// Components
import ErrorScreen from "../subComponents/game/fullScreenComponents/ErrorScreen";
import StartScreen from "../subComponents/game/fullScreenComponents/StartScreen";
import FinalScreen from "../subComponents/game/fullScreenComponents/FinalScreen";
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";
import GrammarCard from "../subComponents/game/GrammarCard";

// Utils
import set from "lodash/set";
import get from "lodash/get";

export default function Game() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const [owners, setOwners] = useState<User[]>([]);
	const [words, setWords] = useState<WordInGame[]>([]);
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);

	const [timeCounter, setTimeCounter] = useState<number>(0);
	const [timeIntervalId, setTimeIntervalId] = useState<NodeJS.Timeout | null>(null);

	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	const playerIds = [1, 2];
	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;
	const actualGrammaticalStructure = grammaticalStructures[actualIndex];

	useEffect(() => {
		if (timeCounter === 0) {
			clearInterval(timeIntervalId as NodeJS.Timeout);
			setTimeIntervalId(null);
		}
	}, [timeCounter]);

	async function initialize(numberOfWords: number) {
		setLoading(true);

		const response = await fetch(`/lets-play?players=${playerIds[0]}&players=${playerIds[1]}&numberOfWords=${numberOfWords}`);
		const parsedResponse = await response.json();

		setLoading(false);

		if (parsedResponse.error) {
			setError(parsedResponse.error);
			return;
		}

		const owners = get(parsedResponse, "owners", []);
		setOwners(owners);
		setGrammaticalStructures(get(parsedResponse, "grammaticalStructures", []));
		setWords(get(parsedResponse, "words", []));

		const initialPoints = {};
		owners.forEach((o: User) => set(initialPoints, [o.id], 0));
		setPoints(initialPoints);

		setTimeCounter(5);
		countDown();
	}

	function countDown() {
		const newIntervalId = setInterval(() => {
			setTimeCounter((prevCount) => prevCount - 1);
		}, 1000);
		setTimeIntervalId(newIntervalId);
	}

	/* LOADING */
	if (loading === true) {
		return <div>LOADING</div>;
	}

	/* ERROR */
	if (error !== null) {
		return <ErrorScreen error={error} />;
	}

	/* START OF THE GAME */
	if (words.length === 0 || timeCounter > 0) {
		return (
			<StartScreen
				initialize={initialize}
				timeCounter={timeCounter}
				firstPlayer={owners?.find((o: User) => o.id === words[0]?.ownerId)?.name || ""}
			/>
		);
	}

	/* END OF THE GAME */
	if (actualIndex >= words.length) {
		return (
			<FinalScreen
				owners={owners}
				points={points}
				restartGame={() => {
					setActualIndex(0);
					setWords([]);
				}}
			/>
		);
	}

	/* GAME */
	if (actualWord === undefined) {
		return null;
	}
	return (
		<GameMainContainer>
			<GrammarCard actualStructure={actualGrammaticalStructure} />
			<PlayingCard owner={owners?.find((o: User) => o.id === actualOwnerId)} word={actualWord} />
			<EvaluationForm
				key={actualIndex}
				actualWord={actualWord}
				getNextCard={() => setActualIndex(actualIndex + 1)}
				userPoints={get(points, actualOwnerId, 0)}
				setUserPoints={(newPoints: number) => setPoints({ ...points, [actualOwnerId]: newPoints })}
				grammaticalStructureId={actualGrammaticalStructure.id}
			/>
		</GameMainContainer>
	);
}
