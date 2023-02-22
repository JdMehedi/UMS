require("dotenv").config();
const bodyParser = require("body-parser");
const routes = require("./server/routes/router");
const connectionToDB = require("./server/database/connection");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 2001;
app.use(morgan("tiny"));
app.use(express.json());
//parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));
//set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

// initialize router
app.use(routes);

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/image", express.static(path.resolve(__dirname, "assets/image")));

app.listen(port, async () => {
  await connectionToDB();
  console.log(`The server is running on this http://localhost:${port}`);
});
