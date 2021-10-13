// React
import { Fragment, useEffect, useState } from "react";

// Styles
import { GreenButton } from "../generalComponents/styles";
import { GameMainContainer, FinalScreenContainer } from "../subComponents/game/styles";

// Interfaces
import { Owner, Points, WordWithScores } from "../../utils/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";
import FinalPoints from "../subComponents/game/FinalPoints";

// Test data
import { testOwners, testWords } from "../../utils/testData";

// Utils
import set from "lodash/set";
import get from "lodash/get";

export default function Game() {
	const [owners, setOwners] = useState<Owner[]>([]);
	const [words, setWords] = useState<WordWithScores[]>([]);
	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;

	useEffect(() => {
		initialize();
	}, []);

	function initialize() {
		// TODO load data from backend
		setOwners(testOwners);
		setWords(testWords);

		const initialPoints = {};
		testOwners.forEach((o: Owner) => set(initialPoints, [o.id], 0));
		setPoints(initialPoints);
	}

	return (
		<GameMainContainer>
			{actualWord !== undefined && (
				<Fragment>
					<PlayingCard owner={owners?.find((o: Owner) => o.id === actualOwnerId)} word={actualWord} />
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
