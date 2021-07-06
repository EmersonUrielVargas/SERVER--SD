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

app.delete("/frutas",(req,res) => {
    res.sendFile(__dirname + '/document.html')
    position = req.query.position
    if(position >= 0 && position<= 9){
        frutas.splice(position,1)
        res.send(frutas)
    }else{
        
    }
})

app.listen(port, () => {
    console.log('Example app listening at http://localhost:5000')
})
