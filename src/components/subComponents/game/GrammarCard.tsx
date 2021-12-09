// Styles
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, Block } from "../../generalComponents/styles";
import { FormingSentence, SentenceCard, SubTitle, UsageDescription, UsageSentence } from "./styles";

// Interfaces
import { GrammaticalStructure, Usage } from "../../../utils/interfaces";

// Utils
import get from "lodash/get";
import random from "lodash/random";

interface GrammarCardProps {
	actualStructure: GrammaticalStructure;
}

export default function GrammarCard({ actualStructure }: GrammarCardProps) {
	const randomUsageIndex = random(get(actualStructure, ["realLifeUsages", "length"]) - 1);
	const usageToShow: Usage = get(actualStructure, ["realLifeUsages", randomUsageIndex]);

	return (
		<Card>
			<CardHeader>Grammatical structure</CardHeader>

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
