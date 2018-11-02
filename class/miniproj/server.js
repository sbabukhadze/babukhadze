const express = require("express");
const path = require("path");
const app = express();

const CarController = require('./routes/carRoutes');
const PersonController = require('./routes/personRoutes');


const PORT = process.env.PORT || 3000;


app.set("views", "./views");
app.set("view engine", "pug");


app.use(express.static( path.join(__dirname, "public") )  );
app.use(express.urlencoded({ extended: true } ) );

app.use('/cars', CarController.router);
app.use('/persons', PersonController.router);


app.get('/', (req, res) => {
    res.render('index', { title: "Welcome to the world's best purchasing site for cars" }); 
    
});


app.listen(PORT, ()=> {
    console.log(`Server Port - ${PORT}`);
})

