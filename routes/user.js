const express = require('express')
const router = express.Router()

module.exports = router

const users = [
    {first_name : 'Keval', last_name: 'Doe', age: 23},
    {first_name : 'Doe', last_name: 'Doe', age: 48},

]

router.get('/user', (request, response) => {
    response.json(users)
    // response.status(501).json({
    //     msg: 'Not implemented',
    //     type: 'custom-alert'
    // })
    //or
    // response.sendStatus(501);
    //or
    // response.status(501).end()

})

router.get('/user/:id', (request, response) => {
    console.log(request.params)
    const {id} = request.params
    response.json(users[id])
    
})

router.post('/user', (request, response) => {
    console.log(request.body)
    const {first_name, last_name, age} = request.body
    users.push({first_name, last_name, age})
    response.end()
    
})

router.delete('/user/:id', (request, response) => {
    console.log(request.params)
    const {id} = request.params
    users.splice(id,1)
    // response.json(users[id])
    response.end()
    
})