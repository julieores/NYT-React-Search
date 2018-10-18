const express = require("express");
const bodyParsar = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./route");
const app = express();
const PORT = process.env.PORT || 27017

app.use(body.bodyParsar.urlencoded({ extended: false }));
app.use(bodyParsar.json());

app.use(express.statis("client/build"));

app.use(routes);

mongoose.Promise = global.Promise

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/nytreact",

    {
        useMongoClient: true

    }
);

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)

});