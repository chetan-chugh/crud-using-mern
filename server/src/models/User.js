const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{type:String,require:true, unique:true},
    email:{type:String,require:true, unique:true},
    password:{type:String,require:true},
    accesstoken:{type:String}
});

module.exports = mongoose.model("Register",registerSchema);