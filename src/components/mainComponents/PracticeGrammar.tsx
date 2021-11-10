// React
import { useEffect, useState } from "react";

// Interfaces
import { GrammaticalStructure, Usage } from "../../utils/interfaces";

// Utils
import get from "lodash/get";
import random from "lodash/random";

// Styles
import { Block, Card, CardBody, CardBodyScrollContainer, CardTitle, GreenButton } from "../generalComponents/styles";
import { SubTitle, FormingSentence, UsageDescription, UsageSentence, GameMainContainer, ButtonContainer } from "../subComponents/game/styles";

export default function PracticeGrammar() {
	const [grammaticalStructures, setGrammaticalStructures] = useState<GrammaticalStructure[]>([]);
	const [actualIndex, setActualIndex] = useState<number>(0);

	const actualStructure = grammaticalStructures[actualIndex];
	const randomUsageIndex = random(get(actualStructure, ["realLifeUsages", "length"]) - 1);
	const usageToShow: Usage = get(actualStructure, ["realLifeUsages", randomUsageIndex]);

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
			<ButtonContainer>
				<GreenButton
					onClick={() => {
						setActualIndex(0);
						initialize();
					}}>
					Play again
				</GreenButton>
			</ButtonContainer>
		);
	}

	if (actualStructure === undefined) {
		return null;
	}

	return (
		<GameMainContainer>
			<Card>
				<CardBody>
					<CardTitle>
						{actualStructure.title}
						<SubTitle>{actualStructure.subtitle}</SubTitle>
					</CardTitle>

					<CardBodyScrollContainer>
						<FormingSentence>{actualStructure.forming}</FormingSentence>

						<Block>
							<UsageDescription firstElement={true}>{usageToShow.description}</UsageDescription>
							<UsageSentence>{usageToShow.example}</UsageSentence>
						</Block>

						{actualStructure.notes && <Block>Note: {actualStructure.notes}</Block>}
					</CardBodyScrollContainer>

					<ButtonContainer>
						<GreenButton onClick={() => setActualIndex(actualIndex + 1)}>Show next structure</GreenButton>
					</ButtonContainer>
				</CardBody>
			</Card>
		</GameMainContainer>
	);
}
