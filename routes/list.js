const express = require('express');
const listController = require('../controllers/list');
const router = express.Router();

// GET - List of Lists created
router.get('/lists', listController.getList);

// POST - Creates list with Data
router.post('/create', listController.createList);

module.exports = router;