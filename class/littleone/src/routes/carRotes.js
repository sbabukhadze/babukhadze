
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

})