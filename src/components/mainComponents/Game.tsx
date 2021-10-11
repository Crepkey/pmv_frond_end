import { Fragment, useEffect, useState } from "react";

// Styles
import styled from "styled-components";

// Interfaces
import { Owner, Points, Word } from "../../utils/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";
import FinalPoints from "../subComponents/game/FinalPoints";

// Test data
import { testOwners, testWords } from "../../utils/testData";

// Utils
import set from "lodash/set";
import get from "lodash/get";
import { colors } from "../../utils/colors";

const Body = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	min-width: 0;
	min-height: 0;
`;

const FinalScreen = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 24px;
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
	margin-top: 28px;
	text-decoration: none;
	border-radius: 16px;
	border: none;
	width: fit-content;
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

export default function Game() {
	const [owners, setOwners] = useState<Owner[]>([]);
	const [words, setWords] = useState<Word[]>([]);
	const [actualIndex, setActualIndex] = useState<number>(0);
	const [points, setPoints] = useState<Points>({});

	const actualWord = words[actualIndex];
	const actualOwnerId = actualWord?.ownerId;

	useEffect(() => {
		load();
	}, []);

	function load() {
		// TODO load data from backend
		setOwners(testOwners);
		setWords(testWords);

		const initialPoints = {};
		testOwners.forEach((o: Owner) => set(initialPoints, [o.id], 0));
		setPoints(initialPoints);
	}

	return (
		<Body>
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
				<FinalScreen>
					<FinalPoints owners={owners} points={points} />
					<Button
						onClick={() => {
							setActualIndex(0);
							load();
						}}>
						Play again
					</Button>
				</FinalScreen>
			)}
		</Body>
	);
}
