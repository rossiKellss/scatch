// pacakges import
const express = require("express");
const dotEnv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

// files import
const connectToMongo = require("./connection/connection");
const userRouter = require("./routes/user-router");
const productRouter = require("./routes/product-router");
const ownerRouter = require("./routes/owner-router");

dotEnv.config();

connectToMongo("mongodb://localhost:27017/Scatch");

const app = express();

// packages middleware
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// routes middleware
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/owner", ownerRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("app is running");
});
