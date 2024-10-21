const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Ensure correct path
const { handleValidationErrors, validateUserInput } = require('../middleware/validateExpense');

router.post('/register', validateUserInput, handleValidationErrors, userController.createUser);
router.post('/login', userController.login);
router.get('/', userController.getUsers);

module.exports = router;
