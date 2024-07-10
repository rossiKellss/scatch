const mongoose=require('mongoose');
const connectToMongo=(url)=>{
    return mongoose.connect(url).then(()=>{
        console.log("Connected to db sucessfully")
    }).catch(err=>console.log(err));
}
module.exports=connectToMongo;