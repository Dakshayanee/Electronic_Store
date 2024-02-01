import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import UserContext from "../context/user.context";

function CustomNavbar() {
  const userContext = useContext(UserContext);
  const doLogout =()=>{
    // userContext.setIsLogin(false)
    // userContext.setUserData(null)
    
    //this logout comes from user.provider
     userContext.logout()
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img alt=" logo" src="/assets/download.png" height={30} width={30} />

          <span className="ms-1 mt-1"> ElectronicShop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <NavDropdown
              title="Product Categories"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Branded Phones
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Smart TV</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laptops</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">More</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing" as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cart</Nav.Link>
            {userContext.isLogin ? (
                // if user is login then it will get users data
              <>
                ({userContext.isAdminUser && (
                <>
                   <Nav.Link as={NavLink} to={'/admin/home'}>AdminDashboard</Nav.Link>
                </>

                )})
                <Nav.Link as={NavLink} to="/users/profile">{userContext.userData.user.name}</Nav.Link>
                <Nav.Link as={NavLink} to="/users/order">Orders</Nav.Link>
                <Nav.Link  onClick={doLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                <Nav.Link eventKey={2} as={NavLink} to="/register">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
