// console.log("Hii")

// person = 'Keval'
// character = {
//     name: person,
//     age: 23,
// }

// console.log(person)
// console.log(character)

// const { response, request } = require('express')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())



app.use(express.static('./public'));

const router_user = require('./routes/user.js')
app.use(router_user)

app.get('/', (request, response) => {
    response.send('Welcome')
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