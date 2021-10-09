import { useEffect, useState } from "react";

// Styles
import styled from "styled-components";

// Interfaces
import { Owner, Word } from "../../utils/interfaces";

// Components
import PlayingCard from "../subComponents/game/PlayingCard";

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
	const [nextWord, setnextWord] = useState<Word>(words[0]);

	useEffect(() => {
		load();
	}, []);

	function load() {
		// TODO load data from backend
		setOwners(testOwners);
		setWords(testWords);
		setnextWord(testWords[0]);
	}

	return (
		<Body>
			<PlayingCard owner={owners?.find((o: Owner) => o.id === nextWord?.ownerId)} word={nextWord} />
		</Body>
	);
}
