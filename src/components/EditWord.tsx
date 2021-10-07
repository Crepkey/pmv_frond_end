import React, { useState } from "react";

/* Styles */
import styled from "styled-components";
import { colors } from "./colors";
import { BsSuitHeart, BsPlus, BsX } from "react-icons/bs";

import { Word } from "../utils/interfaces";
import set from "lodash/set";

const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	margin: 16px;
	width: 30vw;
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
	min-height: 3rem;
	justify-content: space-between;
	padding: 0 16px;
`;

const Icon = styled.div`
	display: flex;
	align-items: center;
	padding-left: 16px;
	:hover {
		cursor: pointer;
	}
`;

const HeartIcon = styled(Icon)`
	margin-bottom: 24px;
`;

const CardBody = styled.div`
	padding-bottom: 24px;
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 0;
	min-height: 0;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
`;

const ScrollContainer = styled.div`
	min-width: 0;
	min-height: 0;
	overflow: scroll;
	flex: 1;
	margin-bottom: 24px;
	padding: 24px 24px 0 24px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Block = styled.div`
	background: ${colors.blockBackground};
	border-radius: 24px;
	padding: 24px;
	margin-bottom: 24px;
	font-weight: 300;
	display: flex;
	flex-direction: column;
`;

const Label = styled.div`
	color: ${colors.inactiveFont};
	font-size: 0.75rem;
	margin: 0 0 4px 12px;
`;

const String = styled.input`
	display: flex;
	flex: 1;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: 1px ${colors.inputBorder} solid;
	border-radius: 20px;
	color: grey;
	::placeholder {
		color: ${colors.placeholderFont};
	}
	:focus {
		outline: 1px ${colors.activeBorder} solid;
	}
`;

const AddNewRow = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 0.9rem;
`;

const CircleButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4px;
	border-radius: 12px;
	margin-right: 8px;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	text-decoration: none;
	background-color: ${colors.buttonBackground};
	border: none;
	:hover {
		background: linear-gradient(to bottom, ${colors.buttonGradientLight} 5%, ${colors.buttonGradientDark} 100%);
		background-color: ${colors.buttonGradientLight};
	}
	:active {
		position: relative;
		top: 1px;
	}
`;

const Select = styled.select`
	display: flex;
	flex: 1;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: 1px ${colors.inputBorder} solid;
	border-radius: 20px;
	color: grey;
	:focus {
		outline: 1px ${colors.activeBorder} solid;
	}
`;

const Textarea = styled.textarea`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: 1px ${colors.inputBorder} solid;
	border-radius: 20px;
	color: grey;
	resize: none;
	min-height: 5rem;
	::placeholder {
		color: ${colors.placeholderFont};
	}
	:focus {
		outline: 1px ${colors.activeBorder} solid;
	}
`;

const Button = styled.div`
	display: inline-block;
	width: fit-content;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 15px;
	border: none;
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

interface EditWordProps {
	initialWord: Word;
	title: string;
}

export default function EditWord({ initialWord, title }: EditWordProps) {
	const [word, setWord] = useState<Word>(initialWord);
	console.log(word);

	return (
		<Card>
			<CardHeader>
				{title}
				<Icon>
					<BsX size={20} />
				</Icon>
			</CardHeader>
			<CardBody>
				<ScrollContainer>
					<Form>
						<Label>English word or expression</Label>
						<Row>
							<String
								placeholder="Type your English word or expression here..."
								onChange={(e) => {
									setWord({ ...word, english: e.target.value });
								}}
							/>
							<HeartIcon>
								<BsSuitHeart size={24} />
							</HeartIcon>
						</Row>

						<Label>Hungarian meanings</Label>
						<Block>
							{word.hungarian.map((meaning: string, i: number) => (
								<String
									key={i}
									placeholder="Type one Hungarian meaning here..."
									value={meaning}
									onChange={(e) => {
										const newWord = set({ ...word }, ["hungarian", i], e.target.value);
										setWord(newWord);
									}}
								/>
							))}
							<AddNewRow>
								<CircleButton
									onClick={() => {
										setWord({ ...word, hungarian: [...word.hungarian, ""] });
									}}>
									<BsPlus />
								</CircleButton>
								Add one more Hungarian meaning
							</AddNewRow>
						</Block>

						<Label>Example sentences</Label>
						<Block>
							<String placeholder="Type one example sentence here..." />
							<AddNewRow>
								<CircleButton>
									<BsPlus />
								</CircleButton>
								Add one more example sentence
							</AddNewRow>
						</Block>

						<Label>Type</Label>
						<Select>
							<option>Word</option>
							<option>Expression</option>
						</Select>

						<Label>Notes</Label>
						<Textarea placeholder="Type your notes here..."></Textarea>
					</Form>
				</ScrollContainer>

				<Row>
					<Button>Save</Button>
				</Row>
			</CardBody>
		</Card>
	);
}
