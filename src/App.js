import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import House from './components/House';
import Marker from './components/Marker';

class App extends Component {

	state = {
		houses: [], 
		allHouses: [],
		selectedHouse: null,
		search: ''
	}

	componentDidMount() {
		const url = `http://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/kdncode/react-airbnb/master/api.json`;
		fetch (url) //AJAX
			.then(response => response.json())
			.then(data => {
				this.setState({ 
					houses: data,
					allHouses: data,
					selectedHouse: data[0]
				})
			})
	};

	selectHouse = (house) => {
		this.setState({ selectedHouse: house })
	}

	handleSearch = (e) => {
		this.setState({ 
			search: e.target.value,
			houses: this.state.allHouses.filter((house) => new RegExp(e.target.value, 'i').exec(house.name)) 
		})
	}

	render() {

		let center = {
			lat: 37.7749,  /* latitude */
			lng: 122.4194  /* longtitude */
		}

		if (this.state.selectedHouse) {
			center = {
				lat: this.state.selectedHouse.lat,
				lng: this.state.selectedHouse.lng
			}
		}
	
		return (
			<div className="app" style={{ height: '100vh', width: '100%'}}>
				<div className="main">
					<div className="search">
						<input 
							type="text"
							placeholder="Search..."
							value={this.state.search}
							onChange={this.handleSearch}
							/>
					</div>
					
					<div className="houses">
						{ this.state.houses.map(house => {
							return <House 
								key={house.name} 
								house={house}
								selectHouse={this.selectHouse}/>
						})}
					</div>
				</div>
				<div className="map">
					<GoogleMapReact
						// bootstrapURLKeys={{ key: 'AIzaSyAHbKWGMwqv0GJhaVj1XKMXFZeLdzzXK' }}
						center={center}
						zoom={11}  /* 1-15 */
					>
					{ this.state.houses.map(house => {
							return <Marker 
								key={house.name} 
								lat={house.lat} 
								lng={house.lng} 
								text={house.price}
								selected={house === this.state.selectedHouse}/>
					})}
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}

export default App;
