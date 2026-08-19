const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const authorize = require('../middleware/authorize');

router.get("/", CategoryController.get);
router.get("/:id", CategoryController.getOne);

router.post("/", authorize(["admin"]), CategoryController.create);
router.put("/:id", authorize(["admin"]), CategoryController.update);
router.delete("/:id", authorize(["admin"]), CategoryController.delete);

module.exports = router;