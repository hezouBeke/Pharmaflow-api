const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientController');
const validate = require('../middleware/validate');
const clientValidator = require('../validators/clientValidator');
const clientUpdateValidator = require('../validators/clientUpdateValidator');


router.get("/", ClientController.get);
router.get("/:id", ClientController.getOne);

router.post("/", validate(clientValidator), ClientController.create);
router.put("/:id", validate(clientUpdateValidator), ClientController.update);
router.delete("/:id", ClientController.delete);

module.exports = router;
