// React
import { useState } from "react";

// Styles
import { GameMainContainer, GameHeader, GameBody } from "../subComponents/game/styles";

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
import ProgressBar from "../generalComponents/ProgressBar";

// Utils
import set from "lodash/set";
import get from "lodash/get";
import round from "lodash/round";

export default function Game() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const [owners, setOwners] = useState<User[]>([]);
	const [words, setWords] = useState<WordInGame[]>([]);
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);

	const [countDownOn, setCountDownOn] = useState<boolean>(false);

	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	const playerIds = [1, 2];
	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;
	const actualGrammaticalStructure = grammaticalStructures[actualIndex];

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

		setCountDownOn(true);
		setTimeout(() => setCountDownOn(false), 5002);
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
	if (words.length === 0 || countDownOn) {
		return (
			<StartScreen
				initialize={initialize}
				firstPlayer={owners?.find((o: User) => o.id === words[0]?.ownerId)?.name || ""}
				countDownOn={countDownOn}
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
			<GameHeader>
				<ProgressBar status={round(((actualIndex + 1) / words.length) * 100, 0)} />
			</GameHeader>
			<GameBody>
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
			</GameBody>
		</GameMainContainer>
	);
}
