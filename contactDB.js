const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/contactDB", {
    useNewUrlParser : true, useUnifiedTopology: true
});

const contactSchema = new mongoose.Schema({
    name : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String
    },
    phone : {
        required : true,
        type : Number
    }
});

module.exports = mongoose.model("Contact", contactSchema);