// Styles
import { colors } from "../../../utils/colors";
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, Block } from "../../generalComponents/styles";
import { HeaderIcon, SpinnerBarContainer, TagContainer, Tag, SentenceCard, VolumeIcon } from "./styles";

// Icons
import { MdVolumeUp } from "react-icons/md";
import { GiSwordwoman, GiSwordman } from "react-icons/gi";

// Interfaces
import { Owner, Word } from "../../../utils/interfaces";
import { TagColor } from "./interfaces";

// Helper functions
import { getColorsByKnowledge } from "./calculateByKnowledgeLevels";

// Components
import SpinnerBar from "../../generalComponents/SpinnerBar";

interface PlayingCardProps {
	owner: Owner | undefined;
	word: Word;
}

export default function PlayingCard({ owner, word }: PlayingCardProps) {
	const tagColors: TagColor[] = getColorsByKnowledge(word);

	return (
		<Card>
			<CardHeader>
				<HeaderIcon>{owner?.sex === "male" ? <GiSwordman size={28} /> : <GiSwordwoman size={28} />}</HeaderIcon>
				This word belongs to {owner?.name}
				<SpinnerBarContainer>
					<SpinnerBar size={28} status={word.memoryLevel} style={{ background: colors.headerGradientDark }} />
				</SpinnerBarContainer>
			</CardHeader>

			<CardBody>
				<CardTitle>
					{word.english}
					<VolumeIcon>
						<MdVolumeUp />
					</VolumeIcon>
				</CardTitle>

				<CardBodyScrollContainer>
					<TagContainer>
						{word.hungarian.map((meaning: string, i: number) => {
							const tagColor = tagColors.find((tc: TagColor) => {
								return tc.language === "hungarian" && tc.index === i;
							});
							return (
								<Tag key={i} background={tagColor?.color}>
									{meaning}
								</Tag>
							);
						})}
					</TagContainer>
					<Block>
						{word.sentences.map((sentence: string, i: number) => (
							<SentenceCard key={i} lastElement={i === word.sentences.length - 1}>
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
