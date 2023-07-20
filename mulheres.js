const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    { 
        nome: 'Simara Conceição',
        image: 'blblblblblbbllbb',
        minibio: 'dev e instrutora'
    },
    {
        nome: 'Iana Chan',
        image: ' blblblblblblbl',
        minibio: 'fundadora prograMaria'
    },
    {
        nome: 'Nina da hora',
        image: 'blblblblblblbl',
        minibio: 'hacker antirascista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta (){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)