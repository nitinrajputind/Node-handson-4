const route = require('express').Router();
const { register, login } = require('../Controller/UserController');
const {DashBoard, profile} = require('../Controller/DashBoard');
const authMiddleware = require('../middleware/userAuth');

// Registration Api 
route.post("/register", register)

// Login Api
route.post("/login", login)

// DashBoard Api 
route.get("/dashBoard", authMiddleware, DashBoard )

// Profile Api 
route.get("/profile",authMiddleware, profile)


module.exports = route ;