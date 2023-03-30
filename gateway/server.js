const gateway = require("fast-gateway");

const server = gateway({
    routes: [
        {
            prefix: "/users",
            target: "http://localhost:5001"
        },
        {
            prefix: "/posts",
            target: "http://localhost:5002"
        }
    ]
});

server.get("/", (req, res) => {
    res.send("Gateway root route");
});

server.start(5000).then(() => {
    console.log("Gateway server running on port:5000");
});