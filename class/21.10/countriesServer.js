const express = require("express");
const path = require("path");
const countries = require("./public/js/countries")
const app = express();

app.use(express.static(path.join(__dirname, 'public/js')));
app.use(express.static(path.join(__dirname, "node_modules/jquery")));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "countries.html"))
})


app.get("/countries/:prefix", (req, res) => {
    if (!req.params.prefix) {
        return res.sendStatus(400)
    }
    let.prefix = req.params.prefix.toUpperCase();
    let result = countries
        .filter(country => country.name.toUpperCase().startsWith(prefix))
        .map(country => country.name);
    res.json(result);

})


app.listen(PORT, () => {
    console.log(`Server Port - ${PORT}`);
})

