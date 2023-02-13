const express = require('express');
const router = express.Router();
const apiControllers = require('../../controllers/apis/productsController');


router.get("/", apiControllers.getAll);
router.get("/:id", apiControllers.detail);

module.exports = router