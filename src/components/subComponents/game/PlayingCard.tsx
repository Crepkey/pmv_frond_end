/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { Card, CardHeader, CardBody, CardTitle, CardBodyScrollContainer, Block } from "../../generalComponents/styles";

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

const HeaderIcon = styled.div`
	border: 2px gray solid;
	width: 30px;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	margin-right: 16px;
`;

const SpinnerBarContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	color: gray;
	padding-left: 16px;
`;

const TagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
`;

const Tag = styled.div<{ background?: string }>`
	background: ${({ background }: any) => (background ? background : colors.tagBackground)};
	margin: 0 16px 16px 0;
	padding: 4px 16px;
	border-radius: 30px;
	font-size: 1.25rem;
	font-weight: 400;
	border-bottom: 1px ${colors.border} solid;
	color: ${({ background }: any) => (background ? colors.buttonFont : colors.inactiveFont)};
`;

const SentenceCard = styled.div`
	background: ${colors.background};
	margin-bottom: 8px;
	font-size: 1.15rem;
	padding: 8px;
	border-radius: 8px;
	font-weight: 300;
	border-bottom: 1px ${colors.border} solid;
`;
/* TODO: We should find a great solution for the margin problem above. The last element margin-bottom should be removed somehow*/

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
					<Icon>
						<MdVolumeUp />
					</Icon>
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
							<SentenceCard key={i}>{sentence}</SentenceCard>
						))}
					</Block>
					{word.notes && <Block>{word.notes}</Block>}
				</CardBodyScrollContainer>
			</CardBody>
		</Card>
	);
}
