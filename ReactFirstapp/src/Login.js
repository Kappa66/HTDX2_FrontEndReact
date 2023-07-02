import React from 'react'
import { useState } from 'react';



function Login() {

    let [username, setMyusername] = useState()
    let [password,setPwd] = useState("");
    

   
  function collectusrname(event){

    setMyusername(event.target.value) 

  } 
  function collectpwdname(event){

   setPwd(event.target.value)

  }

  function validate(){
    if(username==="Raju"&&password==="Welcome")
    {
        console.log("Valid user")
    }
    else{
        console.log("InValid user")
    }
  }

  return (
    <div>username: <br/>
        <div><input type="text" onChange={collectusrname}/></div>
        password: <br/>
        <div><input type="text" onChange={collectpwdname}/></div> <br/>

        <button onClick={validate}>Submit</button>

    
    </div>
  )
}

export default Login