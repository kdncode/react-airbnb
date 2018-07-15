import React, { Component } from 'react';
import './App.css';
import House from './components/House';

class App extends Component {

	state = {
		houses: []
	}

	componentDidMount() {
		const url = `https://raw.githubusercontent.com/kdncode/react-airbnb/master/api.json`;
		fetch (url) //AJAX
			.then(response => response.json())
			.then(data => {
				this.setState({ houses: data })
			})
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
