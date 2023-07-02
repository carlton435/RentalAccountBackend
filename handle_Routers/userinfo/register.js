
import db from '../../db/index.js'
import jwt from 'jsonwebtoken'

export default async function registerUser(req, res) {
    const { username, password, avatar, description } = req.query
    const data = { username, password }
    if (!username) {
        return res.json({
            status: 0,
            message: 'lose the username',
        })
    }
    if (!password) {
        return res.json({
            status: 0,
            message: 'lose the password',
        })
    }

    const token = await jwt.sign(data, 'chunchun')
    const createSql = 'INSERT INTO userinfo (username,password,token,description,avatar) value(?,?,?,?,?) '
    console.log(token);
    db.query(createSql, [username, password, token, description, avatar], (err, result) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'cannot add the userinfo',
                data: err
            })
        }

        res.json({
            status: 1,
            message: 'insert success',
            data: { token, username, description, avatar }
        })
    })


}