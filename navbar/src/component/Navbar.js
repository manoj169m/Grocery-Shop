import React, { useState } from 'react'
import '../css/navbar.css'

const Navbar = () => {

  const [flexs,setFlex]=useState(false)

  // const displa =document.querySelector('.sidebar')


 
  const slide =()=>{
    setFlex(true)
    // displa.style.display='flex'
  }
  const Closeslide =()=>{
    setFlex(false)
    // displa.style.display='none'
  }



  return (
    <>
      <nav>
      <ul className='sidebar' style={{display :flexs ?'flex': 'none'}}>
            <li onClick={Closeslide}>x</li>
            <li>logo</li>
            <li>home</li>
            <li>aboutus</li>
            <li>contacts</li>
            <li>services</li>
            <li>login</li>
          
         
        </ul>
        <ul>
            <li >logo</li>
            <li className='hideitems'>home</li>
            <li className='hideitems'>aboutus</li>
            <li className='hideitems'>contacts</li>
            <li className='hideitems'>services</li>
            <li className='menu-item' onClick={slide}>x</li>
            <li className='hideitems'>login</li>
           
        
        </ul>
        </nav>
      
    </>
  )
}

export default Navbar
