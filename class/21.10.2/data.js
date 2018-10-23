var Persons = {
    increment: 1,
    persons: [],
  
    add: function(person) {
      if(!person.first_name) throw "Person first name is required field";
      if(!person.last_name) throw "Person last name is required field";
      if(!person.personal_no) throw "Person personal number is required field";
  
      var res = this.find({ personal_no: person.personal_no });
      if(res.length) throw "This personal number is already used";
  
      person.id = this.increment++;
      person.active = true;
  
      this.persons.push(person);
    },
  
    getAll: function() {
      return this.persons;
    },
  
    getActivePersons: function() {
      var results = [];
  
      for(var i = 0; i < this.persons.length; i++) {
        var person = this.persons[i];
        if(person.active) {
          results.push(person);
        }
      }
  
      return results;
    },
  
    enable: function(person) {
      var p = this.getPersonById(person.id);
      if(!p) throw "Person not found";
  
      p.active = true;
    },
  
    disable: function(person) {
      var p = this.getPersonById(person.id);
      if(!p) throw "Person not found";
  
      p.active = false;
    },
  
    update: function(person) {
      var p = this.getPersonById(person.id);
      if(!p) throw "Person not found";
  
      if(person.personal_no) {
        var res = this.find({personal_no: person.personal_no});
        // If personal number matched other than this person
        if (res.length && res[0].id !== person.id) throw "This personal number is already used";
      }
  
      if(person.first_name) p.first_name = person.first_name;
      if(person.last_name) p.last_name = person.last_name;
      if(person.personal_no) p.personal_no = person.personal_no;
      if(person.mid_name) p.mid_name = person.mid_name;
      if(person.birth_date) p.birth_date = person.birth_date;
    },
  
    getPersonById: function(id) {
      for(var i = 0; i < this.persons.length; i++) {
        var person = this.persons[i];
  
        if(person.id === id) {
          return person;
        }
      }
  
      return null;
    },
  
    find: function (options) {
      var results = [];
  
      for(var i = 0; i < this.persons.length; i++) {
        var person = this.persons[i];
        var match = true;
  
        for(var key in options) {
          var value = options[key];
  
          if(!value) continue;
  
          var v1 = person[key] ? person[key].toLowerCase() : '';
          var v2 = value ? value.toLowerCase() : '';
  
          if(v1 !== v2) {
            match = false;
          }
        }
  
        if(match) {
          results.push(person);
        }
      }
  
      return results;
    }
  };
  
  var Vehicles = {
    increment: 1,
    vehicles: [],
  
    add: function(vehicle) {
      if(!vehicle.plate_number) throw "Vehicle plate number is required field";
      if(!vehicle.vin) throw "Vehicle VIN code is required field";
      if(!vehicle.owner_id) throw "Vehicle owner is required field";
  
      var res = this.find({ plate_number: vehicle.plate_number });
      if(res.length) throw "This plate number is already used";
  
      vehicle.id = this.increment++;
      vehicle.active = true;
      vehicle.old_owner_ids = [];
  
      this.vehicles.push(vehicle);
    },
  
    getAll: function() {
      return this.withRelations(this.vehicles);
    },
  
    getActiveVehicles: function() {
      var results = [];
  
      for(var i = 0; i < this.vehicles.length; i++) {
        var vehicle = this.vehicles[i];
        if(vehicle.active) {
          results.push(vehicle);
        }
      }
  
      return this.withRelations(results);
    },
  
    enable: function(vehicle) {
      var v = this.getVehicleById(vehicle.id);
      if(!v) throw "Vehicle not found";
  
      v.active = true;
    },
  
    disable: function(vehicle) {
      var v = this.getVehicleById(vehicle.id);
      if(!v) throw "Vehicle not found";
  
      v.active = false;
    },
  
    update: function(vehicle) {
      var v = this.getVehicleById(vehicle.id);
      if(!v) throw "Vehicle not found";
  
      if(vehicle.plate_number) {
        var res = this.find({ plate_number: vehicle.plate_number });
        // If plate number matched other than this vehicle
        if(res.length && res[0].id !== vehicle.id) throw "This plate number is already used";
      }
  
      if(vehicle.make) v.make = vehicle.make;
      if(vehicle.model) v.model = vehicle.model;
      if(vehicle.plate_number) v.plate_number = vehicle.plate_number;
      if(vehicle.vin) v.vin = vehicle.vin;
      if(vehicle.color) v.color = vehicle.color;
  
      if(vehicle.owner_id && v.owner_id !== vehicle.owner_id) {
        var person = Persons.getPersonById(vehicle.owner_id);
        if(!person) throw "Owner not found";
  
        v.old_owner_ids.push(v.owner_id);
        v.owner_id = vehicle.owner_id;
      }
    },
  
    getVehicleById: function(id) {
      for(var i = 0; i < this.vehicles.length; i++) {
        var vehicle = this.vehicles[i];
  
        if(vehicle.id === id) {
          return vehicle;
        }
      }
  
      return null;
    },
  
    find: function (options) {
      var results = [];
  
      for(var i = 0; i < this.vehicles.length; i++) {
        var vehicle = this.vehicles[i];
        var match = true;
  
        for(var key in options) {
          var value = options[key];
  
          if(!value) continue;
  
          var v1 = vehicle[key] ? vehicle[key].toLowerCase() : '';
          var v2 = value ? value.toLowerCase() : '';
  
          if(v1 !== v2) {
            match = false;
          }
        }
  
        if(match) {
          results.push(vehicle);
        }
      }
  
      return this.withRelations(results);
    },
  
    withRelations: function(vehicles) {
      var results = [];
  
      for(var i = 0; i < vehicles.length; i++) {
        var vehicle = vehicles[i];
        vehicle.owner = Persons.getPersonById(vehicle.owner_id);
  
        vehicle.old_owners = [];
        for(var j = 0; j < vehicle.old_owner_ids.length; j++) {
          var old_owner_id = vehicle.old_owner_ids[j];
          vehicle.old_owners.push(Persons.getPersonById(old_owner_id));
        }
  
        results.push(vehicle);
      }
  
      return results;
    }
  };
  
  Persons.add({ first_name: 'Nika', last_name: 'Kapanadze', personal_no: '12345678910', mid_name: 'Giorgi', birth_date: '10/10/1987' });
  Persons.add({ first_name: 'Ana', last_name: 'Jobava', personal_no: '12345678911', mid_name: 'Davit', birth_date: '22/09/1988' });
  Persons.add({ first_name: 'Levan', last_name: 'Kvaratskhelia', personal_no: '12345678912', mid_name: 'Akaki', birth_date: '12/09/1982' });
  
  
  Vehicles.add({ make: 'BMW', model: 'M5', plate_number: 'LI555KE', vin: '2654546', color: 'Red', owner_id: 1 });
  Vehicles.add({ make: 'Opel', model: 'Corsa', plate_number: 'AA222AA', vin: '445465456', color: 'Blue', owner_id: 2 });
  Vehicles.add({ make: 'Mitsubishi', model: 'Pajero', plate_number: 'XX777AA', vin: '2131213', color: 'Bronze', owner_id: 2 });
  Vehicles.update({owner_id: 3, id:3 });