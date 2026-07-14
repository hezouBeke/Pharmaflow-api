const express = require("express");
const router = express.Router();
const MedicController = require("../controllers/MedicController");

router.post("/create", MedicController.create);


module.exports = router;