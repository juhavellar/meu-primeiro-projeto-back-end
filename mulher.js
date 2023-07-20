const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher (request, response){
    response.json ({
        nome: 'Julia Hertel Avellar',
        image: 'https://media.licdn.com/dms/image/C4E03AQETQ7Tz7phiHg/profile-displayphoto-shrink_800_800/0/1618606409499?e=1695254400&v=beta&t=_aa_64MV4SwAKKAo35sjZ22l08hVGa8jADeM2kcimeE',
        minibio: 'aluna backend'
    })
}

function mostraPorta (){
    console.log("Servidor criado e rodando na porta", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)