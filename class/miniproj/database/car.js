class Car {
    constructor(car_maker, model, plate_number, VIN, color, owner_id, id) {
        this.carmaker = car_maker;
        this.model = model;
        this.plateNumber = plate_number;
        this.vin = VIN;
        this.color = color
        this.owner = owner_id;
        this.id = id;
    }
}

let cars = [
    new Car('BMW', 'M5', 'LI555KE', '2654546', 'Red', 1, 1),
    new Car('Opel', 'Corsa', 'AA222AA', '445465456', 'Blue', 1, 2),
    new Car('Mitsubishi', 'Pajero', 'XX777AA', '2131213', 'Bronze', 2, 3)
];

function getCarsByOwner(ownerId) {
    let results = [];

    for(let i = 0; i < cars.length; i++) {
        if(cars[i].owner == ownerId) {
            results.push(cars[i]);
        }
    }

    return results;
}

function add(data) {
    let c = new Car (data.car_maker,  data.model, data.plate_number, data.VIN, data.color, data.owner_id);
    cars.push(c);
}

// function update(data) {
//   var p = getPersonById(data.id);
//   if(!p) throw "Person not found";

//   p.firstName = data.first_name;
//   p.lastName = data.last_name;
//   p.personalNo = data.personal_no;
//   p.middleName = data.mid_name;
//   p.birthDate = data.birth_date;
// }

module.exports = {
  list: cars,
  getCarsByOwner: getCarsByOwner,
//   update: update,
  add: add,
};