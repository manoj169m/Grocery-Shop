import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.get(`http://localhost:3005/signup/get/${email}`)
        .then(res=>{console.log(res.data)
            if(res.data[0]?.email){
                if(res.data[0]?password=== password){

                }
            }

        })

    }



  return (
    <div>

        <form onSubmit={handleSubmit}>
            <lable>email</lable>
            <br></br>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <label>password</label>
            <br></br>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <br></br>
            <button type='submit'>Login</button>
        </form>
      
    </div>
  )
}

export default Login
