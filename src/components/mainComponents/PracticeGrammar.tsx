// React
import { useEffect, useState } from "react";

// Interfaces
import { GrammaticalStructure, Usage } from "../../utils/interfaces";

// Utils
import get from "lodash/get";

// Styles
import { Block, Card, CardBody, CardBodyScrollContainer, CardTitle, GreenButton } from "../generalComponents/styles";
import { SubTitle, FormingSentence, UsageDescription, UsageSentence, GameBody, ButtonContainer } from "../subComponents/game/styles";

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
		<GameBody>
			<Card>
				<CardBody>
					<CardTitle>
						{actualStructure.title}
						<SubTitle>{actualStructure.subtitle}</SubTitle>
					</CardTitle>

					<CardBodyScrollContainer>
						<FormingSentence>{actualStructure.forming}</FormingSentence>

						<Block>
							{actualStructure.realLifeUsages.map((usage: Usage, i: number) => (
								<div key={i}>
									<UsageDescription firstElement={i === 0}>
										{i + 1}) {usage.description}
									</UsageDescription>
									<UsageSentence>{usage.example}</UsageSentence>
								</div>
							))}
						</Block>

						{actualStructure.notes && <Block>Note: {actualStructure.notes}</Block>}
					</CardBodyScrollContainer>

					<ButtonContainer>
						<GreenButton onClick={() => setActualIndex(actualIndex + 1)}>Show next structure</GreenButton>
					</ButtonContainer>
				</CardBody>
			</Card>
		</GameBody>
	);
}
