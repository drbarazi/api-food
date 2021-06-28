const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./app/config/db.config.js");

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// include application routes
require("./app/routes/food.routes.js")(app);

// Create & Listen Server
const server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Application request listening at http://%s:%s", host, port);
});
