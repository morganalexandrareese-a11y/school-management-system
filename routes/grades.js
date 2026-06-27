const express = require('express');
const router = express.Router();

// Get all grades
router.get('/', (req, res) => {
  res.json({ message: 'Get all grades' });
});

// Get grades by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get grades ${req.params.id}` });
});

// Record grade
router.post('/', (req, res) => {
  res.json({ message: 'Record new grade' });
});

// Update grade
router.put('/:id', (req, res) => {
  res.json({ message: `Update grade ${req.params.id}` });
});

// Delete grade
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete grade ${req.params.id}` });
});

module.exports = router;
