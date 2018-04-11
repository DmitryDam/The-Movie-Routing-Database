import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App/App';

const Root = () => (
	<BrowserRouter basename="/The-Movie-Routing-Database/build">
		<App/>
	</BrowserRouter>
);

export default Root;

