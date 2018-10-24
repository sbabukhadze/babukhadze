const savePerson = document.getElementById("save1");
const saveCar = document.getElementById("save2");


savePerson.addEventListener('input', ({ target }) => {

});


saveCar.addEventListener('input', ({ target }) => {

});



let Persons = {
  increment: 1,
  persons: [],

  add: function (person) {
    if (!person.first_name) throw "Person first name is required field";
    if (!person.last_name) throw "Person last name is required field";
    if (!person.personal_no) throw "Person personal number is required field";

    person.id = this.increment++;

    this.persons.push(person);
  },


  update: function (person) {
    let p = this.getPersonById(person.id);
    if (!p) throw "Person not found";

    if (person.first_name) p.first_name = person.first_name;
    if (person.last_name) p.last_name = person.last_name;
    if (person.personal_no) p.personal_no = person.personal_no;
    if (person.mid_name) p.mid_name = person.mid_name;
    if (person.birth_date) p.birth_date = person.birth_date;
  },

  getPersonById: function (id) {
    for (let i = 0; i < this.persons.length; i++) {
      let person = this.persons[i];

      if (person.id === id) {
        return person;
      }
      
    }
    return null;
  },

  find: function (options) {
    let results = [];

    for (let i = 0; i < this.persons.length; i++) {
      let person = this.persons[i];
      let match = true;

      for (let key in options) {
        let value = options[key];

        if (!value) continue;

        let v1 = person[key] ? person[key].toLowerCase() : '';
        let v2 = value ? value.toLowerCase() : '';

        if (v1 !== v2) {
          match = false;
        }
      }

      if (match) {
        results.push(person);
      }
    }

    return results;
  }
};

let Vehicles = {
  increment: 1,
  vehicles: [],

  add: function (vehicle) {
    if (!vehicle.plate_number) throw "Vehicle plate number is required field";
    if (!vehicle.vin) throw "Vehicle VIN code is required field";
    if (!vehicle.owner_id) throw "Vehicle owner is required field";


    vehicle.id = this.increment++;
    // vehicle.active = true;
    vehicle.old_owner_ids = [];

    this.vehicles.push(vehicle);
  },

  update: function (vehicle) {
    let v = this.getVehicleById(vehicle.id);
    if (!v) throw "Vehicle not found";



    if (vehicle.make) v.make = vehicle.make;
    if (vehicle.model) v.model = vehicle.model;
    if (vehicle.plate_number) v.plate_number = vehicle.plate_number;
    if (vehicle.vin) v.vin = vehicle.vin;
    if (vehicle.color) v.color = vehicle.color;


    let person = Persons.getPersonById(vehicle.owner_id);
    if (!person) throw "Owner not found";

    v.old_owner_ids.push(v.owner_id);
    v.owner_id = vehicle.owner_id;
  },

  getVehicleById: function (id) {
    for (let i = 0; i < this.vehicles.length; i++) {
      let vehicle = this.vehicles[i];

      if (vehicle.id === id) {
        return vehicle;
      }
    }

    return null;
  },

  find: function (options) {
    let results = [];

    for (let i = 0; i < this.vehicles.length; i++) {
      let vehicle = this.vehicles[i];
      let match = true;

      for (let key in options) {
        let value = options[key];

        if (!value) continue;

        let v1 = vehicle[key] ? vehicle[key].toLowerCase() : '';
        let v2 = value ? value.toLowerCase() : '';

        if (v1 !== v2) {
          match = false;
        }
      }

      if (match) {
        results.push(vehicle);
      }
    }

    return this.withRelations(results);
  },

  withRelations: function (vehicles) {
    let results = [];

    for (let i = 0; i < vehicles.length; i++) {
      let vehicle = vehicles[i];
      vehicle.owner = Persons.getPersonById(vehicle.owner_id);

      vehicle.old_owners = [];
      for (let j = 0; j < vehicle.old_owner_ids.length; j++) {
        let old_owner_id = vehicle.old_owner_ids[j];
        vehicle.old_owners.push(Persons.getPersonById(old_owner_id));
      }

      results.push(vehicle);
    }

    return results;
  }
};
