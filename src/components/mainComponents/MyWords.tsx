import { useState, useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";

/* Utils */
import omit from "lodash/omit";

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

interface ServerResponse {
	activeWords: Word[];
	deletedWords: Word[];
}

export default function MyWords() {
	const [activeWords, setActiveWords] = useState<Word[]>([]);
	const [deletedWords, setDeletedWords] = useState<Word[]>([]);
	const [activeTab, setActiveTab] = useState<"active-words" | "deleted-words">("active-words");
	const { wordForEditing, setActiveModal } = useContext(AppContext);
	/* REFACTOR: wordForEditing doesn't use the context for lift up  */

	useEffect(() => {
		load();
	}, []);

	async function load() {
		const rawData = await fetch("/my-words/2?numberOfDisplayedRows=50");
		const parsedData: ServerResponse = await rawData.json();
		setActiveWords(parsedData.activeWords);
		setDeletedWords(parsedData.deletedWords);
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
		const currentActiveWords = activeWords.map((word: Word) => (editedWord.id === word.id ? editedWord : word));
		setActiveWords(currentActiveWords);
	}

	async function saveNewWord(newWord: Word) {
		/* FIXME: Owner ID is not handled */
		const newWordWithoutID = omit(newWord, "id");

		const serverResp = await fetch("/my-word", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newWordWithoutID),
		});

		const savedWord = await serverResp.json();
		const currentActiveWords = [...activeWords, savedWord];
		setActiveWords(currentActiveWords);
	}

	function deleteWord(deletedWord: Word) {
		if (deletedWord.deletionDate === null) {
			setActiveWords(activeWords.filter((word: Word) => deletedWord.id !== word.id));
		} else {
			setDeletedWords(deletedWords.filter((word: Word) => deletedWord.id !== word.id));
		}
	}

	return (
		<MainContainer>
			<Modal>
				<EditWord title="Edit word" initialWord={wordForEditing} save={saveEditedWord} />
			</Modal>
			<Modal>
				<EditWord title="Add new word" save={saveNewWord} />
			</Modal>
			<ControlBarContainer>
				<AddNewWordButton onClick={() => setActiveModal("Add new word")}>Add new word</AddNewWordButton>
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
						<Route
							path="/my-words/active-words"
							component={() => <Words activeWords={activeWords} saveWord={saveEditedWord} deleteWord={deleteWord} />}
						/>
						<Route
							path="/my-words/deleted-words"
							component={() => <Words deletedWords={deletedWords} saveWord={saveEditedWord} deleteWord={deleteWord} />}
						/>
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
