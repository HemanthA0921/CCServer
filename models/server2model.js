const mongoose = require("mongoose");

const server2Schema = new mongoose.Schema({
    name: String,
    RollNo: Number,
});

const Server2Model = mongoose.model("Server2", server2Schema);

module.exports = Server2Model;
