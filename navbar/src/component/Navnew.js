import React, { useState } from 'react'
import'../css/newnav.css'
import { NavLink } from 'react-router-dom'


const Navnew = () => {

    const [slider,setSlider]=useState(false)

const sliderOn =()=>{
    setSlider(true)
}
const sliderOff =()=>{
    setSlider(false)
}

  return (
    <div >
         <nav className='slider' style={{display: slider ? 'flex' :'none'}}>
            {/* <h1>logo</h1> */}
            <ul>
            <li onClick={sliderOff}>X</li>
            <NavLink to='/'><li>Home</li></NavLink> 
                <li >Aboutus</li>
                <li>Contacts</li>
            </ul>
            <ul className='btn-signup'>
                <li>Login</li>
               <NavLink  to='/signup'> <li >Signup</li>  </NavLink>  
            
            </ul>
            </nav>

            {/* nsnns */}
        <nav>
            <h1>logo</h1>
            <ul>
               <NavLink to='/'> <li className='hideitems'>Home</li></NavLink>
                <li className='hideitems'>Aboutus</li>
                <li className='hideitems'>Contacts</li>
            </ul>
            <ul>
              <NavLink to='/login'><li className='hideitems'>Login</li> </NavLink>
              <NavLink to='/signup'><li className='hideitems'>Signup</li></NavLink>
                <li className='menu-btn' onClick={sliderOn}>X</li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navnew
