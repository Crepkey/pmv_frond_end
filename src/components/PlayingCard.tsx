import React from "react";

/* Styles */
import styled from "styled-components";
import { colors } from "./colors";
import { MdVolumeUp } from "react-icons/md";
import { GiSwordwoman } from "react-icons/gi";

const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	margin: 16px;
	width: 32%;
	min-width: 20rem;
	min-height: 0;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const CardHeader = styled.div`
	display: flex;
	align-items: center;
	font-weight: 450;
	background-image: linear-gradient(to top, ${colors.headerGradientDarker}, ${colors.headerGradientDark}, ${colors.headerGradientLight});
	border-bottom: 1px solid ${colors.border};
	padding: 0 16px 0 16px;
	min-height: 3rem;
`;

const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 24px;
`;

const Title = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2rem;
	margin-bottom: 24px;
	font-weight: 550;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	color: gray;
	padding-left: 16px;
`;

const ScrollContainer = styled.div`
	min-width: 0;
	min-height: 0;
	overflow: scroll;
	flex: 1;
	margin-bottom: 24px;
`;

const TagContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 8px;
`;

const Tag = styled.div`
	background: ${colors.tagBackground};
	margin: 0 16px 16px 0;
	padding: 4px 16px;
	border-radius: 30px;
	font-size: 1.25rem;
	font-weight: 400;
	border-bottom: 1px ${colors.border} solid;
`;

const Block = styled.div`
	background: ${colors.blockBackground};
	border-radius: 24px;
	padding: 24px;
	margin-bottom: 24px;
	font-weight: 300;
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

/* TODO: We should a great solution for the margin problem above. The last element margin-bottom should be removed somehow*/

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 16px;
	border: none;
	width: 30%;
	background-color: ${colors.acceptButtonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.acceptButtonGradientLight} 5%, ${colors.acceptButtonGradientDark} 100%);
		background-color: ${colors.acceptButtonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

const RejectButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 16px;
	border: none;
	width: 30%;
	background-color: ${colors.rejectButtonBackground};
	:hover {
		background: linear-gradient(to bottom, ${colors.rejectButtonGradientLight} 5%, ${colors.rejectButtonGradientDark} 100%);
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

export default function WordCard() {
	return (
		<Card>
			<CardHeader>
				<GiSwordwoman size={28} style={{ border: "2px gray solid", borderRadius: 100, background: "white", marginRight: "16px" }} />
				This word belongs to Petra
			</CardHeader>

			<CardBody>
				<Title>
					Petra's English word{" "}
					<Icon>
						<MdVolumeUp />
					</Icon>
				</Title>

				<ScrollContainer>
					<TagContainer>
						<Tag>első jelentés</Tag>
						<Tag>második jelentés</Tag>
						<Tag>harmadik jelentés</Tag>
					</TagContainer>
					<Block>
						<SentenceCard>Example sentence with very very very very very very very very very long text</SentenceCard>
						<SentenceCard>Example sentence 2</SentenceCard>
						<SentenceCard>Example sentence 3</SentenceCard>
					</Block>
					<Block>
						Notes notes notes ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
						sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Block>
				</ScrollContainer>

				<ButtonContainer>
					<Button>CORRECT</Button>
					<RejectButton>NOT CORRECT</RejectButton>
				</ButtonContainer>
			</CardBody>
		</Card>
	);
}
