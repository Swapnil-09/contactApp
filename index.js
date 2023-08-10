const express = require("express");
const port = 5000;
const app = express();

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/", require("./route"));

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
    console.log(`App listening on port number ${port}`);
});