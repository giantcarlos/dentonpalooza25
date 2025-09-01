import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const NavBar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
            <motion.div variants={item} initial="hidden" animate="show" transition={{duration: 1, delay:.75}} className="header">DENTONPALOOZA 4
                <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className="sub-header">October 12, 2024 / Rubber Gloves Rehearsal Studios</div>
                <div className={active} onClick={navOff}>
                    <HashLink smooth to="#" className="links" scroll={el => scrollWithOffset(el)}>HOME ➤</HashLink>
                    <HashLink smooth to="#lineup" className="links" scroll={el => scrollWithOffset2(el)}>LINEUP ➤</HashLink>
                    <HashLink smooth to="#tickets" className="links" scroll={el => scrollWithOffset(el)}>TICKETS ➤</HashLink>
                    <HashLink smooth to="#merch" className="links" scroll={el => scrollWithOffset(el)}>MERCH ➤</HashLink>
                    <HashLink smooth to="#press" className="links" scroll={el => scrollWithOffset3(el)}>PRESS ➤</HashLink>
                </div>
            </motion.div>
        </nav>
    );
};

export default NavBar;