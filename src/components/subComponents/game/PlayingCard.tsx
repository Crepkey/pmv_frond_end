// Styles
import { colors } from "../../../utils/colors";
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, Block } from "../../generalComponents/styles";
import { HeaderIcon, SpinnerBarContainer, TagContainer, Tag, SentenceCard, TitleIcon, TitleContainer } from "./styles";

// Icons
import { MdVolumeUp } from "react-icons/md";
import { GiSwordwoman, GiSwordman } from "react-icons/gi";

// Interfaces
import { User } from "../../../utils/interfaces";
import { TagColor, WordInGame } from "sharedInterfaces";

// Components
import SpinnerBar from "../../generalComponents/SpinnerBar";

// Utils
import get from "lodash/get";

interface PlayingCardProps {
	owner: User | undefined;
	word: WordInGame;
}

export default function PlayingCard({ owner, word }: PlayingCardProps) {
	const { tagColors } = word;

	return (
		<Card>
			<CardHeader>
				<HeaderIcon>{owner?.gender === "male" ? <GiSwordman size={28} /> : <GiSwordwoman size={28} />}</HeaderIcon>
				{owner?.name}'s word
				<SpinnerBarContainer>
					<SpinnerBar size={28} status={word.memoryLevel} style={{ background: colors.headerGradientDark }} />
				</SpinnerBarContainer>
			</CardHeader>

			<CardBody>
				<TitleContainer>
					<CardTitle>{word.english}</CardTitle>
					<TitleIcon>
						<MdVolumeUp size={32} />
					</TitleIcon>
				</TitleContainer>

				<CardBodyScrollContainer>
					<TagContainer>
						{word.hungarian.map((meaning: string, i: number) => {
							const tagColor = tagColors.find((tc: TagColor) => {
								return tc.language === "hungarian" && tc.index === i;
							});
							return (
								<Tag key={i} background={get(colors, tagColor?.color || "progressBlue")}>
									{meaning}
								</Tag>
							);
						})}
					</TagContainer>
					<Block>
						{word.exampleSentences.map((sentence: string, i: number) => (
							<SentenceCard key={i} lastElement={i === word.exampleSentences.length - 1}>
								{sentence}
							</SentenceCard>
						))}
					</Block>
					{word.notes && <Block>{word.notes}</Block>}
				</CardBodyScrollContainer>
			</CardBody>
		</Card>
	);
}
