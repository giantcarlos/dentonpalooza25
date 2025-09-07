import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Images extends Component {
  render() {
    
    return (
      <div className='image-container'>
        <div className='pic' id='pic4' alt="Von Erich brothers in their Iron Claw pose." />
        <div className='pic' id='pic3' alt="Carl Finch playing the accordion."/>
        <div className='pic' id='pic2' alt="Everything is Terrible on stage."/>
        <div className='pic' id='pic1' alt="Singer of Riverboat Gamblers crowdsurfing." />
    </div>
    )
  }
}