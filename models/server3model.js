const mongoose = require("mongoose");

const server3Schema = new mongoose.Schema({
    name: String,
  RollNo: Number,
});

const Server3Model = mongoose.model("Server3", server3Schema);

module.exports = Server3Model;
