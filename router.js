import express from "express";
const route = express.Router()
import registerUser from './handle_Routers/userinfo/register.js'
import loginUser from './handle_Routers/userinfo/login.js'
import changeUserInfo from './handle_Routers/userinfo/changeinfo.js'
import getUserInfo from './handle_Routers/userinfo/getinfo.js'
import createAccount from './handle_Routers/account/addAccount.js'
import deleteAccount from './handle_Routers/account/deleteAccount.js'
import getAccount from './handle_Routers/account/getUserAccount.js'

route.post('/register', registerUser)//register user
route.post('/login', loginUser)//login check the user
route.post('/changeinfo', changeUserInfo)//change the information except the username
route.get('/getinfo', getUserInfo)//get the user info and show on the page

route.post('/createaccount', createAccount)
route.delete('/deleteaccount', deleteAccount)
route.get('/getaccount', getAccount)

export default route