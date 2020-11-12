const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const appRoutes = require("./routes/app-router");
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
const multer = require("multer");
const path = require("path");
app.use(express.static(__dirname + "/public"));
app.use(appRoutes);


app.get("/", (req, res) => {
  res.send("<h1>HomePage</h1>");
});

app.listen(PORT, () => console.log(`Server Listening on PORT ${PORT}`));
module.exports = app;
