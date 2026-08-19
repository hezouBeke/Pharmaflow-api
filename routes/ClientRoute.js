const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');


router.get("/", ClientController.get);
router.get("/:id", ClientController.getOne);

router.post("/", ClientController.create);
router.put("/:id", ClientController.update);
router.delete("/:id", ClientController.delete);

module.exports = router;
