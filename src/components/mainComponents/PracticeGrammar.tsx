// React
import { useState } from "react";

// Interfaces
import { GrammaticalStructure } from "../../utils/interfaces";

// Utils
import get from "lodash/get";

// Components
import PracticeGrammarCard from "../subComponents/practiceGrammar/PracticeGrammarCard";
import FinalScreen from "../subComponents/practiceGrammar/fullScreenComponents/FinalScreen";
import StartScreen from "../subComponents/practiceGrammar/fullScreenComponents/StartScreen";

export default function PracticeGrammar() {
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);
	const [actualIndex, setActualIndex] = useState<number>(0);

	const actualStructure = grammaticalStructures[actualIndex];

	async function initialize(practiceType: string) {
		const response = await fetch("/practice/grammatical-structures");
		const parsedResponse = await response.json();

		setGrammaticalStructures(get(parsedResponse, "grammaticalStructures", []));
	}

	if (grammaticalStructures.length === 0) {
		return <StartScreen initialize={initialize} />;
	}

	if (actualIndex >= grammaticalStructures.length) {
		return (
			<FinalScreen
				restartGame={() => {
					setActualIndex(0);
					setGrammaticalStructures([]);
				}}
			/>
		);
	}

	if (actualStructure === undefined) {
		return null;
	}

	return <PracticeGrammarCard actualStructure={actualStructure} showNextCard={() => setActualIndex(actualIndex + 1)} />;
}
