const { Router } = require("express");
const productRouter = Router();



productRouter.get("/", (req, res) => {
  res.send("product Router");
});
module.exports = productRouter;
