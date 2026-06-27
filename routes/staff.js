const express = require('express');
const router = express.Router();

// Get all staff members
router.get('/', (req, res) => {
  res.json({ message: 'Get all staff members' });
});

// Get staff member by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Get staff member ${req.params.id}` });
});

// Add new staff member
router.post('/', (req, res) => {
  res.json({ message: 'Add new staff member' });
});

// Update staff member
router.put('/:id', (req, res) => {
  res.json({ message: `Update staff member ${req.params.id}` });
});

// Delete staff member
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete staff member ${req.params.id}` });
});

module.exports = router;
