import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import Description from '../pages/description';

function RoutesApp() {
	return (
		<Routes>
			<Route exact path='/' element={<Home />}></Route>
			<Route path='/description' element={<Description />}></Route>
		</Routes>
	);
}

export default RoutesApp;
