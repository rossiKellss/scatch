const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: String,
  image: String,
  discount: {
    type:Number,
    default:0
  },
  price: Number,
  bgColor: String,
  panelColor: String,
  textColor: String,
});

const Product=new mongoose.model(productSchema);

