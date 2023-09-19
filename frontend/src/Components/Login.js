import React, { useState } from "react";
import axios from "axios";


const Login = () => {
  const[formData, setFromData] =useState({
    email : "",
    password : "",
  })
  const [msg, setmsg] = useState("")

  const handlechange=(e)=>{
    const{name,value} =e.target;
    setFromData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    //add code to handle form submission here
    console.log("From Submitted :", formData)
    const token = localStorage.getItem("token");
    console.log("Token :", token)


    axios.post("http://localhost:4000/api/login",formData)
    .then((response) => {
      
      if(response.data.msg === "null"){
        alert(response.data)
      }
      else{
        setmsg(response.data.msg)
        console.log(response.data.msg)
        alert(response.data.msg)
      }
    }).catch((err)=>{
      console.log("Error in Login : ", err)
    })
  }
  return (
    <>
      <div className="contanier">
        <form onSubmit={handleSubmit}>
            <h2 className="heading">Login</h2>
            <div className="input">
                <input type="text" name="email" id="email"  placeholder="Enter your Email" required   value={formData.email} onChange={handlechange}/>
                <input type="password" name="password" id="password"  placeholder="Enter a password" required value={formData.password} onChange={handlechange}/>
            </div>
              <h3 className="msg">{msg}</h3>
            <div className="btn">
                <button type="submit">Login</button>
            </div>
        </form>
      </div>
    </>
  );
};

export default Login;
