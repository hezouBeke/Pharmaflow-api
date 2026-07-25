const express = require("express");
const router = express.Router();
const MedicController = require("../controllers/MedicController");
const authorize = require("../middleware/authorize");

router.post("/createMedic", authorize(['admin']), MedicController.create);
router.get("/getAll", MedicController.get);
router.get("/:id", MedicController.getOne);
router.put("/:id", authorize(['admin']), MedicController.update);
router.delete("/:id", authorize(['admin']), MedicController.delete);

module.exports = router;