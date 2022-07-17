const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// midleware
app.use(cors());
app.use(express.json());

// Set default route
app.get("/", (req, res) => res.send("Server is Running Do Your Backend Work"));

// set not found route
app.get("*", (req, res) => res.send("404, Sorry Route don't Exest"));

// port listen
app.listen(port, () => console.log("Server is Runing"));
