const express = require("express");
const router = express.Router();
const MedicController = require("../controllers/MedicController");

router.post("/create", MedicController.create);
router.post("/get", MedicController.create);
router.post("/:id", MedicController.create);
router.post("/update", MedicController.create);
router.post("/delete", MedicController.create);

module.exports = router;