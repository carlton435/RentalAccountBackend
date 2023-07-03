
import db from '../../db/index.js'

export default function createAccount(req, res) {
    const { account, accPassword, gamename, username } = req.query
    if (!account && !accPassword) {
        return res.json({
            status: 0,
            message: 'the account and the password cannot be none'
        })
    }
    if (!gamename) {
        return res.json({
            status: 0,
            message: 'the gamename cannot be none'
        })
    }

    const addSql = `INSERT INTO account (account,accPassword,gamename,username) value(?,?,?,?)`
    db.query(addSql, [account, accPassword, gamename, username], (err, reuslt) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'cannot add the account' + err
            })
        }

        return res.json({
            status: 1,
            message: 'add account success',
            data: reuslt
        })
    })
}