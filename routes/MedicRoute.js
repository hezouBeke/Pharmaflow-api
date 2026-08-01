const express = require("express");
const router = express.Router();
const medicController = require("../controllers/MedicController");
const authorize = require("../middleware/authorize");

router.get("/", medicController.get);
router.get("/:id", medicController.getOne);
router.get("/:id/check-stock", medicController.checkQuantityMedic);

router.post("/", authorize(["admin"]), medicController.create);
router.put("/:id", authorize(["admin"]), medicController.update);
router.delete("/:id", authorize(["admin"]), medicController.delete);

module.exports = router;