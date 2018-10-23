const express = require("express");
const path = require("path");
const app = express();

const person = require("./src/routes/personRoutes")
const car = require("./src/routes/carRoutes")

const PORT = process.env.PORT || 3000;

let personDB = [];
let carDB = [];


app.set("views", "./src/views");
app.set("view engine", "pug");

app.use(express.static( path.join(__dirname, "public") )  );
app.use(express.urlencoded({ extended: true } ) );
// app.use("/person", person);
// app.use("/car", car);
app.use("/main");



// app.get("/", (req, res) =>{
//     res.render("person", {title: "Demo Title", added: false, personDB});
//     res.render("car", {title: "Demo Title", added: false, carDB});
// })

app.get("/", (req, res) =>{
        res.render("data", {title: "Demo Title", added: false, personDB });
      
    })


app.post("/", (req, res) => {
    const { product_name, product_price, product_id}= req.body;
    productsDB.push( {product_id, product_name, product_price } );
    res.render("index", {title: "Demo Title", added: true, productsDB });

})



app.listen(PORT, ()=> {
    console.log(`Server Port - ${PORT}`);
})

