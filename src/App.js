import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Description from './pages/description';
import Error from './pages/error';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/description/:id' element={<Description />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
}

export default App;
