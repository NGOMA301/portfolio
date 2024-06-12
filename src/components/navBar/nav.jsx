import './nav.css'
import React, { useState } from 'react'
import { FaHome, FaUser, FaList, FaBriefcase, FaComment } from 'react-icons/fa'




const Nav = () => {

    const [showAside, setShowAside] = useState(false);
    const [active, setActive] = useState(false);

    return (
        <div className='main-container'>
            <div className={`${showAside ? 'aside aside_show' : 'aside'}`}>
                <div className="logo">
                    <a href="/"><span>N</span>goma</a>
                </div>
                <div className="nav-toggler" id='nav-toggler' onClick={() => setShowAside(!showAside)}>
                    <span></span>

                </div>
                <ul className={`${active ? 'nav none' : 'nav'}`}>

                    <li><a href="/"><i><FaHome /></i>Home</a></li>

                    <li><a href="/about" onClick={() => setActive(true)}><i><FaUser /></i>About</a></li>

                    <li><a href="/services"><i><FaList /></i>Services</a></li>

                    <li><a href="/portfolio"><i><FaBriefcase /></i>portfolio</a></li>

                    <li><a href="/contact"><i><FaComment /></i>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
