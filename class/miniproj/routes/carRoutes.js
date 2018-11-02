
const Router = require('express').Router;
const PersonDB = require('../database/person');
const CarDB = require('../database/car');
// const person = require('./PersonRoutes');

const router = Router();
let allCars= CarDB.list;



router.get("/", (req, res) => {
    res.render("car/carList", { title: "Avaible Cars", added: false, allCars});

})

router.get("/add", (req, res) => {
    res.render("car/addCar", { title: "Add a Car", added: false});
});


router.post("/add", (req, res) => {
    CarDB.add(req.body);
    res.redirect('/cars');
  });

//   router.get("/edit/:id", (req, res) => {
//     var person = PersonsDB.getPersonById(req.params.id);
//     res.render("person/editPerson", { title: "Edit a Person", added: false, person});
// });

// router.post("/edit/:id", (req, res) => {
//     PersonsDB.update(req.body);
//     var person = PersonsDB.getPersonById(req.params.id);
//     res.render("person/editPerson", { title: "Edit a Person", added: false, person});
// });


module.exports.router = router;
