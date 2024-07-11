const { Schema, model, default: mongoose } = require("mongoose");

const ownerSchema = new Schema({
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
  products: [],
  gstNum:String
  
});

module.exports=new model("Owner",ownerSchema);
