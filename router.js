import express from "express";
const route = express.Router()
import registerUser from './handle_Routers/userinfo/register.js'
import loginUser from './handle_Routers/userinfo/login.js'

route.post('/register', registerUser)
route.post('/login', loginUser)


export default route