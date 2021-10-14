import { useState, createContext, ReactNode } from "react";
import { Word } from "./utils/interfaces";

interface AppContextProps {
	activeModal: string;
	setActiveModal: React.Dispatch<React.SetStateAction<string>>;
	wordForEditing: Word;
	setWordForEditing: React.Dispatch<React.SetStateAction<Word>>;
}

const defaultValues: AppContextProps = {
	activeModal: "none",
	setActiveModal: () => {},
	wordForEditing: {
		id: 1,
		favourite: true,
		deletionDate: null,
		type: "word",
		english: "Dummy Data",
		hungarian: ["Teszt adat"],
		sentences: ["This is a dummy data. If you see this and you are not in test. You screwed up! :)"],
		notes: "Test or you did something wrong? Which one is correct? :P",
		ownerId: 1,
		memoryLevel: 100,
	},
	setWordForEditing: () => {},
};

export const AppContext = createContext<AppContextProps>({ ...defaultValues });

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [activeModal, setActiveModal] = useState<string>("");
	const [wordForEditing, setWordForEditing] = useState<Word>(defaultValues.wordForEditing);

	return <AppContext.Provider value={{ activeModal, setActiveModal, wordForEditing, setWordForEditing }}>{children}</AppContext.Provider>;
};
