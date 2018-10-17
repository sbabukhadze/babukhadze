const express = require('express');
const path = require("path");
const multer = require("multer")
const mCache = require("memory-cache")


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "/public")));
app.set("views", "./public/views");
app.set("view engine", "pug");


//put ( key, value, time, timeoutCallback)
//get ( key)

mCache.put("super-cache", "wow", 300, function(key, value) {
    console.log(`key - ${key}, value- ${value}`);
})

console.log(`super cache - ${mCache.get("super-cache")}`);

setTimeout( () => {
    console.log(`super cache - ${mCache.get("super-cache")}`);

}, 500)


const multerConfig = multer({
    dest: "public/uploads"
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "upload.html"))
})


//multi-part/form-data
app.post("/", multerConfig.single("image"), (req, res) => {
    const userName = req.body.username;
    const imgUrl = path.join("uploads", req.file.filename);
    res.render("index", { imgUrl, userName });

});



const cachePage = (duration) => {
    return ( req, res, next) => {
        let key = ` __cached__${req.originalUrl || req.url }`;
        let pageBody = mCache.get(key);

        if( pageBody) {
            res.send(pageBody);
        }
        else{
            res.sendResponse = res.send;
            res.send = (body) => {
                mCache.put(key, body, duration* 1000);
                res.sendResponse(body)
            }
            next();
        }

    }
}
app.get("/cache", cachePage(4), (req, res) => {
    setTimeout ( () => {
        const date = new Date();
        let time = `${date.getMinutes()}:${date.getSeconds()}`;
        res.render("cache", {time})
    })
    
});

app.listen(PORT, () => {
    console.log(`Started... PORT - ${PORT}`);
})