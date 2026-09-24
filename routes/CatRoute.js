const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const authorize = require('../middleware/authorize');
const categoryValidator = require('../validators/categoryValidator');
const categoryValidatoroptional = require('../validators/categoryValidatorUpdate');
router.get("/", CategoryController.get);
router.get("/:id", CategoryController.getOne);

router.post("/", authorize(["admin"]), validate(categoryValidator) ,CategoryController.create);
router.put("/:id", authorize(["admin"]), validate(categoryValidatoroptional), CategoryController.update);
router.delete("/:id", authorize(["admin"]), CategoryController.delete);

module.exports = router;