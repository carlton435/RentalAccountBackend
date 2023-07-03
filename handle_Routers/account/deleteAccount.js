
import db from '../../db/index.js'

export default function deleteAccount(req, res) {
    const { account } = req.query
    const deleteSql = 'delete from account where account=?'

    db.query(deleteSql, account, (err, result) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'delete wrong' + err,
            })
        }
        res.json({
            status: 1,
            message: 'delete success'
        })

    })

}