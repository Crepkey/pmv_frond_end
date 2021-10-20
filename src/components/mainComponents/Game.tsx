// React
import { useEffect, useState } from "react";

// Styles
import { GameMainContainer } from "../subComponents/game/styles";

// Interfaces
import { GrammaticalStructure, User, Points, WordWithScores } from "../../utils/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";
import FinalScreen from "../subComponents/game/FinalScreen";
import GrammarCard from "../subComponents/game/GrammarCard";

// Utils
import set from "lodash/set";
import get from "lodash/get";

export default function Game() {
	const [loading, setLoading] = useState(true);

	const playerIds = [1, 2];
	const [owners, setOwners] = useState<User[]>([]);
	const [words, setWords] = useState<WordWithScores[]>([]);
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);

	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	// const [error, setError] = useState<string>(undefined);

	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;

	useEffect(
		() => {
			initialize();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	async function initialize() {
		const response = await fetch(`/lets-play?players=${playerIds[0]}&players=${playerIds[1]}`);
		const parsedResponse = await response.json();
		console.log(parsedResponse);

		const owners = get(parsedResponse, "owners", []);
		setOwners(owners);
		setGrammaticalStructures(get(parsedResponse, "grammaticalStructures", []));
		setWords(get(parsedResponse, "words", []));

		const initialPoints = {};
		owners.forEach((o: User) => set(initialPoints, [o.id], 0));
		setPoints(initialPoints);
		setLoading(false);
	}

	/* LOADING */
	if (loading === true) {
		// TODO nice load screen
		return <div>LOADING</div>;
	}

	/* END OF GAME */
	if (actualIndex >= words.length) {
		return (
			<FinalScreen
				owners={owners}
				points={points}
				restartGame={() => {
					setActualIndex(0);
					initialize();
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
			<GrammarCard actualStructure={grammaticalStructures[actualIndex]} />
			<PlayingCard owner={owners?.find((o: User) => o.id === actualOwnerId)} word={actualWord} />
			<EvaluationForm
				actualWord={actualWord}
				getNextCard={() => setActualIndex(actualIndex + 1)}
				userPoints={get(points, actualOwnerId, 0)}
				setUserPoints={(newPoints: number) => setPoints({ ...points, [actualOwnerId]: newPoints })}
			/>
		</GameMainContainer>
	);
}
