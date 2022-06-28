import { createContext, useState } from 'react';

export const ChoosedMovieContext = createContext();

export function ChoosedMovieContextProvider({ children }) {
	const [choosedMovie, setChoosedMovie] = useState([]);

	return (
		<ChoosedMovieContext.Provider value={{ choosedMovie, setChoosedMovie }}>
			{children}
		</ChoosedMovieContext.Provider>
	);
}
