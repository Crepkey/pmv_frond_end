// React
import { Fragment, useEffect, useState } from "react";

// Styles
import { GreenButton } from "../generalComponents/styles";
import { GameMainContainer, FinalScreenContainer } from "../subComponents/game/styles";

// Interfaces
import { GrammaticalStructure, User, Points, WordWithScores } from "../../utils/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";
import FinalPoints from "../subComponents/game/FinalPoints";
import GrammarCard from "../subComponents/game/GrammarCard";

// Test data
import { testOwners } from "../../utils/testData";

// Utils
import set from "lodash/set";
import get from "lodash/get";

export default function Game() {
	const playerIds = [1, 2];
	const [owners, setOwners] = useState<User[]>([]);
	const [words, setWords] = useState<WordWithScores[]>([]);
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);

	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;

	useEffect(() => {
		initialize();
	}, []);

	async function initialize() {
		const response = await fetch(`/lets-play?players=${playerIds[0]}&players=${playerIds[1]}`);
		const data = await response.json();

		console.log(data);

		setOwners(testOwners);
		setGrammaticalStructures(get(data, "grammaticalStructures", []));
		setWords(get(data, "words", []));

		const initialPoints = {};
		testOwners.forEach((o: User) => set(initialPoints, [o.id], 0));
		setPoints(initialPoints);
	}

	return (
		<GameMainContainer>
			{actualWord !== undefined && (
				<Fragment>
					<GrammarCard actualStructure={grammaticalStructures[actualIndex]} />
					<PlayingCard owner={owners?.find((o: User) => o.id === actualOwnerId)} word={actualWord} />
					<EvaluationForm
						actualWord={actualWord}
						getNextCard={() => setActualIndex(actualIndex + 1)}
						userPoints={get(points, actualOwnerId, 0)}
						setUserPoints={(newPoints: number) => setPoints({ ...points, [actualOwnerId]: newPoints })}
					/>
				</Fragment>
			)}

			{actualIndex >= words.length && (
				<FinalScreenContainer>
					<FinalPoints owners={owners} points={points} />
					<GreenButton
						onClick={() => {
							setActualIndex(0);
							initialize();
						}}>
						Play again
					</GreenButton>
				</FinalScreenContainer>
			)}
		</GameMainContainer>
	);
}
