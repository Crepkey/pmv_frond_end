import { useState, useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";

/* Context */
import { AppContext } from "../../AppContext";

/* Interfaces */
import { Word } from "../../utils/interfaces";

/* Icons */
import { BsFilter, BsChevronLeft, BsChevronRight, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

/* Styles */
import { colors } from "../../utils/colors";
import styled from "styled-components";

/* Components */
import Words from "../subComponents/myWords/Words";
import Modal from "../generalComponents/Modal";
import EditWord from "../subComponents/myWords/EditWord";

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

const Tab = styled(Link)`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	font-weight: 550;
	text-decoration: none;
	border: 1px solid ${colors.border};
	border-radius: 8px 8px 0 0;
	background: ${colors.background};
	:hover {
		color: ${colors.activeFont};
		border-bottom: 3px ${colors.selectedBorder} solid;
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

const deletedWords: Word[] = [
	{
		id: 2,
		ownerId: 1,
		english: "English2",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: false,
		memoryLevel: 18,
		deletionDate: new Date("2021-08-13"),
	},
	{
		id: 6,
		ownerId: 1,
		english: "English6",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 98,
		deletionDate: new Date("2021-09-24"),
	},
	{
		id: 7,
		ownerId: 1,
		english: "English7",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 98,
		deletionDate: new Date("2021-10-10"),
	},
];

const activeWords: Word[] = [
	{
		id: 1,
		ownerId: 1,
		english: "English",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 0,
		deletionDate: null,
	},
	{
		id: 3,
		ownerId: 1,
		english: "English3",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: false,
		memoryLevel: 38,
		deletionDate: null,
	},
	{
		id: 4,
		ownerId: 1,
		english: "English4",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 67,
		deletionDate: null,
	},
	{
		id: 5,
		ownerId: 1,
		english: "English5",
		hungarian: ["hun1", "hun2", "hun3"],
		sentences: ["sentence1", "sentence2", "sentence3"],
		notes: "This is a notes",
		type: "word",
		favourite: true,
		memoryLevel: 98,
		deletionDate: null,
	},
];

export interface APICallResult {
	activeWords: Word[];
	deletedWords: Word[];
}

export default function MyWords() {
	const [words, setWords] = useState<APICallResult>({
		activeWords: [],
		deletedWords: [],
	}); /* REFACTOR: Split this two separated entry active / deleted */
	const [activeTab, setActiveTab] = useState<"active-words" | "deleted-words">("active-words");
	const { wordForEditing } = useContext(AppContext);

	useEffect(() => {
		load();
	}, []);

	function load() {
		setWords({ activeWords, deletedWords });
	}

	function changeTabStyle() {
		const activeTabStyle = {
			backgroundColor: colors.activeBackground,
			color: colors.activeFont,
			borderBottom: `3px ${colors.activeBorder} solid`,
		};
		const inactiveTabStyle = { backgroundColor: colors.inactiveBackground, color: colors.inactiveFont };

		if (activeTab === "active-words") return { activeWordsTab: activeTabStyle, deletedWordsTab: inactiveTabStyle };
		else return { activeWordsTab: inactiveTabStyle, deletedWordsTab: activeTabStyle };
	}

	function saveEditedWord(editedWord: Word) {
		const currentActiveWords = words.activeWords.map((word: Word) => (editedWord.id === word.id ? editedWord : word));
		setWords({ activeWords: currentActiveWords, deletedWords: words.deletedWords });
	}

	return (
		<MainContainer>
			<Modal>
				<EditWord title="Edit word" initialWord={wordForEditing} save={saveEditedWord} />
			</Modal>
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
						<Tab to="/my-words/active-words" onClick={() => setActiveTab("active-words")} style={changeTabStyle().activeWordsTab}>
							Active Words
						</Tab>
						<Tab to="/my-words/deleted-words" onClick={() => setActiveTab("deleted-words")} style={changeTabStyle().deletedWordsTab}>
							Deleted Words
						</Tab>
					</TabContainer>
					<WordContainer>
						<Route path="/my-words/active-words" component={() => <Words words={words} displayedWordsType="active" />} />
						<Route path="/my-words/deleted-words" component={() => <Words words={words} displayedWordsType="deleted" />} />
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
