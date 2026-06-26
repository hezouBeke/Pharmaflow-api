require("dotenv").config();

const mongoose = require("mongoose");

const express = require("express");

const app = express();


app.use(express.json());



mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => (console.log(`Server is running on port ${PORT}`)));