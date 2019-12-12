const express = require('express') 
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const routes = require("./routes")
const app = express() 
const port = 3000 

//database
mongoose.connect("mongodb://localhost/cat_tracker_api_practice", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => console.log(error));

//view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' })) 
app.set('view engine', 'handlebars') 

//data format
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.use(routes)

app.listen(port, () => console.log(`Server listening on port ${port}!`))