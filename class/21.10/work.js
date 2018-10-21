const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    // res.render("primes.html");
    res.sendFile(path.join(__dirname, "public", "primes.html"))
})

app.get("/add", (req, res) => {
    function test_prime(n)
    {
    
      if (n===1)
      {
        return false;
      }
      else if(n === 2)
      {
        return true;
      }else
      {
        for(var x = 2; x < n; x++)
        {
          if(n % x === 0)
          {
            return false;
          }
        }
        return true;  
      }
    }

    setTimeout( () => {
        res.send(result.toString());
    }, 2000)

})


app.listen(PORT, () => {
    console.log(`Server Port - $(PORT)`);
})
