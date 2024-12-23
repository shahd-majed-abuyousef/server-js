const express = require("express");
const mongoose = require("mongoose");
const User = require("./app.js");

const app = express();

const port =3000 || process.env.PORT;

mongoose.connect("mongodb+srv://shahd_abuyousef:Sh4086404499@cluster0.eb6bf.mongodb.net/myNewDatabase?retryWrites=true&w=majority&appName=Cluster0", { 
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB", err));

app.use(express.json());

app.get("/name", (req, res) => {
  res.send("Shahd_AbuYousef");
});

app.post("/users", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email
  });

  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
