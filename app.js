const express = require("express");
const app = express();
const qrcode = require("qrcode");


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/", (req, res) => {
    res.render("index");
});


app.post("/scan", (req, res) => {
    const url = req.body.url;

    if (url.length === 0) res.send("Empty Data!");

    
    qrcode.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
      
        res.render("scan", { src });
    });
});


const port = 3000;
app.listen(port, () => console.log("Server at 3000"));