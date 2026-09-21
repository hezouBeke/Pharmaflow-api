const express = require("express");
const router = express.Router();
const medicController = require("../controllers/MedicController");
const authorize = require("../middleware/authorize");
const validate = require("../middleware/validate");
const medicValidator = require("../validators/medicValidator");

router.get("/", medicController.get);
router.get("/:id", medicController.getOne);
router.get("/:id/check-stock", medicController.checkQuantityMedic);

router.post("/", authorize(["admin"]), validate(medicValidator), medicController.create);
router.put("/:id", authorize(["admin"]), validate(medicValidator), medicController.update);
router.delete("/:id", authorize(["admin"]), medicController.delete);

module.exports = router;