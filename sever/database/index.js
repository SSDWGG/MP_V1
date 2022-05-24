const mysql = require('mysql')


// 创建链接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    port: '3306',
    database: '',
    charset: 'utf8mb4' //字符集一定要写，否则表情包存储不了
})

// 开始链接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec,
}