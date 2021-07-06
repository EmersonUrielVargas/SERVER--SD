const express = require('express')
const app = express()
const port = 5000
let frutas = ["Fresa", "Manzana", "Pera", "Papaya", "Durazno", "Naranja", "Mandarina", "Uva", "Granadilla", "Mango"]

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/document.html')
    position = req.query.size
    if(position >= 0 && position<= 9){
        msg = frutas[position]
        res.send("<h2>Ha seleccionado la fruta :</h2>"+ msg +"</h2>")
        res.send(frutas)
    }else{
        
    }
})


app.get("/5",(req,res) => {
    res.send("<h2>Ha seleccionado la fruta :</h2>")
    console.log(req.query)
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:5000')
})