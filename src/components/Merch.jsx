import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Merch() {

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
        staggerChildren: 0.15
      }
    }
  }

  return (
    <section id="merch"className="colors-1">
            <div className="section-grid">
                <img className="section-image"  alt="T-Shirt design of Dentonpalooza 5." src="merch.png" />
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }} className="section-textbox"> 
                <motion.h2 variants={item} className="section-header"  >MERCHANDISE</motion.h2>
                <motion.p variants={item} className="paragraph"  >
                  Preorder merch have been printed and we are no longer taking orders.
                  Thank you to our friends at <a className="details-link" href='https://www.panector.com/' target="_blank">Pan Ector</a>!
                </motion.p>
                </motion.div>
            </div>
        </section>
  )
}

export default Merch