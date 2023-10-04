const mongoose = require("mongoose");

const server1Schema = new mongoose.Schema({
  name: String,
  RollNo: Number,
  server: String
});

const Server1Model = mongoose.model("Server1", server1Schema);

module.exports = Server1Model;
