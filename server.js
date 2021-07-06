const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 5000

let frutas = [
    { name: 'Emerson', age: 20},
    { name: 'Manuel', age: 20},
    { name: 'Laura', age: 19},
    { name: 'Nicolas', age: 22},
    { name: 'jorge', age: 32},
    { name: 'Anastacio', age: 42}
];

app.use(express.json());


app.get('/',(req,res) => {
    res.sendFile(__dirname + '/document.html')
    position = req.query.size
    if(position >= 0 && position<= 9){
        msg = frutas[position]
        res.send(frutas[position])
      //res.send("<h2>Ha seleccionado la fruta :</h2>"+ msg +"</h2>")
    }else{
        
    }
})


app.get("/frutas",(req,res) => {
    res.send(frutas)
})

app.post("/frutas",(req,res) => {
    for(var i = 0; i < (req.body).length; i++){
        frutas.push(req.body[i])
    }
    res.send(frutas)
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:5000')
})