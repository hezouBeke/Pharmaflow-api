require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const medicRouter = require("./routes/MedicRoute");
const authRouter = require("./routes/authRoute");
const authorize = require("./middleware/authorize");
const authMidlleware = require("./middleware/authMiddlware");

app.use(express.json());
app.use("/medic", authMidlleware , authorize, medicRouter, );
app.use("/auth" , authRouter);


mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => (console.log(`Server is running on port ${PORT}`)));