const express = require("express");
const path = require("path");

const MoviesController = require("./routes/MoviesController");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.use("/api/v1", MoviesController);


app.get("/", (req, res) => {
    res.sendfile( path.join(__dirname, "/public", "index.html"));
})
app.listen(3000)

