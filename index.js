const  express = require ("express")

const app = express()

app.get('/', (request, response) => {
    response.send("Hola GET")
})

app.get('/', (request, response) => {
    response.send("Hola POST")
})

app.get('/', (request, response) => {
    response.send("PUT")
})

app.get('/', (request, response) => {
    response.send("Hola PATCH")
})

app.get('/', (request, response) => {
    response.send("Hola DELETE")
})

//http://localhost:3000
app.listen(3000, () => {
    console.log("listen on port 3000")
})