
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


