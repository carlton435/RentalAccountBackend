import express from "express";
import cors from 'cors'
const app = express()
import route from './router.js'

app.use(cors())

app.use('/api', route)

app.listen(8080, () => {
    console.log('https://127.0.0.1:8080');
})