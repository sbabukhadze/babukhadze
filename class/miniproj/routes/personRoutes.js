const express = require('express');

const Router = require('express').Router;
const PersonsDB = require('../database/person');
const CarsDB = require('../database/car');

const router = Router();

router.get("/", (req, res) => {
    let params = req.query;
    let persons = PersonsDB.find(params);
    res.render("person/personList", { title: "Available Persons", added: false, persons, params});
});

router.get("/add", (req, res) => {
    res.render("person/addPerson", { title: "Add a Person", added: false});
});

router.post("/add", (req, res) => {
  PersonsDB.add(req.body);
  res.redirect('/persons');
});

router.get("/cars/:id", (req, res) => {
  var person = PersonsDB.getPersonById(req.params.id);
  var allCars = CarsDB.getCarsByOwner(person.id);
  res.render("car/carList", { title: "Cars by " + person.firstName + ' ' + person.lastName, added: false, allCars});
});

router.get("/edit/:id", (req, res) => {
    var person = PersonsDB.getPersonById(req.params.id);
    res.render("person/editPerson", { title: "Edit a Person", added: false, person});
});

router.post("/edit/:id", (req, res) => {
    PersonsDB.update(req.body);
    var person = PersonsDB.getPersonById(req.params.id);
    res.render("person/editPerson", { title: "Edit a Person", added: false, person});
});



module.exports.router = router;



