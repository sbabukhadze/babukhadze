const express = require("express");
const router = express.Router();

let products = [
    {price: 1000222222222, title: "Apple", id: 0},
    {price: 970444444444, title: "Google", id: 1},
    {price: 700222222222, title: "Nokia", id: 2}
]

router.get("/", (req, res) => {
    res.render("products/index", { title: "Products Page", products} );
})

router.get("/:id(\\d)", (req, res) => {
    let id = req.params.id;
    res.render("products/detail", {title: `product - ${id}`, product: products[id]});

})

router.get("/add", (req, res) => {
    res.json({ message : "Product  Add Page"});
})


module.exports = router;