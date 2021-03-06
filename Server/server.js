const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/database");

const userRoutes = require("./routes/api/user");

mongoose.connect(config.database);

mongoose.connection.on("connected", () => {
  console.log(`connected to database ${config.database}`);
});
mongoose.connection.on("error", err => {
  console.log(`database connection failed ${err}`);
});

const app = express();

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const port = 5000;

app.get("/sample", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listning to port ${port}`);
});