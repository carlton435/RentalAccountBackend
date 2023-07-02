import express from "express";
const route = express.Router()
import registerUser from './handle_Routers/userinfo/register.js'
import loginUser from './handle_Routers/userinfo/login.js'
import changeUserInfo from './handle_Routers/userinfo/changeinfo.js'
import getUserInfo from './handle_Routers/userinfo/getinfo.js'

route.post('/register', registerUser)
route.post('/login', loginUser)
route.post('/changeinfo', changeUserInfo)
route.get('/getinfo', getUserInfo)


export default route