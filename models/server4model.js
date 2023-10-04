const mongoose = require("mongoose");

const server4Schema = new mongoose.Schema({
    name: String,
    RollNo: Number,
});

const Server4Model = mongoose.model("Server4", server4Schema);

module.exports = Server4Model;
