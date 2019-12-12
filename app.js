//dependencies/packages
const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const routes = require("./routes")
const port = 3000;
const app = express();

//database
mongoose.connect("mongodb://localhost/cat_tracker_api_practice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => console.log(error));

//view engine (handlebars)
app.engine("handlebars", exphbs({ defaultLayout : "main"}));
app.set("view engine", "handlebars");

//data formatting
app.use(express.urlencoded, {extended:false});
app.use(express.json());

//routes
app.use(routes);

//set up listening on port
app.listen(port, () => console.log(`server is listening on port ${port}`));
