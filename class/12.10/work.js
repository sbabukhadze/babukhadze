const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();

const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(cookieParser("cipher"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("work", { color: req.cookies.userColor });
});


app.post("/", (req, res) => {
    res.cookie("color", req.body.userColor);
    res.render("work", { color: req.body.userColor });
})


app.listen(PORT, () => {
    console.log(`Server Port - ${PORT}`);
});




