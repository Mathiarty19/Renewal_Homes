import { Component } from 'react';
import * as React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Homepage';
import Header from './Header';
import Footer from './Footer';
import { AccordionOfHomes } from './AccordionOfHomes';
import CurrentHouseCard from './CurrentHouses';
import { Comparison } from './Comparison';
import ContactMG from './Contactmg';
import Whyus from './Whyus';
import About from './Aboutus';

class Main extends Component {
    
    render() {
        
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
          <div>
            <Header />
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/houses" render={() => <AccordionOfHomes />} />
              <Route exact path="/currenthouses" render={() => <CurrentHouseCard />} />
              <Route exact path="/compare" render={() => <Comparison />} />
              <Route exact path="/contactus" render={() => <ContactMG />} />
              <Route exact path="/whyus" render={() => <Whyus />} />
              <Route exact path="/aboutus" render={() => <About />} />
              <Redirect to="/home" />
            </Switch>
            <Footer />
          </div>
        );
    }
}

export default Main;

