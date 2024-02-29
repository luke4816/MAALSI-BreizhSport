const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders:
            "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("It works"));

app.all("*", (req, res) => res.status(501).send("This route does not exist"));

module.exports = app;
