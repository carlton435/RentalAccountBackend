
import db from '../../db/index.js'

export default function loginUser(req, res) {
    const { username, password, token } = req.query
    if (!username) {
        return res.json({
            status: 0,
            message: 'username cannot be null',
        })
    }
    if (!password) {
        return res.json({
            status: 0,
            message: 'password cannot be null',
        })
    }
    const getuserSql = `select username,password from userinfo where token = ?`
    db.query(getuserSql, [token], (err, result) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'find token wrong' + err
            })
        }
        // console.log(result[0]);
        const { username: checkusername, password: checkuserpassword } = result[0]
        if (checkusername !== username) {
            return res.json({
                status: 0,
                message: 'the username is not current'
            })
        }
        if (checkuserpassword !== password) {
            return res.json({
                status: 0,
                message: 'the password is not current'
            })
        }

        res.json({
            status: 1,
            message: 'login success',
            data: result[0].username
        })
    })

}