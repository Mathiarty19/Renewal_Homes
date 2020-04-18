import React, { Component } from 'react';
import { HOUSES } from "../containers/PreviousHouses";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: HOUSES
        };
    }
    // directory maps each house in the imported array of homes out to a seperate div
    render() {
        const directory = this.state.houses.map(house => {  
            return (
                <div className="col-md-4">
                    <img src={house.cardimage} alt={house.name} />
                    <h2>{house.name}</h2>
                    <p>{house.description}</p>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        )
    }
}

export default Directory;