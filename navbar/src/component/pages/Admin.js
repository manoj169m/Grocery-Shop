import axios from 'axios'
import React, { useState } from 'react'

const Admin = () => {

    const [type,SetType]=useState()
    const[brand,setBrand]=useState()
    const[name,SetName]=useState()
    const[rate,setrate]=useState()
    const[image,setImage]=useState()

    const handleSubmit=()=>{
        axios.post('')
    }

  return (
    <div>
        <form onSubmit={}>
            <label>ItemType</label>
            <br></br>
            <input type='text' value={type}  onChange={(e)=>SetType(e.target.value)}></input>
            <br></br>
            <label>BrandName</label>
            <br></br>
            <input type='text'  value={brand} onChange={(e)=>setBrand(e.target.value)}></input>
            <br></br>
            <label>ItemName</label>
            <br></br>
            <input type='text' value={name}  onChange={(e)=>SetName(e.target.value)}></input>
            <br></br>
            <label>ItemRate</label>
            <br></br>
            <input type='text' value={rate}  onChange={(e)=>setrate(e.target.value)}></input>
            <br></br>
            <label>ItemImage</label>
            <br></br>
            <input type='text' value={image}  onChange={(e)=>setImage(e.target.value)}></input>
          
            <br></br>
            <button type='submit'></button>
        </form>
      
    </div>
  )
}

export default Admin
