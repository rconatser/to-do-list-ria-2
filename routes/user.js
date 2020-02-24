const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

// GET - User created
router.get('/user', userController.getUser);

module.exports = router;