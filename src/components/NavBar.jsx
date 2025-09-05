import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isOpen, setOpen] = useState(false)
    const [active, setActive] = useState('nav-links')
    const navToggle = () => {
        active === 'nav-links' ? setActive('nav-links-active') : setActive('nav-links');
        console.log(active);
      }
    const navOff = () => {
        setActive('nav-links')
        setOpen(false)
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset2 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -50; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset3 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
  
    const item = {
        hidden: { y: -200 },
        show: { y: 0 },
      }

    return (
        <nav>
            <motion.div variants={item} initial="hidden" animate="show" transition={{duration: 1, delay:.75}} className="header">DENTONPALOOZA 5
                <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className="sub-header">October 11, 2025 / Dan's Silverleaf</div>
                <div className={active} onClick={navOff}>
                    <HashLink smooth to="#" className="links" scroll={el => scrollWithOffset(el)}>HOME ➤</HashLink>
                    <a className="links" href='https://www.prekindle.com/event/17543-dentonpalooza-5-denton' target="_blank">TICKETS ➤</a>
                    <HashLink smooth to="#tickets" className="links" scroll={el => scrollWithOffset(el)}>LINEUP ➤</HashLink>
                    <HashLink smooth to="#merch" className="links" scroll={el => scrollWithOffset(el)}>ABOUT ➤</HashLink>
                    <HashLink smooth to="#press" className="links" scroll={el => scrollWithOffset3(el)}>BENEFICIARIES ➤</HashLink>
                </div>
            </motion.div>
        </nav>
    );
};

export default NavBar;