const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());

const feedbackModel = require("./db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/feedback", async (req, res) => {
  try {
    const newFeedback = new feedbackModel({
      feedback: req.body.feedback,
      uid: req.body.uid,
    });

    const savedFeedback = await newFeedback.save(); // Save the feedback document
    console.log(savedFeedback);
    res.status(201).json(savedFeedback); // Return the saved document
  } catch (error) {
    res.status(500).send("Error saving feedback: " + error.message);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
