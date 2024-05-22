const mongoose = require('mongoose');
require('../../db/config');

const registerdata = new mongoose.Schema({

    mail:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const register = mongoose.model("datas",registerdata);

module.exports = register;