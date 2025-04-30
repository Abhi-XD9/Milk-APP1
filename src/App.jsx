
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import { useAuth } from './Components/Authcontext';
import Login from './Components/Login';
import RegistrationPage from './Components/Registration';
import Navbar1 from './Components/Navbar1';
import Footer from './Components/Footer';

function Layout() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!hideNavbarFooter && <Navbar1 />}
      <Outlet />
      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/register" />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
