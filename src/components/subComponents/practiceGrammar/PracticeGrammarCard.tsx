// Interfaces
import { GrammaticalStructure, Usage } from "src/utils/interfaces";

// Styles
import { Card, CardBody, CardTitle, CardBodyScrollContainer, Block } from "src/components/generalComponents/styles";
import { GameBody, SubTitle, FormingSentence, UsageDescription, UsageSentence, ButtonContainer } from "../game/styles";

// Components
import Button from "src/components/generalComponents/Button";

interface PracticeGrammarCardProps {
	actualStructure: GrammaticalStructure;
	showNextCard: () => void;
}

export default function PracticeGrammarCard({ actualStructure, showNextCard }: PracticeGrammarCardProps) {
	return (
		<GameBody>
			<Card style={{ border: "none", width: "100%" }}>
				<CardBody style={{ paddingBottom: 0 }}>
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
						<Button title="Show next structure" onClick={showNextCard} color="green" />
					</ButtonContainer>
				</CardBody>
			</Card>
		</GameBody>
	);
}
