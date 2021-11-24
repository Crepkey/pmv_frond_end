// React
import { useEffect, useState } from "react";

// Interfaces
import { GrammaticalStructure } from "../../utils/interfaces";

// Utils
import get from "lodash/get";

// Components
import PracticeGrammarCard from "../subComponents/practiceGrammar/PracticeGrammarCard";
import FinalScreen from "../subComponents/practiceGrammar/fullScreenComponents/FinalScreen";

export default function PracticeGrammar() {
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);
	const [actualIndex, setActualIndex] = useState<number>(0);

	const actualStructure = grammaticalStructures[actualIndex];

	useEffect(
		() => {
			initialize();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
	);

	async function initialize() {
		const response = await fetch("/practice/grammatical-structures");
		const parsedResponse = await response.json();

		setGrammaticalStructures(get(parsedResponse, "grammaticalStructures", []));
	}

	if (actualIndex >= grammaticalStructures.length) {
		return (
			<FinalScreen
				restartGame={() => {
					setActualIndex(0);
					initialize();
				}}
			/>
		);
	}

	if (actualStructure === undefined) {
		return null;
	}

	return <PracticeGrammarCard actualStructure={actualStructure} showNextCard={() => setActualIndex(actualIndex + 1)} />;
}
