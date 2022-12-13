import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Navbarf = () => {

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <Navbar className='w-full bg-gray-400 shadow-lg p-4 navbar' expand="lg">
      <Container fluid className='max-w-full'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="gap-2 p-2 m-auto justify-center">
            <Nav.Link href="/admin/CRUD" className={(url === "/admin/CRUD" ? " active text-black uppercase rounded-lg bg-gray-300" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Pievienot Preci</Nav.Link>
            <Nav.Link href="/admin/PievienoPreci" className={(url === "/admin/PievienoPreci" ? " active text-black uppercase rounded-lg bg-gray-300" : "text-black uppercase rounded-lg hover:bg-gray-400 duration-500")}>Preces</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarf