import React, { Component } from 'react';
import './App.css';
import House from './components/House';

class App extends Component {

	state = {
		houses: []
	}

	render() {

		return (
			<div className="app">
				<div className="main">
					<div className="search"></div>
					<div className="houses">
						{ this.state.houses.map(house => {
							return <House house={house}/>
						})}
					</div>
				</div>
				<div className="map"></div>
			</div>
		);
	}
}

export default App;
