const jwt = require("jsonwebtoken")
// const secretKey = "jsfbijsgfsguyfscuvsuasgdfuywfsb";

const authMiddleware =(req,res,next)=>{
    const bearer =  req.headers["authorization"]
    
   if(bearer === undefined){
    return res.send({msg : " no token "})
   }
   const token = bearer.split(" ")[1]
    if(token === undefined){
        return res.send({msg : "user not Authoried or Session Expired"})
    }
    // secretkey coming from env file
    const validate = jwt.verify(token, process.env.secretKey)
    if(validate){
      return next()
    }
    else{
        return res.send({msg : "user not Authoried or session is Expired"})
    }
   }

module.exports = authMiddleware




 /*  Send 

headers :{
    "authorization" : `bearer ${token}`
}

*/





/* 

## How we Can send the response to backend with token ;

axios.get("URL",{
    headers :{
        "authorization" : `bearer ${token}`
    }
})

*/