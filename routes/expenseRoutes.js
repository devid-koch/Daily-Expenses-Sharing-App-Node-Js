// routes/expenseRoutes.js
const express = require('express');
const { createExpense, getExpenses, getUserExpenses, downloadBalanceSheet } = require('../controllers/expenseController');
const auth = require('../middleware/authMiddleware');
const { validateExpenseInput, handleValidationErrors } = require('../middleware/validateExpense');
const router = express.Router();

router.post('/add', auth, validateExpenseInput, handleValidationErrors, createExpense);
router.get('/:userId', getUserExpenses);
router.get('/', auth, getExpenses);
router.get('/balance-sheet/:id', downloadBalanceSheet);
module.exports = router;
