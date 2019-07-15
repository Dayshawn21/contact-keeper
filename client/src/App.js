import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './com/pages/Home';
import About from './com/pages/About';
import Navbar from './com/layout/Navbar';

import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
};

export default App;
