const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Users root route" });
});

app.get("/getdata", (req, res) => {
    res.status(200).json({ message: "Inside users' get data" });
});

app.listen(5001, () => console.log("User server running on port: 5001"));
