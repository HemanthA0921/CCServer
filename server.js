const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Server1Model = require("./models/server1model");
const Server2Model = require("./models/server2model");
const Server3Model = require("./models/server3model");
const Server4Model = require("./models/server4model");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chandrasaiteja0804:Chandra0804@cluster0.rjzyla7.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Endpoint to get data from the first model
app.get("/api/data", async (req, res) => {
  try {
    const data1 = await Server1Model.find({});
    const data2 = await Server2Model.find({});
    const data3 = await Server3Model.find({});
    const data4 = await Server4Model.find({});
    const data = [data1 , data2 , data3 , data4];
    res.json(data);
   
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/test", (req,res) => {
  res.send("This is server 1(aws)");
});

// Endpoint to submit data to the first model
app.post("/api/submit", async (req, res) => {
  try {
    const { name, RollNo , server } = req.body;
   
      const newData = new Server1Model({ name, RollNo , server });
      await newData.save();
      res.status(201).json({ message: "Data submitted successfully" });
   
  } catch (error) {
    console.error("Error submitting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




// Rest of your code for form submission

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
