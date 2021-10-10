import { useEffect, useState } from "react";

// Styles
import styled from "styled-components";

// Interfaces
import { Owner, Word } from "../../utils/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";
import EvaluationForm from "../subComponents/game/EvaluationForm";

// Test data
import { testOwners, testWords } from "../../utils/testData";

const Body = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	min-width: 0;
	min-height: 0;
`;

export default function Game() {
	const [owners, setOwners] = useState<Owner[]>([]);
	const [words, setWords] = useState<Word[]>([]);
	const [actualIndex, setActualIndex] = useState<number>(0);

	const actualWord = words[actualIndex];

	useEffect(() => {
		load();
	}, []);

	function load() {
		// TODO load data from backend
		setOwners(testOwners);
		setWords(testWords);
	}

	return (
		<Body>
			<PlayingCard owner={owners?.find((o: Owner) => o.id === actualWord?.ownerId)} word={actualWord} />
			<EvaluationForm actualWord={actualWord} getNextCard={() => setActualIndex(actualIndex + 1)} />
		</Body>
	);
}
