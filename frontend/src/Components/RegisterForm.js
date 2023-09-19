import React, { useState } from 'react'
import axios from 'axios'

const RegisterFrom = () => {
    const [formData, setformData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
    })

    const [msg,setMsg] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target;
        setformData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = (e) =>{
        if(formData.password === formData.confirmPassword) {
            e.preventDefault();
            axios.post("http://localhost:4000/api/register",formData)
            .then((response)=>{
                const token =response.data.token;
                localStorage.setItem("token", token);
                console.log(response.data);
                if(response.data.msg === "null"){
                    alert(response.data)
                }
                else{
                    setMsg(response.data.msg)
                    console.log(msg)
                    alert(response.data.msg);
                }
            })
        }
        else{
            e.preventDefault();
            alert("password and Confirm password doesnot matched");
            setMsg("password and Confirm password doesnot matched")
        }
    }
  return (
    <>
    <div className="contanier">
      <form onSubmit={handleSubmit} >
          <h2 className="heading">Register Form</h2>
          <div className="input">
              <input type="text" name="name" id="name"  placeholder="Enter Your Full Name" required value={formData.name} onChange={handleChange}/>
              <input type="email" name="email" id="email"  placeholder="Enter a Email" required value={formData.email} onChange={handleChange}/>
              <input type="password" name="password" id="password"  placeholder="Enter a password" required value={formData.password} onChange={handleChange}/>
              <input type="password" name="confirmPassword" id="confirmPassword"  placeholder="Confirmed a password" required value={formData.confirmPassword} onChange={handleChange}/>
          </div>
          <h3 className="msg">{msg}</h3>
          <div className="btn">
              <button>Login</button>
          </div>
      </form>
    </div>
  </>
  )
}

export default RegisterFrom
