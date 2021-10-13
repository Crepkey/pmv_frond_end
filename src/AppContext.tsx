import { useState, createContext, ReactNode } from "react";

interface AppContextProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps>({ isModalOpen: false, setIsModalOpen: () => {} });

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	return <AppContext.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</AppContext.Provider>;
};
