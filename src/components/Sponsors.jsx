import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Sponsors extends Component {
  render() {
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 0.125
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="image-grid">
            <motion.a variants={item} href='https://www.missangelinesdenton.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/GBB5S1l.png"} alt='logo of Miss Angelines' /></motion.a>
            <motion.a variants={item} href='https://danssilverleaf.com/' className='image-reverse-gray-zoom' target="_blank"><img src={"https://i.imgur.com/lU9nHkR.png"} alt='logo of Dans Silverleaf' /></motion.a>
            <motion.a variants={item} href='https://www.eastsidedtx.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/CWrmgQg.jpg"} alt='logo of Eastside' /></motion.a>
            <motion.a variants={item} href='https://www.morefuncomicsandgames.com/' className='image-reverse' target="_blank"><img src={"https://i.imgur.com/gTzwN6j.png"} alt='logo of More Fun Comics and Games' /></motion.a>
            <motion.a variants={item} href='https://oakstreetdrafthouse.com/' className='image-reverse-gray-zoom' target="_blank"><img src={"https://i.imgur.com/s3YiI14.png"} alt='logo of Oak Street Drafthouse' /></motion.a>
            <motion.a variants={item} href='http://recycledbooks.com/' className='image-reverse-gray' target="_blank"><img src={"https://i.imgur.com/taLVz7q.png"} alt='logo of Recycled Books' /></motion.a>
        </motion.div>
    )
  }
}