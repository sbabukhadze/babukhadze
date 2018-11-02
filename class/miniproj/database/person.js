class Person {
    constructor(first_name, last_name, personal_no, mid_name, birth_date, id) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.middleName = mid_name;
        this.personalNo = personal_no;
        this.birthDate = birth_date;
        this.id = id;
    }
}

let increment = 1;

let persons = [
    new Person('Ana', 'Jobava', '12345678911', 'Davit', '1988-09-22', increment++),
    new Person('Levan', 'Kvaratskhelia', '12345678912', 'Akaki', '1982-10-07', increment++),
    new Person('Nika', 'Kapanadze', '12345678910', 'Giorgi', '1987-10-10', increment++)
];

function getPersonById(id) {
    for ( let i=0; i < persons.length; i++) {
        if (persons[i].id==id) {
            return persons[i];
        }
    }
}

function add(data) {
    let p = new Person(data.first_name, data.last_name, data.personal_no, data.mid_name, data.birth_date, increment++);
    persons.push(p);
}

function update(data) {
  var p = getPersonById(data.id);
  if(!p) throw "Person not found";

  p.firstName = data.first_name;
  p.lastName = data.last_name;
  p.personalNo = data.personal_no;
  p.middleName = data.mid_name;
  p.birthDate = data.birth_date;
}

function find(options) { // {firstName:'', lastName: '', personalNo: ''};
  var results = [];

  for(var i = 0; i < persons.length; i++) {
    var person = persons[i];
    var match = true;

    for(var key in options) {
      var value = options[key];

      if(!value) continue;

      var v1 = person[key] ? person[key].toLowerCase() : '';
      var v2 = value ? value.toLowerCase() : '';

      if(v1 !== v2) { // full text search: v1.search(v2) === -1
        match = false;
      }
    }

    if(match) {
      results.push(person);
    }
  }

  return results;
}

module.exports = {
    list: persons,
    getPersonById: getPersonById,
    update: update,
    add: add,
  find: find,
};