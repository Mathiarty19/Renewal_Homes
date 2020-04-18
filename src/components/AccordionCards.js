import * as React from "react";
import { Component } from 'react';
import { motion } from "framer-motion";
import { HOUSES } from "../containers/PreviousHouses";

class HouseCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            houses: HOUSES,
        };
    }
    
    // directory maps each house in the imported array of homes out to a seperate div
    render() {
        const directory = this.state.houses.map(house => {  
            return (
                <div className="col-md-4">
                    <img src={house.images[0]} alt={house.name} />
                    <h2>{house.name}</h2>
                    <p>{house.description}</p>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                <motion.div
                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
                className="content-placeholder"
                >
                    {directory[this.props.i]}
                </motion.div>
                </div>
            </div>
        )
    }
  }

export default HouseCard;

