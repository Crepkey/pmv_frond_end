import { useState, useEffect, useContext } from "react";
import { Route, Link } from "react-router-dom";

/* Context */
import { AppContext } from "../../AppContext";

/* Interfaces */
import { ServerError, WordOperationType } from "../../utils/interfaces";
import { Word } from "sharedInterfaces";

/* Icons */
import { BsFilter, BsChevronLeft, BsChevronRight, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

/* Styles */
import { colors } from "../../utils/colors";
import styled from "styled-components";

/* Components */
import Words from "../subComponents/myWords/Words";
import Modal from "../generalComponents/Modal";
import EditWord from "../subComponents/myWords/EditWord";
import { generateID } from "src/utils/utils";

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

interface ParsedResponse {
	activeWords: Word[];
	deletedWords: Word[];
}

type PathNames = "/my-words/active-words" | "/my-words/deleted-words";

export default function MyWords() {
	const [activeWords, setActiveWords] = useState<Word[]>([]);
	const [deletedWords, setDeletedWords] = useState<Word[]>([]);
	const [activeTab, setActiveTab] = useState<PathNames>(window.location.pathname as PathNames);

	const { wordForEditing, setActiveModal, createToast } = useContext(AppContext);
	const { activeUser } = useContext(AppContext);

	const activeWordsPath: PathNames = "/my-words/active-words";
	const deletedWordsPath: PathNames = "/my-words/deleted-words";

	useEffect(() => {
		async function load() {
			const rawData: Response = await fetch(`/my-words/${activeUser}?numberOfDisplayedRows=50`);
			const parsedData: ParsedResponse = await rawData.json();
			setActiveWords(parsedData.activeWords);
			setDeletedWords(parsedData.deletedWords);
		}
		load();
	}, [activeUser]);

	function changeTabStyle() {
		const activeTabStyle = {
			backgroundColor: colors.activeBackground,
			color: colors.activeFont,
			borderBottom: `3px ${colors.activeBorder} solid`,
		};
		const inactiveTabStyle = { backgroundColor: colors.inactiveBackground, color: colors.inactiveFont };

		if (activeTab === "/my-words/active-words") return { activeWordsTab: activeTabStyle, deletedWordsTab: inactiveTabStyle };
		else return { activeWordsTab: inactiveTabStyle, deletedWordsTab: activeTabStyle };
	}

	async function saveNewWord(newWord: Word) {
		newWord.ownerId = activeUser;

		const response: Response = await fetch("/my-words", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newWord),
		});

		const parsedResponse: Word | ServerError = await response.json();

		if ("error" in parsedResponse) {
			window.alert(parsedResponse.message);
			return;
		}

		const currentActiveWords = [...activeWords, parsedResponse];
		setActiveWords(currentActiveWords);
	}

	async function deleteWordPermanently(deletedWord: Word) {
		const response: Response = await fetch("/my-words", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(deletedWord),
		});

		const parsedResponse: Word | ServerError = await response.json();

		if ("error" in parsedResponse) {
			window.alert(parsedResponse.message);
			return;
		}

		setDeletedWords(deletedWords.filter((word: Word) => deletedWord.id !== word.id));
	}

	async function updateWord(updatedWord: Word, operation: WordOperationType) {
		if (operation === "delete") {
			updatedWord.deletionDate = new Date();
		}
		if (operation === "restore") {
			updatedWord.deletionDate = null;
		}

		const response: Response = await fetch("/my-words", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(updatedWord),
		});

		const parsedResponse: Word | ServerError = await response.json();

		if ("error" in parsedResponse) {
			window.alert(parsedResponse.message);
			return;
		}

		switch (operation) {
			case "edit":
				setActiveWords(activeWords.map((word: Word) => (word.id === updatedWord.id ? updatedWord : word)));
				break;
			case "delete":
				setActiveWords(activeWords.filter((word: Word) => word.id !== updatedWord.id));
				setDeletedWords([...deletedWords, updatedWord]);
				break;
			case "restore":
				setDeletedWords(deletedWords.filter((word: Word) => word.id !== updatedWord.id));
				setActiveWords([...activeWords, updatedWord]);
		}
	}

	return (
		<MainContainer>
			<Modal>
				<EditWord title="Edit word" initialWord={wordForEditing} save={updateWord} />
			</Modal>
			<Modal>
				<EditWord title="Add new word" save={saveNewWord} />
			</Modal>
			<ControlBarContainer>
				<AddNewWordButton onClick={() => setActiveModal("Add new word")}>Add new word</AddNewWordButton>
				<SearchContainer>
					<SearchBar type="search" id="lname" name="lname" placeholder="Type here for searching" />
					<FilterButton>
						<BsFilter
							size={24}
							onClick={() =>
								createToast({
									id: generateID(),
									type: "error",
									title: "This is my first toast",
									details: "This is a simple text which represents the details",
								})
							}
						/>
					</FilterButton>
				</SearchContainer>
			</ControlBarContainer>
			<TableContainer>
				<TableBlock>
					<TabContainer>
						<Tab to={activeWordsPath} onClick={() => setActiveTab(activeWordsPath)} style={changeTabStyle().activeWordsTab}>
							Active Words
						</Tab>
						<Tab to={deletedWordsPath} onClick={() => setActiveTab(deletedWordsPath)} style={changeTabStyle().deletedWordsTab}>
							Deleted Words
						</Tab>
					</TabContainer>
					<WordContainer>
						<Route path="/my-words/active-words" component={() => <Words activeWords={activeWords} updateWord={updateWord} />} />
						<Route
							path="/my-words/deleted-words"
							component={() => <Words deletedWords={deletedWords} updateWord={updateWord} deleteWord={deleteWordPermanently} />}
						/>
					</WordContainer>
				</TableBlock>
			</TableContainer>
			<PaginationContainer>
				<PaginationButton>
					<BsChevronDoubleLeft onClick={() => createToast({ id: generateID(), type: "warning", title: "WARNING", details: "details" })} />
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
