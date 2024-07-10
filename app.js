const express = require("express");
const connectToMongo = require("./connection/connection");
const dotEnv = require("dotenv");
const cookieParser = require("cookie-parser");

dotEnv.config();
connectToMongo("mongodb://localhost:27017/Scatch");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const app = express();
app.listen(5000, () => {
  console.log("app is running");
});
