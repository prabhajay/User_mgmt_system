const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:5,
        max:128
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:5,
        max:128
    },
    gender:String,
    status:String
})

const Userdb=mongoose.model('userdb',schema);

module.exports=Userdb;