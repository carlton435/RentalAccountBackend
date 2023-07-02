
import db from '../../db/index.js'

export default function changeinfo(req, res) {
    const { username, password, avatar, description } = req.query
    const updateInfo = `UPDATE userinfo SET password = ?, description = ?,avatar=? WHERE username=?;`

    db.query(updateInfo, [password, description, avatar, username], (err, result) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'update wrong' + err
            })
        }
        console.log(result);

        res.json({
            status: 1,
            message: 'update success'
        })
    })
}