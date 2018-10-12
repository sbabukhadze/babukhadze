const express = require('express');
const cookieParser = require("cookie-parser")

const app = express();
const PORT = 3000;

app.use(cookieParser("cipher"));
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.cookie("username", "salome");
    res.cookie("cart", { items: [1, 2, 3] });
    // res.cookie("forever", 1, { expire: Date.now() + 6000});
    res.cookie("forever", "forever value", { maxAge: 6000 });

    res.cookie("signed", "random text", {signed: true});

    res.send("hello");
})

app.get("/cookies", (req, res) => {
    res.write(`<h1> username : ${req.cookies.username} <h1/> `);
    res.write(`<h1> forever : ${req.cookies.forever} <h1/>`);
    res.write(`<h1> cart : ${req.cookies.cart.items.join("-")} <h1/>`);
    res.write(`<h1> signed : ${req.signedCookies["signed"]} <h1/>`)
    res.end();
});

app.get("/clear", (req, res) => {
 res.clearCookie("cart");
 res.clearCookie("username");
 res.send("cookies has been removed")
})


app.listen(PORT, () => {
    console.log(`Server Port - $(PORT)`);
})

