// React
import { useEffect, useState } from "react";

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

	function showNextCard() {
		if (actualIndex < grammaticalStructures.length) {
			setActualIndex(actualIndex + 1);
		} else {
			setGrammaticalStructures([]);
			setActualIndex(0);
		}
	}

	useEffect(() => {
		function handleEnter(e: any) {
			if (e.key === "Enter") {
				showNextCard();
			}
		}
		window.addEventListener("keydown", handleEnter);
		return () => {
			window.removeEventListener("keydown", handleEnter);
		};
	});

	const actualStructure = grammaticalStructures[actualIndex];

	async function initialize(practiceType: string) {
		const response = await fetch(`/practice/grammatical-structures?type=${practiceType}`);
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

	return <PracticeGrammarCard actualStructure={actualStructure} showNextCard={showNextCard} />;
}
