import { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

/* Interfaces */
import { Word } from "../../utils/interfaces";

/* Icons */
import { BsFilter, BsChevronLeft, BsChevronRight, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

/* Styles */
import { colors } from "../../utils/colors";
import styled from "styled-components";
import SpinnerBar from "../generalComponents/SpinnerBar";

/* Components */
import ActiveWordRow from "../subComponents/myWords/activeWordRow";

const MainContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
`;

const ControlBarContainer = styled.div`
	display: flex;
	padding: 24px 24px 12px 24px;
`;

const AddNewWordButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-size: 1rem;
	font-weight: bold;
	padding: 6px 24px;
	text-decoration: none;
	border-radius: 16px;
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

const SearchContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`;

const SearchBar = styled.input`
	width: 32%;
	padding: 0 16px 0 16px;
	border: 1px ${colors.border} solid;
	border-radius: 16px;
`;

const FilterButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-family: Arial;
	font-size: 15px;
	font-weight: 550;
	text-decoration: none;
	padding: 2px 12px 0 12px;
	margin-left: 16px;
	background-color: ${colors.buttonBackground};
	border-radius: 16px;
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

const TableContainer = styled.div`
	display: flex;
	flex: 1;
	min-width: 0;
	min-height: 0;
	padding: 12px 24px 12px 24px;
`;

const TableBlock = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	min-width: 0;
	min-height: 0;
	padding: 32px;
	background: ${colors.blockBackground};
	border-radius: 24px;
`;

const TabContainer = styled.div`
	display: flex;
	flex: 1;
`;

const Tab = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	font-weight: 550;
	border: 1px solid ${colors.border};
	border-radius: 8px 8px 0 0;
	background: ${colors.background};
	:hover {
		color: ${colors.activeFont};
		border-bottom: 3px ${colors.activeBorder} solid;
	}
`;

const WordContainer = styled.div`
	display: flex;
	flex: 10;
	flex-direction: column;
	overflow: scroll;
	min-width: 0;
	min-height: 0;
	border-left: 1px solid ${colors.border};
	border-right: 1px solid ${colors.border};
	border-bottom: 1px solid ${colors.border};
	border-radius: 0 0 16px 16px;
	background: ${colors.background};
`;

const PaginationContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 12px 24px 24px 24px;
`;

const PaginationButton = styled.button`
	display: inline-block;
	cursor: pointer;
	color: ${colors.buttonFont};
	font-family: Arial;
	font-size: 15px;
	font-weight: 550;
	text-decoration: none;
	padding: 2px 12px 0 12px;
	margin: 0 8px 0 8px;
	background-color: ${colors.buttonBackground};
	border-radius: 16px;
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

const PageNumber = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.25rem;
	padding: 0 8px 0 8px;
`;

interface ExtendedWord extends Word {
	id: number;
	active: boolean;
	deletionDate?: Date;
}

const dummyData: ExtendedWord[] = [
	{
		id: 1,
		english: "English",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 0,
		active: true,
	},
	{
		id: 2,
		english: "English2",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: false,
		memoryLevel: 18,
		active: false,
		deletionDate: new Date(2021, 10, 1),
	},
	{
		id: 3,
		english: "English3",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: false,
		memoryLevel: 38,
		active: true,
	},
	{
		id: 4,
		english: "English4",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 67,
		active: true,
	},
	{
		id: 5,
		english: "English5",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 98,
		active: true,
	},
	{
		id: 6,
		english: "English6",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 98,
		active: false,
		deletionDate: new Date(2021, 8, 13),
	},
	{
		id: 7,
		english: "English7",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 98,
		active: false,
		deletionDate: new Date(2020, 6, 26),
	},
];

export default function MyWords() {
	const [activeWords, setActiveWords] = useState<ExtendedWord[]>([]);
	const [deletedWords, setDeletedWords] = useState<ExtendedWord[]>([]);
	const [displayedWords, setDisplayedWords] = useState<"active" | "deleted">("active");

	useEffect(() => {
		load();
	}, []);

	function load() {
		/* TODO: It's a question where we should separate the deleted and active words? back-end? front-end? */
		const activeWords: ExtendedWord[] = [];
		const deletedWords: ExtendedWord[] = [];

		dummyData.forEach((word: ExtendedWord) => {
			if (word.active === true) {
				activeWords.push(word);
			} else deletedWords.push(word);
		});

		setActiveWords(activeWords);
		setDeletedWords(deletedWords);
	}

	function calculateRowBackground(index: number) {
		if (index % 2 === 0) return colors.rowBackgroundLight;
		return colors.rowBackgroundDark;
	}

	function convertMemoryLevelToText(memoryLevel: number) {
		if (memoryLevel === 0) return "Unused word";
		if (memoryLevel >= 1 && memoryLevel <= 25) return "New word";
		if (memoryLevel >= 26 && memoryLevel <= 50) return "Short term memory";
		if (memoryLevel >= 51 && memoryLevel <= 75) return "Medium term memory";
		if (memoryLevel >= 76 && memoryLevel <= 100) return "Long term memory";
	}

	return (
		<MainContainer>
			<ControlBarContainer>
				<AddNewWordButton>Add new word</AddNewWordButton>
				<SearchContainer>
					<SearchBar type="search" id="lname" name="lname" placeholder="Type here for searching" />
					<FilterButton>
						<BsFilter size={24} />
					</FilterButton>
				</SearchContainer>
			</ControlBarContainer>
			<TableContainer>
				<TableBlock>
					<TabContainer>
						<Tab
							onClick={() => {
								setDisplayedWords("active");
							}}>
							Active Words
						</Tab>
						<Tab
							onClick={() => {
								setDisplayedWords("deleted");
							}}
							style={{ backgroundColor: `${colors.inactiveBackground}`, color: `${colors.inactiveFont}` }}>
							Deleted Words
						</Tab>
					</TabContainer>

					<WordContainer>
						<ActiveWordRow words={activeWords} />
					</WordContainer>
				</TableBlock>
			</TableContainer>
			<PaginationContainer>
				<PaginationButton>
					<BsChevronDoubleLeft />
				</PaginationButton>
				<PaginationButton>
					<BsChevronLeft />
				</PaginationButton>
				<PageNumber>2</PageNumber>
				<PaginationButton>
					<BsChevronRight />
				</PaginationButton>
				<PaginationButton>
					<BsChevronDoubleRight />
				</PaginationButton>
			</PaginationContainer>
		</MainContainer>
	);
}

/* TODO: Responsive layout */
