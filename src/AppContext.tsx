import { useState, createContext, ReactNode } from "react";
import { Word } from "sharedInterfaces";
import { Toast } from "./utils/interfaces";

interface AppContextProps {
	activeModal: string;
	setActiveModal: React.Dispatch<React.SetStateAction<string>>;
	activeUser: number;
	setActiveUser: React.Dispatch<React.SetStateAction<1 | 2>>;
	toast: Toast;
	setToast: React.Dispatch<React.SetStateAction<Toast>>;
	wordForEditing: Word;
	setWordForEditing: React.Dispatch<React.SetStateAction<Word>>;
}

const defaultValues: AppContextProps = {
	activeModal: "none",
	setActiveModal: () => {},
	activeUser: 1,
	setActiveUser: () => {},
	toast: { id: 1, title: "title", details: "details", type: "init" },
	setToast: () => {},
	wordForEditing: {
		id: 1,
		favourite: true,
		deletionDate: null,
		type: "word",
		english: "Dummy Data",
		hungarian: ["Teszt adat"],
		exampleSentences: ["This is a dummy data. If you see this and you are not in test. You screwed up! :)"],
		notes: "Test or you did something wrong? Which one is correct? :P",
		ownerId: 1,
		memoryLevel: 100,
	},
	setWordForEditing: () => {},
};

export const AppContext = createContext<AppContextProps>(defaultValues);

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [activeModal, setActiveModal] = useState<string>("");
	const [activeUser, setActiveUser] = useState<1 | 2>(1);
	const [toast, setToast] = useState<Toast>(defaultValues.toast);
	const [wordForEditing, setWordForEditing] = useState<Word>(defaultValues.wordForEditing);

	return (
		<AppContext.Provider value={{ activeModal, setActiveModal, activeUser, setActiveUser, toast, setToast, wordForEditing, setWordForEditing }}>
			{children}
		</AppContext.Provider>
	);
};
