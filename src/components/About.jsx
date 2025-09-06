import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {

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
    }}

    const container2 = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: .5,
          staggerChildren: 0.125
        }
      }
    }

    const item2 = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }
  

  return (
    <section id="about">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }} className="section-grid">
                <motion.img variants={item} className="section-image"  alt="Digital art of Denton A-train with the Dentonpalooza logo and Morrison's Corn Kits above it." src="art5.png" />
                <div className="section-textbox">
                <motion.h2 variants={item} className="section-header"  >WHAT IS DENTOPALOOZA?</motion.h2>
                <motion.p variants={item} className="paragraph"  >DENTONPALOOZA 5 is a charity variety show showcasing the weird and beatiful people and performers in Denton, TX.</motion.p>
                <motion.h2 variants={item} className="section-header2"  >BENEFICIARIES</motion.h2>
                <motion.p variants={item} className="paragraph"  >All funds raised benefit these organizations:</motion.p>
                <motion.div variants={container2} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }} className="beneficiary-grid">
                            <motion.a variants={item2} href='https://theartroomdenton.org/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/GBB5S1l.png"} alt='logo of Miss Angelines' /></motion.a>
                            <motion.a variants={item2} href='https://dmacdenton.org/' className='image-reverse-gray-zoom' target="_blank"><img src={"https://i.imgur.com/lU9nHkR.png"} alt='logo of Dans Silverleaf' /></motion.a>
                            <motion.a variants={item2} href='https://leukemiatexas.org/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/CWrmgQg.jpg"} alt='logo of Eastside' /></motion.a>
                        </motion.div>
                </div>
            </motion.div>
        </section>
  )
}

export default About;