const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professor');

router.get('/', professorController.listar);

module.exports = router;