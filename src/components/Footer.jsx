import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  
    const item = {
        hidden: { y: 12.5, opacity: 0 },
        show: { y: 0, opacity: 1 }
      }
    
      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0,
            staggerChildren: 0.125
          }
        }
      }

      const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -65; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
  
    const scrollWithOffset2 = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -40; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  
    const scrollWithOffset3 = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = 0; 
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
    
      return (
        <section id="contact" className="colors-2">
          <motion.div className="footer-grid" variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }}>
                <motion.div variants={item} className="footer-left">
                    <div className="address">
                       <HashLink to="#" className="footer-logo" scroll={el => scrollWithOffset(el)}> 
                        DENTONPALOOZA 5
                        </HashLink>
                    </div>
                </motion.div>
                  <motion.div className="footer-mid" variants={item} >
                        <HashLink to="#" className="footer-links" scroll={el => scrollWithOffset(el)} >HOME</HashLink>
                        <a className="details-link" href='https://www.prekindle.com/event/17543-dentonpalooza-5-denton' target="_blank">TICKETS</a>
                        <HashLink to="#rooms" className="footer-links" scroll={el => scrollWithOffset(el)} >LINEUP</HashLink>
                        <HashLink to="#amenities" className="footer-links" scroll={el => scrollWithOffset(el)} >ABOUT</HashLink>
                        <HashLink to="#contact" className="footer-links" scroll={el => scrollWithOffset2(el)} >BENEFICIARIES</HashLink>
                    </motion.div>
                    <motion.div variants={item} className="footer-right">
                        <div className="follow">Follow us</div>
                        <div className="icon-container">
                        <a className="details-link" href='https://www.instagram.com/dentonpalooza/?hl=en' target="_blank">
                            <img className="footer-icon" variants={item} alt="Instagram icon." src="insta.png" />
                        </a>
                        <a className="details-link" href='https://www.facebook.com/events/796172349539755/' target="_blank">
                        <img className="footer-icon" variants={item} alt="Facebook icon." src="fb.png" />
                        </a>
                        </div>
                    </motion.div>
                    <motion.div variants={item} className="footer-last">
                    <HashLink to="#" className="footer-arrow" scroll={el => scrollWithOffset(el)} >⬆︎</HashLink>
                    </motion.div>
                    <motion.div variants={item} className="footer-bottom">
                        <div className="copyright">© Copyright 2025 DENTONPALOOZA</div>
                    </motion.div>
                    <motion.div variants={item} className="footer-dev">
                        <div >Website designed and maintained by&nbsp;
                            <a className="details-link"href='https://www.giantcarlos.com/' target="_blank">Gian Carlos</a>
                        </div>
                    </motion.div>
            </motion.div>
        </section>
      )
    }

export default Footer