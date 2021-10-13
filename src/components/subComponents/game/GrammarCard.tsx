// Styles
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, Block } from "../../generalComponents/styles";
import { FormingSentence, SentenceCard, SubTitle, UsageDescription, UsageSentence } from "./styles";

// Interfaces
import { GrammaticalStructure, Usage } from "../../../utils/interfaces";

// Utils
import get from "lodash/get";

interface GrammarCardProps {
	actualStructure: GrammaticalStructure;
}

export default function GrammarCard({ actualStructure }: GrammarCardProps) {
	return (
		<Card>
			<CardHeader>Grammatical structure</CardHeader>

			<CardBody>
				<CardTitle>
					{actualStructure.title}
					<SubTitle>{actualStructure.subTitle}</SubTitle>
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

					{get(actualStructure, "basicSentences", []).length > 0 && (
						<Block>
							{actualStructure.basicSentences.map((sentence: string, i: number) => (
								<SentenceCard key={i} lastElement={i === actualStructure.basicSentences.length - 1}>
									{sentence}
								</SentenceCard>
							))}
						</Block>
					)}

					{actualStructure.notes && <Block>{actualStructure.notes}</Block>}
				</CardBodyScrollContainer>
			</CardBody>
		</Card>
	);
}
