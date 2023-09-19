
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Asign Array to Store the Data
let arr = [];

// Saltround
const saltround = 10;

//secretKey
const secretKey = "jsfbijsgfsguyfscuvsuasgdfuywfsb";


// Register Api 

const register = async (req, res) => {
  const details = req.body;
  console.log(details);

  const find = arr.find((item) => details.email === item.email);
  if (find) {
    res.send({ msg: "user have already registered" });
  } else {
    // Genrate Random string by bcrypt
    const generate = await bcrypt.genSalt(10);
    console.log(generate);

    // Bcrypt the password
    // We can make Async and await or hashSync
    const Hashpasword = await bcrypt.hashSync(details.password, saltround);
    const temp = {
      email: details.email,
      password: Hashpasword,
    };
    arr.push(temp);

    const token = jwt.sign({ email: details.email }, process.env.secretKey, {
      expiresIn: process.env.expiresIn,
    });
    res.send({ msg: "user is registered", result: arr, JWTtoken: token });
  }
};


// login Api
const login = async (req, res) => {
  // date store form request
  const details = req.body;

  // compare emails is exist in database or not
  const find = arr.find((item) => details.email === item.email);
  if (!find) {
    return res.send({ msg: "user is not registered" });
  }
  // compare the password if emails is found
  const validate = await bcrypt.compare(details.password, find.password);
  //   if condition is false they return pass is incorrect
  if (!validate) {
    return res.send({ msg: "Your Password is incorrect" });
  }
  const token = jwt.sign({ email: details.email }, secretKey, {
    expiresIn: "3600",
  });
  //   if pass ans email is correct then return user is login successfully
  return res.status(200).send({ msg: "user is login in successfully", JWTtoken : token});
};

module.exports = { register, login };
