import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DashBoard = () => {
  const[verified, setVerified] =useState(false);

  useEffect(()=>{
    const token = localStorage.getItem("token");

    axios.get("http://localhost:4000/api/dashBoard",{
      headers : {
        uthorization: `Bearer ${token}`
      }
    })
    .then((response)=>{
      console.log(response.data)
      setVerified(response.data)
    })
    .catch((err)=>{
      console.log("Error fetching data : " , err)
    })

  },[]);


  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center" , height:"90vh",}}>
      {verified ? (
        <div>
          <h1>Authenticated</h1>
          {/* Render your authenticated content here */}
        </div>
      ) : (
        <h1>Not Authenticated</h1>
      )}
    </div>
  )
}

export default DashBoard
