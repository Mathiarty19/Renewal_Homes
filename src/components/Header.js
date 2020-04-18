import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ContactForm from './Contactus';


class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false,
        };
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

render() {
        return (
          <React.Fragment>
            <Navbar dark  expand="md" className="flex-row">
              {/* <div className="container"> */}
                <NavbarToggler onClick={this.toggleNav} className="toggler-dark" />
                <Collapse isOpen={this.state.isNavOpen}  navbar>
                  <Nav navbar className="nav-fill w-100">
                    <NavItem>
                      <NavLink className="nav-link" to="/home">
                        <i className="fa fa-navicon fa-2x d-none d-md-block" /><p>Home</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/whyus">
                        <i className="fa fa-question fa-2x d-none d-md-block" /><p>Why Us?</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/aboutus">
                        <i className="fa fa-users fa-2x d-none d-md-block" /><p>About Us</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/currenthouses">
                        <i className="fa fa-home fa-2x d-none d-md-block" /><p>Current Houses</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/compare">
                        <i className="fa fa-picture-o fa-2x d-none d-md-block" /> <p>Before and After</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/houses">
                        <i className="fa fa-list fa-2x d-none d-md-block" /> <p>Previous Houses</p>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/contactus">
                        <i className="fa fa-address-card fa-2x d-none d-md-block" /> <p>Contact Us</p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              {/* </div> */}
            </Navbar>
            <Jumbotron fluid>
              {/* <div className="container"> */}
                <div className="row mr-auto">
                  <div className="col-xs-12 col-md-6 text-center">
                    <h1>Renewal - Homes</h1>
                    <h2>Turning houses into homes</h2>
                    <br />
                    <Button href="tel:763-232-9360" color="primary" size="lg">Give Us a Call</Button>
                  </div>
                  <div className="col-md-1 col-lg-2">
                  </div>
                  <div className="col-xs-12 col-md-5 col-lg-4 text-left mt-2">
                    <ContactForm />
                  </div>
                </div> 
              {/* </div> */}
            </Jumbotron>
          </React.Fragment>
        );
    }
}

export default Header;