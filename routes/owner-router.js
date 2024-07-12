const { Router } = require("express");
const ownerRouter = Router();
require("dotenv").config();

const ownerModel = require("../model/OwnerModel");
console.log(process.env.NODE_ENV);
ownerRouter.get("/", (req, res) => {
  res.send("owner Router");
});
if (process.env.NODE_ENV !== "production") {
  ownerRouter.post("/create", async (req, res) => {
    const ownerCheck = await ownerModel.find();
    if (ownerCheck.length > 0) {
      res.status(500).send("Owner already exists");
    }
    const { userName, email, phone, password, gstNum } = req.body;
    const result = await ownerModel.create({
      userName,
      email,
      phone,
      password,
      gstNum,
    });
    

    res.status(200).send(result);
  });
}
module.exports = ownerRouter;
