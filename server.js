require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const medicRouter = require("./routes/MedicRoute");
const catRouter = require("./routes/CatRoute");
const clientRoute = require("./routes/ClientRoute");
const venteRoute = require("./routes/VenteRoute");


const authRouter = require("./routes/authRoute");

const authMiddleware = require("./middleware/authMiddlware");

const errorHandler = require("./middleware/errorHandler");

const AppError = require("./utils/AppError");

app.use(express.json());
app.use("/medic", authMiddleware , medicRouter, );
app.use("/category", authMiddleware , catRouter);
// app.use("/client", authMiddleware , clientRoute );
app.use("/client", clientRoute );
app.use("/vente", authMiddleware , venteRoute );

app.use("/auth" , authRouter);


app.use((req, res, next) => {
    next(new AppError("Route introuvable", 404));
});

app.use(errorHandler);



mongoose.connect(process.env.MONGO_URI)

    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => (console.log(`Server is running on port ${PORT}`)));