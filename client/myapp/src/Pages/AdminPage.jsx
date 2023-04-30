import axios from 'axios';
import React, { useState } from 'react'
import "../Styles/AdminPage.css";
import { Link } from 'react-router-dom';

export default function AdminPage(){
  const [login,setLogin]=useState(false)
    const submit=(e)=>{
        e.preventDefault();
        let email=document.getElementById("email").value;
        let pwd = document.getElementById("pwd").value;

        let obj={
            email:email,
            pwd:pwd
        }
        axios.post("https://localhost:8000/getAdmin",obj)
        .then((data)=>{
            
            setLogin(true)
        }).catch((error)=>{
            console.log(error)
            alert(error.response.data)
        })
    }
  return (
    <div>
            {!login ?<form className='form'>
            <h1>Admin Login</h1>
            <label>Email :</label>
            <br></br>
            <input type="email" placeholder='email' id="email" />
            <br></br>

              <label>Password :</label>
              <br></br>
              <input type="password" placeholder='password' id="pwd" />
              <br></br>

              <button id='login' disabled={login?true:false} onClick={submit}>Login</button>

          </form>:<Link to="/dashboard"><button>To dashboard</button>
      </Link>}
    </div>
  )
}