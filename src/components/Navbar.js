import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useState, useEffect } from 'react';
const Navbar = () => {
    const [activeLink, setActiveLink] = useState('/');
    useEffect(() => {
        setActiveLink('/');
    }, []);

    return ( 
        <nav className="navbar">
            <h1>Leyang's Personal Website</h1>
            <div className="links">
                <Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={() => setActiveLink('/')}>Home</Link>     
                <Link to="/about" className={activeLink === '/about' ? 'active' : ''} onClick={() => setActiveLink('/about')}>About</Link>
                <Link to="/resume" className={activeLink === '/resume' ? 'active' : ''} onClick={() => setActiveLink('/resume')}>Resume</Link>          
            </div>
        </nav>
    );
}
 
export default Navbar;