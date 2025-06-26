const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { validateCategory, handleValidation } = require('../middleware/validation');

// Get all categories
router.get('/', categoryController.getAllCategories);
// Create a new category
router.post('/', validateCategory, handleValidation, categoryController.createCategory);

module.exports = router; 