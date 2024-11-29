import React from 'react'
import './HeroSection.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const HeroSectionLeftSide = () => {
  return (
    <div className='hero-text'>
      <h1 >Tibet <span style={{color:"orange"}}>UN1365</span> Introduction to Asian Civilization</h1>
      <p style={{fontSize:'30px'}}>Lauran Hartley</p>
      <Link to={'/showroom'}>
      <Button type='primary' size='large' style={{fontSize: '20px', marginTop:'20px',backgroundColor:'orange', width:'240px'}}><span style={{fontFamily:'"Times", san-serif'}}>Start the AR Tour</span></Button>
      </Link>
    </div>
  )
}

export default HeroSectionLeftSide
