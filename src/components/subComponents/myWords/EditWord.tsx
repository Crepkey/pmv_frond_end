import { useState, useContext } from "react";

/* Context */
import { AppContext } from "../../../AppContext";

/* Styles */
import styled from "styled-components";
import { colors } from "../../../utils/colors";

// Icons
import { BsSuitHeart, BsSuitHeartFill, BsPlus, BsX, BsTrash } from "react-icons/bs";

// Interfaces
import { WordOperationType } from "../../../utils/interfaces";
import { Word, WordType } from "sharedInterfaces";

// Utils
import set from "lodash/set";
import get from "lodash/get";
import { emptyWord } from "../../../utils/utils";

const Card = styled.div`
	border: 1px solid ${colors.border};
	border-radius: 8px;
	width: 40vw;
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

const DeleteIcon = styled(Icon)`
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

const Label = styled.div<{ error?: boolean }>`
	color: ${({ error }: any) => (error ? colors.error : colors.labelFont)};
	font-weight: ${({ error }: any) => (error ? "bold" : "auto")};
	font-size: 0.75rem;
	margin: 0 0 4px 12px;
`;

const StringInput = styled.input<{ error?: boolean }>`
	display: flex;
	flex: 1;
	font-size: 1rem;
	padding: 8px 12px;
	margin-bottom: 24px;
	border: ${({ error }: any) => (error ? `2px solid ${colors.error}` : `1px ${colors.inputBorder} solid`)};
	border-radius: 20px;
	color: grey;
	::placeholder {
		color: ${colors.placeholderFont};
	}
	:focus {
		outline: ${({ error }: any) => (error ? `none` : `1px ${colors.activeBorder} solid`)};
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
	border-radius: 100%;
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
	title: string;
	initialWord?: Word;
	save(word: Word, operation: WordOperationType): void;
}

interface Hungarian {
	meaning: string;
	point: number;
	characterChange?: number;
}

const errorMessages: { [key: number]: string } = {
	1: "English field is required.",
	2: "At least one Hungarian meaning is required (in the first field).",
	3: "At least one example sentence is required (in the first field).",
	4: "At least one definition is required (in the first field).",
};

export default function EditWord({ initialWord, title, save }: EditWordProps) {
	const initialHungarian: Hungarian[] = (initialWord?.hungarian || [""]).map((meaning: string, index: number) => {
		return { meaning, point: get(initialWord, ["statistics", "hungarian", index], 0) };
	});

	const [hungarian, setHungarian] = useState<Hungarian[]>(initialHungarian);
	const [word, setWord] = useState<Word>(initialWord || emptyWord);
	const [errors, setErrors] = useState<number[]>([]);
	const [autoFocus, setAutofocus] = useState<string>("");
	const { setActiveModal } = useContext(AppContext);

	function transfromHungarian() {
		const hungarianStatistics = hungarian.map((hun: Hungarian) => {
			if ((hun.characterChange || 0) > 3) {
				return 0;
			}
			return hun.point;
		});
		return {
			hungarian: hungarian.map((hun: Hungarian) => hun.meaning),
			statistics: { ...get(word, "statistics", {}), hungarian: hungarianStatistics },
		};
	}

	function formValidation() {
		const checkedErrors: number[] = [];

		if (word.english.length === 0) {
			checkedErrors.push(1);
		}

		hungarian.forEach((hun: Hungarian) => {
			if (hun.meaning.length === 0) checkedErrors.push(2);
		});

		word.exampleSentences.forEach((sentence: string) => {
			if (sentence.length === 0) checkedErrors.push(3);
		});

		if (checkedErrors.length > 0) {
			setErrors(checkedErrors);
			return false;
		}

		return true;
	}

	function saveForm() {
		if (!formValidation()) return;
		save({ ...word, ...transfromHungarian() }, "edit");
		setActiveModal("none");
	}

	return (
		<Card>
			<CardHeader>
				{title}
				<Icon
					onClick={() => {
						setActiveModal("none");
					}}>
					<BsX size={20} />
				</Icon>
			</CardHeader>
			<CardBody>
				<ScrollContainer>
					<Form>
						{errors.includes(1) ? <Label error={true}>{errorMessages[1]}</Label> : <Label>English word or expression</Label>}
						<Row>
							<StringInput
								error={errors.includes(1)}
								placeholder="Type your English word or expression here..."
								value={word.english}
								onChange={(e) => {
									setErrors(errors.filter((e: number) => e !== 1));
									setWord({ ...word, english: e.target.value });
								}}
							/>
							<HeartIcon
								onClick={(e) => {
									setWord({ ...word, favourite: !word.favourite });
								}}>
								{word.favourite ? <BsSuitHeartFill size={24} /> : <BsSuitHeart size={24} />}
							</HeartIcon>
						</Row>

						{errors.includes(2) ? <Label error={true}>{errorMessages[2]}</Label> : <Label>Hungarian meanings</Label>}
						<Block>
							{hungarian.map((hun: Hungarian, i: number) => {
								const key = `${i}_hunMean`;
								console.log(autoFocus === key);
								return (
									<Row key={key}>
										<StringInput
											autoFocus={autoFocus === key}
											error={errors.includes(2) && i === 0}
											placeholder="Type one Hungarian meaning here..."
											value={hun.meaning}
											onChange={(e) => {
												setErrors(errors.filter((e: number) => e !== 2));
												const newHungarian = hungarian.map((h: Hungarian, index: number) => {
													if (index === i) {
														return { ...h, meaning: e.target.value, characterChange: (h.characterChange || 0) + 1 };
													}
													return h;
												});
												setHungarian(newHungarian);
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													const newHun = [...hungarian];
													newHun.splice(i + 1, 0, { meaning: "", point: 0 });
													setHungarian(newHun);
													setAutofocus(`${i + 1}_hunMean`);
												}
											}}
										/>
										{i !== 0 && (
											<DeleteIcon>
												<BsTrash
													onClick={(e) => {
														const newHungarian = hungarian.filter((h: Hungarian, index: number) => index !== i);
														setHungarian(newHungarian);
													}}
												/>
											</DeleteIcon>
										)}
									</Row>
								);
							})}
							<AddNewRow>
								<CircleButton
									onClick={() => {
										setHungarian([...hungarian, { meaning: "", point: 0 }]);
									}}>
									<BsPlus />
								</CircleButton>
								Add one more Hungarian meaning
							</AddNewRow>
						</Block>

						{errors.includes(3) ? <Label error={true}>{errorMessages[3]}</Label> : <Label>Example sentences</Label>}
						<Block>
							{word.exampleSentences.map((sentence: string, i: number) => {
								const key = `${i}_sentence`;
								return (
									<Row key={key}>
										<StringInput
											autoFocus={autoFocus === key}
											error={errors.includes(3) && i === 0}
											placeholder="Type one example sentence here..."
											value={sentence}
											onChange={(e) => {
												setErrors(errors.filter((e: number) => e !== 3));
												const newWord = set({ ...word }, ["exampleSentences", i], e.target.value);
												setWord(newWord);
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													setWord({ ...word, exampleSentences: [...word.exampleSentences, ""] });
													setAutofocus(`${i + 1}_sentence`);
												}
											}}
										/>

										{i !== 0 && (
											<DeleteIcon>
												<BsTrash
													onClick={(e) => {
														const newArray = word.exampleSentences.filter((s: string, index: number) => index !== i);
														setWord({ ...word, exampleSentences: newArray });
													}}
												/>
											</DeleteIcon>
										)}
									</Row>
								);
							})}
							<AddNewRow>
								<CircleButton
									onClick={() => {
										setWord({ ...word, exampleSentences: [...word.exampleSentences, ""] });
									}}>
									<BsPlus />
								</CircleButton>
								Add one more example sentence
							</AddNewRow>
						</Block>

						{errors.includes(3) ? <Label error={true}>{errorMessages[4]}</Label> : <Label>Definitions</Label>}
						<Block>
							{word.definitions.map((definition: string, i: number) => {
								const key = `${i}_definition`;
								return (
									<Row key={key}>
										<StringInput
											autoFocus={autoFocus === key}
											error={errors.includes(4) && i === 0}
											placeholder="Type one definition here..."
											value={definition}
											onChange={(e) => {
												setErrors(errors.filter((e: number) => e !== 4));
												const newWord = set({ ...word }, ["definitions", i], e.target.value);
												setWord(newWord);
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter") {
													setWord({ ...word, definitions: [...word.definitions, ""] });
													setAutofocus(`${i + 1}_definition`);
												}
											}}
										/>

										{i !== 0 && (
											<DeleteIcon>
												<BsTrash
													onClick={(e) => {
														const newArray = word.definitions.filter((s: string, index: number) => index !== i);
														setWord({ ...word, definitions: newArray });
													}}
												/>
											</DeleteIcon>
										)}
									</Row>
								);
							})}
							<AddNewRow>
								<CircleButton
									onClick={() => {
										setWord({ ...word, definitions: [...word.definitions, ""] });
									}}>
									<BsPlus />
								</CircleButton>
								Add one more definition
							</AddNewRow>
						</Block>

						<Label>Type</Label>
						<Select
							defaultValue="word"
							onChange={(e) => {
								setWord({ ...word, type: e.target.value as WordType });
							}}>
							<option value="word">Word</option>
							<option value="expression">Expression</option>
						</Select>

						<Label>Notes</Label>
						<Textarea
							placeholder="Type your notes here..."
							onChange={(e) => {
								setWord({ ...word, notes: e.target.value });
							}}
							value={word.notes === null ? "" : word.notes}></Textarea>
					</Form>
				</ScrollContainer>

				<Row>
					<Button onClick={saveForm}>Save</Button>
				</Row>
			</CardBody>
		</Card>
	);
}
