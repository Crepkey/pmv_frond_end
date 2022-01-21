import { useState, useContext } from "react";

/* Context */
import { AppContext } from "../../../AppContext";

// Icons
import { BsSuitHeart, BsSuitHeartFill, BsX } from "react-icons/bs";

// Interfaces
import { WordOperationType } from "../../../utils/interfaces";
import { Word, WordType } from "sharedInterfaces";

// Utils
import set from "lodash/set";
import get from "lodash/get";
import { emptyWord } from "../../../utils/utils";

// Components
import ArrayInput from "./ArrayInput";

// Styles
import { Card, CardHeader, Icon, CardBody, ScrollContainer, Form, Label, Row, StringInput, HeartIcon, Select, Textarea, Button } from "./styles";

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

		word.definitions.forEach((definition: string) => {
			if (definition.length === 0) checkedErrors.push(4);
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

						<ArrayInput
							hasError={errors.includes(2)}
							label={errors.includes(2) ? errorMessages[2] : "Hungarian meanings"}
							placeholder="Type one Hungarian meaning here..."
							keyString="hunMean"
							array={hungarian}
							onChange={(e: any, i: number) => {
								setErrors(errors.filter((e: number) => e !== 2));
								const newHungarian = hungarian.map((h: Hungarian, index: number) => {
									if (index === i) {
										return { ...h, meaning: e.target.value, characterChange: (h.characterChange || 0) + 1 };
									}
									return h;
								});
								setHungarian(newHungarian);
							}}
							addNewElem={(e: any, i: number) => {
								const newHun = [...hungarian];
								newHun.splice(i + 1, 0, { meaning: "", point: 0 });
								setHungarian(newHun);
							}}
							removeElem={(e: any, i: number) => {
								const newHungarian = hungarian.filter((h: Hungarian, index: number) => index !== i);
								setHungarian(newHungarian);
							}}
						/>

						<ArrayInput
							hasError={errors.includes(3)}
							label={errors.includes(3) ? errorMessages[3] : "Example sentences"}
							placeholder="Type one Example sentence here..."
							keyString="sentence"
							array={word.exampleSentences}
							onChange={(e: any, i: number) => {
								setErrors(errors.filter((e: number) => e !== 3));
								const newWord = set({ ...word }, ["exampleSentences", i], e.target.value);
								setWord(newWord);
							}}
							addNewElem={(e: any, i: number) => {
								const newSentences = [...word.exampleSentences];
								newSentences.splice(i + 1, 0, "");
								const newWord = set({ ...word }, ["exampleSentences"], newSentences);
								setWord(newWord);
							}}
							removeElem={(e: any, i: number) => {
								const newSentences = word.exampleSentences.filter((s: string, index: number) => index !== i);
								setWord({ ...word, exampleSentences: newSentences });
							}}
						/>

						<ArrayInput
							hasError={errors.includes(4)}
							label={errors.includes(4) ? errorMessages[4] : "Definitions"}
							placeholder="Type one definition here..."
							keyString="definition"
							array={word.definitions}
							onChange={(e: any, i: number) => {
								setErrors(errors.filter((e: number) => e !== 4));
								const newWord = set({ ...word }, ["definitions", i], e.target.value);
								setWord(newWord);
							}}
							addNewElem={(e: any, i: number) => {
								const newDefinitions = [...word.definitions];
								newDefinitions.splice(i + 1, 0, "");
								const newWord = set({ ...word }, ["definitions"], newDefinitions);
								setWord(newWord);
							}}
							removeElem={(e: any, i: number) => {
								const newDefinitions = word.definitions.filter((s: string, index: number) => index !== i);
								setWord({ ...word, definitions: newDefinitions });
							}}
						/>

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
