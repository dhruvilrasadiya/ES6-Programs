const mongoose = require('mongoose');

var myschema = new mongoose.Schema({
    uname : String,
    Ugender : String
})

var usermodel = mongoose.model("User",myschema);

module.exports = usermodel;