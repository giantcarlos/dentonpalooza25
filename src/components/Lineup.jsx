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
            <div className="section-grid">
                <img className="section-image"  alt="Lineup poster for Dentonpalooza 5." src="DENTONPALOOZA5.png" />
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ amount: .45, once: true }} className="section-textbox"> 
                <motion.h2 variants={item} className="section-header"  >SCHEDULE</motion.h2>
                <motion.p variants={item} className="paragraph"  >
                  Main Stage Lineup<br/>
                  06:00 PM Doors open<br />
                   <span class="highlight-blue">06:15 PM Brotherhood<br />
                    <a className="lineup-link"href='https://www.instagram.com/brotherhood_sucks/' target="_blank">@brotherhood_sucks</a></span><br />
                   <span class="highlight-green">07:00 PM Assissted Living<br />
                    <a className="lineup-link"href='https://www.instagram.com/assistedlivingtx/' target="_blank">@assistedlivingtx</a></span><br />
                   <span class="highlight-yellow">08:00 PM Side Chicks<br />
                    <a className="lineup-link"href='https://www.instagram.com/chelly_danielle/' target="_blank">@chelly_danielle</a> / <a className="details-link"href='https://www.instagram.com/laurenupshawesq/' target="_blank">@laurenupshawesq</a></span><br />
                   <span class="highlight-red">09:00 PM Matthew and the Arrogant Sea<br />
                    <a className="lineup-link"href='https://www.instagram.com/matthewandthearrogantsea/' target="_blank">@matthewandthearrogantsea</a></span><br /> 
                  <span class="highlight-purple">10:00 PM Everything is Terrible! Live!<br />
                    <a className="lineup-link"href='https://www.instagram.com/everythingisterrible666/' target="_blank">@everythingisterrible666</a></span><br />
                  11:45 PM Thank you and goodnight<br />
                  12:00 AM Doors close<br /><br/>
                </motion.p>
                <a className="button" href='https://www.prekindle.com/event/17543-dentonpalooza-5-denton' target="_blank">
                <motion.button variants={item} >TICKETS</motion.button>
                </a>
                </motion.div>
            </div>
        </section>
  )
}

export default Lineup