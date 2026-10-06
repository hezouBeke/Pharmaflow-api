const venteController = require('../controllers/VenteController');
const express = require('express');
const router = express.Router();
const authorize = require("../middleware/authorize");

const validate = require("../middleware/validate");

const venteValidator = require("../validators/venteValidator");

router.post("/", authorize(["admin", "vendeur"]), validate(venteValidator), venteController.create);
router.get("/", authorize(["admin", "vendeur"]), venteController.get);
router.get("/:id", authorize(["admin", "vendeur"]), venteController.getOne);
router.put("/:id", authorize(["admin", "vendeur"]), validate(venteValidator), venteController.update);
router.delete("/:id", authorize(["admin", "vendeur"]), venteController.delete);


module.exports = router;