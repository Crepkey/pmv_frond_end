// Interfaces
import { GrammaticalStructure, Usage } from "src/utils/interfaces";

// Styles
import { Card, CardBody, CardTitle, CardBodyScrollContainer, Block, ColoredButton } from "src/components/generalComponents/styles";
import { GameBody, SubTitle, FormingSentence, UsageDescription, UsageSentence, ButtonContainer } from "../game/styles";

interface PracticeGrammarCardProps {
	actualStructure: GrammaticalStructure;
	showNextCard: () => void;
}

export default function PracticeGrammarCard({ actualStructure, showNextCard }: PracticeGrammarCardProps) {
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

					<ButtonContainer>{/* <GreenButton onClick={showNextCard}>Show next structure</GreenButton> */}</ButtonContainer>
				</CardBody>
			</Card>
		</GameBody>
	);
}
