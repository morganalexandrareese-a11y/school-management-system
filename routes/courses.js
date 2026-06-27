const express = require('express');
const router = express.Router();

// Get all courses
router.get('/', (req, res) => {
  res.json({ message: 'Get all courses' });
});

// Get course by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get course ${req.params.id}` });
});

// Create new course
router.post('/', (req, res) => {
  res.json({ message: 'Create new course' });
});

// Update course
router.put('/:id', (req, res) => {
  res.json({ message: `Update course ${req.params.id}` });
});

// Delete course
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete course ${req.params.id}` });
});

module.exports = router;
