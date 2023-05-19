
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({


    Name: {type:String, required:true},
    Email : {type:String , required:true , unique:true},
    Password :{type:String, required:true},
    Gender : {type:String, required:true , enum:["Male","Female","Other"], default:"Other"},
    Location: {type:String, required:true},
    Contact:{type:String, required:true},
    isAdmin:{type:Boolean, default:false}


},

    {
        versionKey:false,
        timestamps :true
    
    }
)


const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel;
