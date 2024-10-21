// /controllers/expenseController.js

const Expense = require('../models/expense');
const User = require('../models/user');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const { total_amount, method, split_details } = req.body;
    const expense = await Expense.create({ total_amount, method, split_details });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all expenses
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const id = req.params.userId;

    // Retrieve expenses for the user
    const expenses = await Expense.findAll({
      where: { id },
    });

    if (expenses.length === 0) {
      return res.status(404).json({ message: 'No expenses found for this user' });
    }

    res.json(expenses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.downloadBalanceSheet = async (req, res) => {
  try {
    const id = req.params.id; // Get userId from request parameters

    // Retrieve expenses for the user
    const expenses = await Expense.findAll({
      where: { id },
      include: [User],
    });

    if (expenses.length === 0) {
      return res.status(404).json({ message: 'No expenses found for this user' });
    }

    // Format the balance sheet
    const balanceSheetData = expenses.map(expense => ({
      id: expense.id,
      total_amount: expense.total_amount,
      method: expense.method,
      split_details: JSON.stringify(expense.split_details), // Convert to string for easier CSV formatting
      createdAt: expense.createdAt,
    }));

    // Generate a CSV or PDF file
    // Here we are just sending the data as JSON, but you can use a library to generate CSV/PDF

    // For CSV
    const csvData = convertToCSV(balanceSheetData); // Create a function to convert to CSV format
    res.header('Content-Type', 'text/csv');
    res.attachment('balance_sheet.csv');
    res.send(csvData);

    // For PDF, you might want to use a library like `pdfkit` or `jspdf`.

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Helper function to convert JSON to CSV format
const convertToCSV = (data) => {
  const header = Object.keys(data[0]).join(',') + '\n';
  const rows = data.map(row => Object.values(row).join(',')).join('\n');
  return header + rows;
};
