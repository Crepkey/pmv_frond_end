import { useState, createContext, ReactNode } from "react";
import { Word } from "./utils/interfaces";

interface AppContextProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	wordForEditing: Word;
	setWordForEditing: React.Dispatch<React.SetStateAction<Word>>;
}

const defaultValues: AppContextProps = {
	isModalOpen: false,
	setIsModalOpen: () => {},
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
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [wordForEditing, setWordForEditing] = useState<Word>(defaultValues.wordForEditing);

	return <AppContext.Provider value={{ isModalOpen, setIsModalOpen, wordForEditing, setWordForEditing }}>{children}</AppContext.Provider>;
};
