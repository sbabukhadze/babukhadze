const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app     = express();
const PORT = process.env.PORT || 3000;

app.use( cookieParser() );
app.use( session());


app.get("/", (req, res) => {
   
})

app.listen(PORT, () => {
    console.log(`Started... PORT - ${PORT}`);
})