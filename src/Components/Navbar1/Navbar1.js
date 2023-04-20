import React, { useState } from 'react';
import './Navbar1.css'

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">
                Fitverse
            </a>

            <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link" onClick={toggleMenu}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/courses" className="nav-link" onClick={toggleMenu}>
                            Courses
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/sessions" className="nav-link" onClick={toggleMenu}>
                            Sessions
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link" onClick={toggleMenu}>
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link" onClick={toggleMenu}>
                            About
                        </a>
                    </li>
                </ul>
            </div>
            <button className="navbar-toggler" onClick={toggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
};

export default Navbar1;