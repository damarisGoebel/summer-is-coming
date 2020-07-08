import React from 'react';
// import logo from './logo.svg';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class Navigation extends React.Component {
    state = ""

    render() {
        return (
            <div className="App">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Summer is coming</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/signup">Signup</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/userprofile">my Profile</Nav.Link>
                            <NavDropdown title="Activities" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/activities">See all activities</NavDropdown.Item>
                                <NavDropdown.Item href="/activities/add">Add an activity</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/dummy">Styles Dummy</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
