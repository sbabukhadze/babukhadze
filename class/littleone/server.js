const express = require("express");
const path = require("path");
const App = express();

const person = require("./src/routes/personRoutes")
const car = require("./src/routes/carRoutes")

const PORT = 3000;

let personDB = [];
let carDB = [];


App.set("views", "./src/views");
App.set("view engine", "pug");

App.use(express.static( path.join(__dirname, "public") )  );
App.use(express.urlencoded({ extended: true } ) );
App.use("/person", person);
App.use("/car", car);



App.get("/", (req, res) =>{
    res.render("person", {title: "Demo Title", added: false, personDB});
    res.render("car", {title: "Demo Title", added: false, carDB});
})


App.post("/", (req, res) => {
    // const { product_name, product_price, product_id}= req.body;
    // productsDB.push( {product_id, product_name, product_price } );
    // res.render("index", {title: "Demo Title", added: true, productsDB });

})

App.listen(PORT, ()=> {
    console.log(`Server Port - $(PORT)`);
})

