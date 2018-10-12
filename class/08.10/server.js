const express = require("express");
const path = require("path");
const App = express();

const products = require("./src/routes/productRoutes")

const PORT = 3000;

let productsDB = [];


App.set("views", "./src/views");
App.set("view engine", "pug");

App.use(express.static( path.join(__dirname, "public") )  );
App.use(express.urlencoded({ extended: true } ) );
App.use("/products", products);



App.get("/", (req, res) =>{
    res.render("index", {title: "Demo Title", added: false, productsDB});
})


App.post("/", (req, res) => {
    const { product_name, product_price, product_id}= req.body;
    productsDB.push( {product_id, product_name, product_price } );
    res.render("index", {title: "Demo Title", added: true, productsDB });

})

App.listen(PORT, ()=> {
    console.log(`Server Port - $(PORT)`);
})

