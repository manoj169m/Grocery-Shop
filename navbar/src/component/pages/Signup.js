import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,SetPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()

        const formData ={
            userName:name,
            email:email,
            password:password

        }
        axios.post('http://localhost:3005/signup/post',formData
          
        )
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        setName('')
        setEmail('')
        SetPassword('')

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <lable>userName</lable>
            <br></br>
            <input type='text'  onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Email</label>
            <br></br>
            <input type='text'   onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <lable>Password</lable>
            <br></br>
            <input type='text'   onChange={(e)=>SetPassword(e.target.value)} value={password}></input>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default Signup
