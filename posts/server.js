const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Posts root route" });
});

app.get("/getdata", (req, res) => {
    res.status(200).json({ message: "Inside posts' get data" });
});

app.listen(5002, () => console.log("Post server running on port: 5002"));