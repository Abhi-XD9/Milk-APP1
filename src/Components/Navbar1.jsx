
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './Authcontext';

export default function Navbar1() {
  const navigate = useNavigate()
  const { isAuthenticated,logout } = useAuth();

  
  const handleLogout =()=>{
      logout()
  }

  const handleclick = (e)=>{
    e.preventDefault();
    (setSearch(search))
  }

  if (!isAuthenticated) {
    return null;
  }

  return (

    <Navbar expand='lg' className="navbar bg-white" sticky="top">

      <Container fluid >
        <Navbar.Brand onClick={()=>navigate('/')}><img className='brand' src="Images/Brands.png" width={100} alt="" /></Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navlink-container"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link id='navlink' onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link id='navlink' onClick={()=>navigate('/fashion')}>Fashion</Nav.Link>
            <Nav.Link id='navlink' onClick={()=>navigate('/beauty')}>Beauty</Nav.Link>
            <Nav.Link id='navlink' onClick={()=>navigate('/gadgets')}>Gadgets</Nav.Link>
            <Nav.Link id='navlink' onClick={()=>navigate('/')}>Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="navform d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearch(e.target.value)}
          />
          <Button id='nav-btn' onClick={handleclick}  variant="outline-dark">Search</Button>
        </Form>
        <Nav.Link className='icons'  onClick={()=>navigate('/liked')}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
          <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982" />
          <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z" />
        </svg></Nav.Link>
        <Nav.Link className='icons' onClick={()=>navigate('/cart')}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg></Nav.Link>
        <button onClick={handleLogout} className='btn btn-dark'>Log Out</button>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>
    </Navbar>

  )
}
