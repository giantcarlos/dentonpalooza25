import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Lineup() {

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
    <section id="lineup"className="colors-2">
            <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }} className="section-grid">
                <motion.img variants={item} className="section-image"  alt="Lineup poster for Dentonpalooza 5." src="DENTONPALOOZA5.png" />
                <div className="section-textbox"> 
                <motion.h2 variants={item} className="section-header"  >SCHEDULE</motion.h2>
                <motion.p variants={item} className="paragraph"  >
                  We’re fine-tuning the set times. Check back soon for the full schedule!
                  {/* Time      | Main Stage<br/>
                   6:00 PM  | Brotherhood<br />
                   7:00 PM  | Assissted Living<br />
                   8:00 PM  | Matthew and the Arrogant Sea<br />
                   9:00 PM  | Side Chicks<br />
                  10:00 PM | Everything is Terrible<br />
                  11:00 PM | End of Show<br /> */}
                </motion.p>
                <a className="button" href='https://www.prekindle.com/event/17543-dentonpalooza-5-denton' target="_blank">
                <motion.button variants={item} >TICKETS</motion.button>
                </a>
                </div>
            </motion.div>
        </section>
  )
}

export default Lineup