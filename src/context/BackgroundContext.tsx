import React, { createContext, useContext, useState, type ReactNode } from "react";

interface BackgroundContextType {
	backgroundImage: HTMLImageElement | null;
	backgroundColor: string;
	setBackgroundImage: (img: HTMLImageElement | null) => void;
	setBackgroundColor: (color: string) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);
	const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");

	return (
		<BackgroundContext.Provider
			value={{
				backgroundImage,
				backgroundColor,
				setBackgroundImage,
				setBackgroundColor,
			}}
		>
			{children}
		</BackgroundContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBackground = (): BackgroundContextType => {
	const context = useContext(BackgroundContext);
	if (!context) {
		throw new Error("useBackground must be used within a BackgroundProvider");
	}
	return context;
};

export default BackgroundContext;
