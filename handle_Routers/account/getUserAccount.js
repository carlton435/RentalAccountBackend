
import db from '../../db/index.js'

export default function getAccount(req, res) {
    const { username } = req.query
    const getdata = 'select * from account where username=?'
    db.query(getdata, username, (err, result) => {
        if (err) {
            return res.json({
                status: 0,
                message: 'get data fail'
            })
        }

        const changeResult = result.map((account) => {
            delete account.accPassword;
            return account;
        });

        res.json({
            status: 1,
            message: 'get data success',
            data: changeResult
        })
    })
}