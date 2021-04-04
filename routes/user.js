const express = require('express')
const router = express.Router()

const mysql = require('mysql')

function getNewConnection() {
    return mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: '202101-IM215-REST',
    })
}


const users = [
    {first_name : 'Keval', last_name: 'Doe', age: 23},
    {first_name : 'Doe', last_name: 'Doe', age: 48},

]

router.get('/user', (request, response) => {
    
    const connection = getNewConnection();
    const queryString = 'Select * FROM user'
    
    connection.query(queryString, (err, rows, fields) => {
        if (err != null) {
            console.error(err)
            response.sendStatus(500);
        } else{
            response.json(rows);
        }
    })
    
    
    
    
    
    
    

    
    // response.json(users)
    // // response.status(501).json({
    // //     msg: 'Not implemented',
    // //     type: 'custom-alert'
    // // })
    // //or
    // // response.sendStatus(501);
    // //or
    // // response.status(501).end()

})

router.get('/user/:id', (request, response) => {
    console.log(request.params)
    const {id} = request.params
    
    const connection = getNewConnection();
    const queryString = `Select * FROM user WHERE id = ${id}`
    
    connection.query(queryString, (err, rows, fields) => {
        if (err != null) {
            console.error(err)
            response.sendStatus(500);
        } else{
            response.json(rows[0]);
        }
    })

    //response.json(users[id])
    
})


router.post('/user', (request, response) => {

    const {first_name, last_name, age} = request.body
    const queryString = `INSERT INTO user VALUES (NULL,  '${first_name}', '${last_name}', ${age} )`

    const connection = getNewConnection()
    connection.query(queryString, (err, result, fields) => {
        console.log('Got a response from DB server')
        if (err!= null) {
            console.error(err)
            response.sendStatus(500);
        } else {
            console.log(result)
            response.json({id: result.insertId})
        }
    })
    
    // console.log(request.body)
    // const {first_name, last_name, age} = request.body
    // users.push({first_name, last_name, age})
    // response.end()
    
})

router.delete('/user/:id', (request, response) => {
    console.log(request.params)
    const {id} = request.params
    users.splice(id,1)
    // response.json(users[id])
    response.end()
    
})

module.exports = router
