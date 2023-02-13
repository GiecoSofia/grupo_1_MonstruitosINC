const express = require('express');
const router = express.Router();
const apiUsersController = require('../../controllers/apis/usuarioController');

router.get('/', apiUsersController.list);
router.get('/:id', apiUsersController.detail);

module.exports = router;