import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const NavBar = ()=> {
return(
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="home" href="#">🎈GoalIt '24 </Navbar.Brand>
        </Container>
      </Navbar>
        </>
  );
}

export default NavBar;