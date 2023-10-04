// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

// Sample data
const sampleData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Endpoint to get sample data
app.get("/api/data", (req, res) => {
  res.json(sampleData);
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
