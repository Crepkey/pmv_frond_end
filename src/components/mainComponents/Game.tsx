// React
import { useEffect, useState } from "react";

// Styles
import { BoldLargeMessage, ErrorContainer, GameMainContainer } from "../subComponents/game/styles";

// Interfaces
import { GrammaticalStructure, User, Points } from "../../utils/interfaces";
import { WordInGame } from "../subComponents/game/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";
import FinalScreen from "../subComponents/game/FinalScreen";
import GrammarCard from "../subComponents/game/GrammarCard";

// Utils
import set from "lodash/set";
import get from "lodash/get";

// Icons
import { IoSadOutline } from "react-icons/io5";

export default function Game() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [owners, setOwners] = useState<User[]>([]);
	const [words, setWords] = useState<WordInGame[]>([]);
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);

	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	const playerIds = [1, 2];
	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;
	const actualGrammaticalStructure = grammaticalStructures[actualIndex];

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
	}

	/* LOADING */
	if (loading === true) {
		return <div>LOADING</div>;
	}

	/* ERROR */
	if (error !== null) {
		return (
			<ErrorContainer>
				<IoSadOutline size={44} />
				<BoldLargeMessage>Sorry, you can't play!</BoldLargeMessage>
				{error}
			</ErrorContainer>
		);
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
