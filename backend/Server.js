const express = require('express');
const route  = require('./Routes/category');
const dotenv = require("dotenv")
const cors = require("cors")
//  config the Env

dotenv.config()
// Port Come From env file
const PORT = process.env.PORT

// rest object 
const app = express();

// cors 
app.use(cors({
    origin : "*"
}))

// body parser 
app.use(express.json());

// rest Api
app.get("/", (req,res)=>{
    res.send("Welcome to Express Server This is Home Page")
})

// routes
app.use("/api",route)

//PORT
// const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Server is Runing on http://localhost:${PORT}`);
})