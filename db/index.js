import mysql from 'mysql'
const db = mysql.createConnection({
    database: 'RentalAccount',
    user: 'root',
    password: 'admin123',
    host: '127.0.0.1',

})

export default db