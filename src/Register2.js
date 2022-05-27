import React, { useState } from 'react';
//const axios = require('axios');
import swal from 'sweetalert';
//RFC 
export default function Register2() {
    //1. State
    //Hook Variables
    const [ username , setUsername] = useState('')
    const [ email , setEmail] = useState('')
    const [ password , setPassword] = useState('')


    // localhost:1337/auth/local/register
    //2. Functions
    let submitData = ()=>{
        
        /* console.log(username);
        console.log(email);
        console.log(password);
        console.log('Good Morning'); */

        var data = {
            "username":username,
            "email":email,
            "password":password
        }
        
       // console.log(data);
        
        // Request API.
        // Add your own code here to customize or restrict how the public can register new users.
        
        fetch('http://localhost:1337/api/auth/local/register',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((response) => {
            console.log(response);
            if(response.status === 200){
                
                swal("Good job!", "User Registered Successfully", "success");
            }
            response.json();
        })
        .then(data => {
            localStorage.setItem('userInfo', JSON.stringify(data) )
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

        
    }

    //3. Return statements
    return (
        <div className="row">
            <div className="col-6 offset-3 mt-5">
                <h1 className="text-center">Registration Form 2</h1>
                <form className="">
                    <input type="text" name="username" className="form-control" placeholder="Username" value={username} onChange={(e)=>{ setUsername(e.target.value)  }} /> <br/>
                    <input type="email" name="email" className="form-control" placeholder="Email" value={email} onChange={ (e)=>{ setEmail(e.target.value) }} /><br/>
                    <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={ (e)=>{setPassword(e.target.value)}}/><br/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="button" onClick={ ()=>{ submitData() } }>Button</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}