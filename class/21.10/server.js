const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules/jquery")));
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.render("index.html");
})

app.get("/add", (req, res) => {
    if (!req.query.num_1 || !req.query.num_2) {
        res.sendStatus(400);
    }
    let num_1 = Number(req.query.num_1);
    let num_2 = Number(req.query.num_2);
    let result = num_1 + num_2;

    setTimeout( () => {
        res.send(result.toString());
    }, 2000)

})



app.listen(PORT, () => {
    console.log(`Server Port - $(PORT)`);
})
