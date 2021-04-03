// console.log("Hii")

// person = 'Keval'
// character = {
//     name: person,
//     age: 23,
// }

// console.log(person)
// console.log(character)

const { response, request } = require('express')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));

const users = [
    {first_name : 'Keval', last_name: 'Doe', age: 23},
    {first_name : 'Doe', last_name: 'Doe', age: 48},

]

app.get('/', (request, response) => {
    response.send('Welcome')

})

app.get('/user', (request, response) => {
    response.json(users)

})

app.get('/user/:id', (request, response) => {
    console.log(request.params)
    const {id} = request.params
    response.json(users[id])
    
})

app.post('/user', (request, response) => {
    console.log(request.body)
    const {first_name, last_name, age} = request.body
    users.push({first_name, last_name, age})
    response.end()
    
})

app.delete('/user/:id', (request, response) => {
    console.log(request.params)
    const {id} = request.params
    users.splice(id,1)
    // response.json(users[id])
    response.end()
    
})



// app.get('/', (request, response) => {
//     //console.log('Request Received')
//     // response.send('Welcome');
//     // response.json({msg: 'Welcome'});

//     /* 
//         Types of Parameters:
//         * Query param1=val1&param2=val2
//         * Route localhost:3333/name/val1/age/val2/birthday/val3...
//         * Body param1=val1&param2=val2 (if using form)
//     */

//     // Query
//     // console.log("Query parameters")
//     // console.log(request.query)

//     // Route
//     // this is different...use
//     // app.get('/:first_name/:last_name/:age', (request, response) => {
//     //         console.log("route parameters")
//     //         console.log(request.params)
//     //         response.end()
//     //     })

//     // Body 
//     // console.log('Body parameters')
//     console.log(request.body)

//     response.end()

// })

// for route parameter
// app.get('/:first_name/:last_name/:age', (request, response) => {
//             console.log(request.params)
//             response.end()
//         })

//all together
// app.get('/id/:user', (request, response) => {

//     console.log("GET METHOD")
//     console.log('Body parameters')
//     console.log(request.body)

//     console.log("Query parameters")
//     console.log(request.query)

//     console.log("route parameters")
//     console.log(request.params)
//     response.end()
// })



//POST METHOD
// app.post('/id/:user', (request, response) => {

//     console.log("POST METHOD")
//     console.log('Body parameters')
//     console.log(request.body)

//     console.log("Query parameters")
//     console.log(request.query)

//     console.log("route parameters")
//     console.log(request.params)
//     response.end()
// })

app.listen(3333, () => {
    console.log("The server is up and listening on port 3333")
})