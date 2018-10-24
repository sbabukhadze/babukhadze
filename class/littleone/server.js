const express = require("express");
const path = require("path");
const app = express();

// const person = require("./src/routes/personRoutes")
// const car = require("./src/routes/carRoutes")

const PORT = process.env.PORT || 3000;

let personDB = [];
let carDB = [];


app.set("views", "./src/views");
app.set("view engine", "pug");

app.use(express.static( path.join(__dirname, "public") )  );
app.use(express.urlencoded({ extended: true } ) );
<<<<<<< HEAD
=======
// app.use("/person", person);
// app.use("/car", car);
app.use("/main");
>>>>>>> 0a8ab6d9310be8961a87769d27d17cc8237445ba

app.use("/main", main);


<<<<<<< HEAD

let personDB = [
    { first_name: 'Ana', last_name: 'Jobava', personal_no: '12345678911', mid_name: 'Davit', birth_date: '22/09/1988' },
    { first_name: 'Levan', last_name: 'Kvaratskhelia', personal_no: '12345678912', mid_name: 'Akaki', birth_date: '12/09/1982' },
    { first_name: 'Nika', last_name: 'Kapanadze', personal_no: '12345678910', mid_name: 'Giorgi', birth_date: '10/10/1987' }
]



app.get("/", (req, res) =>{
    res.render("data", {title: "title", added: false, personDB });
  
})


app.post("/", (req, res) => {
const { first_name, last_name, personal_no, mid_name, birth_date}= req.body;
personDB.push( {first_name, last_name, personal_no, mid_name, birth_date } );
res.render("data", {title: "title", added: true, personDB });

})




let carDB = [
    { car_maker: 'BMW', model: 'M5', plate_number: 'LI555KE', vin: '2654546', color: 'Red', owner_id: 1 },
    { car_maker: 'Opel', model: 'Corsa', plate_number: 'AA222AA', vin: '445465456', color: 'Blue', owner_id: 2 },
    { car_maker: 'Mitsubishi', model: 'Pajero', plate_number: 'XX777AA', vin: '2131213', color: 'Bronze', owner_id: 3 }

]


app.get("/", (req, res) =>{
    res.render("data", {title: "title", added: false, carDB  });
  
})


app.post("/", (req, res) => {
const { car_maker, model, plate_number, vin, color, owner_id}= req.body;
productsDB.push( {car_maker, model, plate_number, vin, color, owner_id} );
res.render("data", {title: "title", added: true, carDB  });
=======
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
>>>>>>> 0a8ab6d9310be8961a87769d27d17cc8237445ba

})



<<<<<<< HEAD


=======
>>>>>>> 0a8ab6d9310be8961a87769d27d17cc8237445ba
app.listen(PORT, ()=> {
    console.log(`Server Port - ${PORT}`);
})

