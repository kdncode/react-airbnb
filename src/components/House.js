import React, { Component } from 'react';
import './House.css';

class House extends Component {

    handleClick = () => {
        // Call the parent method selectHouse
        this.props.selectHouse(this.props.house);
    }

    render() {

        const title = this.props.house.priceCurrency 
        + this.props.house.price 
        + ' - ' + this.props.house.name;

        const style = {
            backgroundImage: `url('${this.props.house.imageUrl}')`
        };

        return (
            <div className="house" onClick={this.handleClick}>
                <div className="house-picture" style={style}></div>
                <div className="house-title">
                    { title }
                </div>
            </div>
        );
    }
}

export default House;