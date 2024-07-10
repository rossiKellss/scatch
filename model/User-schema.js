const { Schema, model, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [{ type: mongoose.Schema.ObjectId, ref: "Cart" }],
  isAdmin:Boolean,
  orders: [],
  
});
