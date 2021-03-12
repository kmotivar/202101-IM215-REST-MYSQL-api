// console.log("Hii")

// person = 'Keval'
// character = {
//     name: person,
//     age: 23,
// }

// console.log(person)
// console.log(character)

const express = require('express')

const app = express()

app.get('/', (request, response) => {
    console.log('Request Received')
    // response.send('Welcome');
    response.json({msg: 'Welcome'});
})

app.listen(3333, () => {
    console.log("The server is up and listening on port 3333")
})