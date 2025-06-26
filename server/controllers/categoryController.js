const Category = require('../models/Category');

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    // Create and save new category
    const newCategory = new Category({ name });
    const savedCategory = await newCategory.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}; 