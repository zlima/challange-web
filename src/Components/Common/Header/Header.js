import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import mainLogo from "../../../assets/logo.svg";
import "./style.css";

function Header(props) {
	return (
		<Navbar expand="lg">
			<Navbar.Brand href="#home">
				<img
					src={mainLogo}
					width="58"
					height="40"
					className="d-inline-block align-top"
					alt="logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<div className="headerlinkwrapper">
						<Nav.Link href="#showcase">showcase</Nav.Link>
					</div>
					<div className="headerlinkwrapper">
						<NavDropdown title="services" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">android</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">ios</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">backend</NavDropdown.Item>
						</NavDropdown>
					</div>
					<div className="headerlinkwrapper">
						<Nav.Link href="#blog">blog</Nav.Link>
					</div>
					<div className="headerlinkwrapper">
						<Nav.Link href="#about">about us</Nav.Link>
					</div>
					<div className="headerlinkwrapper">
						<Button type="submit">talk to us</Button>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
