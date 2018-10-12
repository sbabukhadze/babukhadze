const express = require('express');
const path = require('path');
const app = express();


const PORT = 3000;
let id = 0;
let products = [
    { name: "Apple", id: id++, price: 4000 },
    { name: "Samsung", id: id++, price: 3500 },
];

let myMid = function(req, res, next){
    console.log(`${req.ip}, ${req.hostname}, Middleware funciton`);
    next();
}

let timeLog = function(req, res, next){
    
    let time = new Date();
    req.requestTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    next();
}

app.use(myMid);
app.use(timeLog);
app.use(express.static(path.join( __dirname, 'public', )))

app.get('/', (req, res) => {
    setTimeout( () => {
        console.log(`Index.html - ${req.requestTime}`);
    }, 3000)
    // res.sendFile( path.join( __dirname, '/public', 'index.html' ) );
    res.sendFile('index.html');
    // res.json({text:"Hello text"});
})

app.get('/calc', (req, res) => {
    let num_1 = parseFloat(req.query.num_1);
    let num_2 =  parseFloat(req.query.num_2);
    let operator = req.query.operation;

    switch(operator){
        case '+':
            res.send(`${num_2 + num_1}`);
        break;
        case '-':
            res.send(`${num_2 - num_1}`);
        break;
        case '*':
            res.send(`${num_2 * num_1}`);
        break;
        case '/':
            res.send(`${num_2 / num_1}`);
        break;
    }
    res.sendFile('calc.html', { root: path.join( __dirname, 'public', )} );
})



app.get('/admin', (req, res) => {
    res.redirect('/');
})




// BAD
// product/add
// product/remove
// product/update



app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    let product = products.find( p => p.id == id);
    if( !product ){
        // return res.status(404).send("No product found");
        return res.sendStatus(404)
    }
    else {
        res.json(product);
    }
})



app.listen(PORT,  () => {
    console.log(`Server on Port - ${PORT}`);
})
