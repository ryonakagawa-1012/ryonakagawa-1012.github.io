import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/icon.png';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;