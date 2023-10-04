const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Server1Model = require("./models/server1model");
const Server2Model = require("./models/server2model");
const Server3Model = require("./models/server3model");

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
app.get("/api/server1data", async (req, res) => {
  try {
    const data = await Server1Model.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to get data from the second model
app.get("/api/server2data", async (req, res) => {
  try {
    const data = await Server2Model.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to get data from the third model
app.get("/api/server3data", async (req, res) => {
  try {
    const data = await Server3Model.find({});
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to submit data to the first model
app.post("/api/server1submit", async (req, res) => {
  try {
    const { name, RollNo } = req.body;
    const newData = new Server1Model({ name, RollNo });
    await newData.save();
    res.status(201).json({ message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error submitting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to submit data to the second model
app.post("/api/server2submit", async (req, res) => {
  try {
    const { name, RollNo } = req.body;
    const newData = new Server2Model({ name, RollNo });
    await newData.save();
    res.status(201).json({ message: "Data submitted successfully" });
  } catch (error) {
    console.error("Error submitting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint to submit data to the third model
app.post("/api/server3submit", async (req, res) => {
  try {
    const { name, RollNo } = req.body;
    const newData = new Server3Model({ name, RollNo });
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
