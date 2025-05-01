import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './Authcontext';

export default function Navbar1() {
  const navigate = useNavigate();
  const { isAuthenticated, logout, selectedCity, setShowLocationModal } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!isAuthenticated) return null;

  return (
    <Navbar id='navbar' expand="lg" sticky="top">
      <Container className="container d-flex align-items-center justify-content-between">
        {/* Left side: Logo and selected city */}
        <Navbar.Brand onClick={() => navigate('/')} className="cursor-pointer me-4 d-flex align-items-center gap-3">
          <img src="Images/logo-brand.png" alt="Brand Logo" width={100} />
          {selectedCity && (
            <span
              className="text-lg font-semibold text-gray-500 cursor-pointer"
              onClick={() => setShowLocationModal(true)}
              title="Change Location"
            >
              Deliver In
              <div className="d-flex align-items-center gap-1 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                  />
                </svg>
                {selectedCity}
              </div>
            </span>
          )}
        </Navbar.Brand>

      
        <Nav className="d-flex flex-row align-items-center">
          <Nav.Link onClick={() => navigate('/')} className="px-3">Products</Nav.Link>
          <Nav.Link onClick={() => navigate('/')} className="px-3">Reviews</Nav.Link>
          <Nav.Link onClick={() => navigate('/')} className="px-3">Account</Nav.Link>
        </Nav>

        
        <div className="d-flex align-items-center">
          <Nav.Link onClick={() => navigate('/')} className="me-4 p-0 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
            </svg>
          </Nav.Link>

          <Button variant="dark" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}
