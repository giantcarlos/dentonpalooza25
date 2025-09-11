import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Images extends Component {
  render() {
    const item = {
      hidden: { y: 50,
        opacity: 0
       },
      show: { y: 0,
        opacity: 1
       }
    }
    return (
      <motion.div variants={item} initial="hidden" animate="show" transition={{duration: .625}} className='image-container'>
        <div className='pic' id='pic4' alt="Matthew and the Arrogant Sea promo standing on the street." />
        <div className='pic' id='pic3' alt="Halloween pumpkin on the Denton Square."/>
        <div className='pic' id='pic2' alt="Everything is Terrible promo."/>
        <div className='pic' id='pic1' alt="Sly Stone memorial phot." />
    </motion.div>
    )
  }
}