import './nav.css';
import React, { useState } from 'react';
import { FaHome, FaUser, FaList, FaBriefcase, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {

    const [showAside, setShowAside] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <div className='main-container'>
            <div className={`${showAside ? 'aside aside_show' : 'aside'}`}>
                <div className="logo">
                    <Link to="/"><span>N</span>goma</Link>
                </div>
                <div className="nav-toggler" id='nav-toggler' onClick={() => setShowAside(!showAside)}>
                    <span></span>
                </div>
                <ul className={`${active ? 'nav none' : 'nav'}`}>
                    <li><Link to="/"><i><FaHome /></i>Home</Link></li>
                    <li><Link to="/about" onClick={() => setActive(true)}><i><FaUser /></i>About</Link></li>
                    <li><Link to="/services"><i><FaList /></i>Services</Link></li>
                    <li><Link to="/portfolio"><i><FaBriefcase /></i>portfolio</Link></li>
                    <li><Link to="/contact"><i><FaComment /></i>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
