const express = require('express');
const router=express.Router();
const { createOrder } = require('../controllers/apiController.js');

// Route for creating an order
router.post('/order/create', createOrder);

module.exports = router;
