const { Router } = require("express");
const userRouter = Router();
userRouter.get("/", (req, res) => {
  res.send("user Router");
});
module.exports = userRouter;
