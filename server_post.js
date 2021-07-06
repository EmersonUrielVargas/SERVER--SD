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


app.post("/frutas",(req,res) => {
    for(var i = 0; i < (req.body).length; i++){
        frutas.push(req.body[i])
    }
    res.send(frutas)
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:5000')
})
