
import db from '../../db/index.js'

export default function getinfo(req, res) {
    const { username } = req.query
    const getSql = `select username,description,avatar from userinfo where username=?`

    db.query(getSql, [username], (err, result) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'get detail wrong' + err
            })
        }

        res.json({
            status: 1,
            message: 'get data success',
            data: result[0]
        })
    })

}