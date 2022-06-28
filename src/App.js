import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Description from './pages/description';
import Error from './pages/error';
import Header from './components/Header';
import { ChoosedMovieContextProvider } from './contexts/choosedMovie';

import Footer from './components/Footer';

function App() {
	return (
		<ChoosedMovieContextProvider>
			<Header />
			<Router>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/description/:id' element={<Description />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</Router>
			<Footer />
		</ChoosedMovieContextProvider>
	);
}

export default App;
