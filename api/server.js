const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.set("strictQuery", false);

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connection Established"));

const memberRouter = require("./routes/members");
const authRouter = require("./routes/auth");
app.use(express.json());
app.use("/api/v1/members", memberRouter);
app.use("/api/v1/auth", authRouter);

//  Look in the react build folder for static build

app.use(express.static(path.join(__dirname, "../prominentapp/build")));

// For any routes not defined by the api, assume it's a direct request to a client-side route
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../prominentapp/build", "index.html"),
        function (err) {
            if (err) {
                res.status(500).send(err);
            }
        }
    );
});

app.listen(PORT, () => {
    console.log("Running on server: ", PORT);
});
