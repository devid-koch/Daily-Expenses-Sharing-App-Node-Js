// middleware/validateInput.js
const { body, validationResult } = require('express-validator');

exports.validateExpenseInput = [
    body('total_amount')
        .isFloat({ gt: 0 })
        .withMessage('Total amount must be greater than 0'),
    body('method')
        .isIn(['equal', 'exact', 'percentage'])
        .withMessage('Method must be either equal, exact, or percentage'),
    body('split_details')
        .isObject()
        .withMessage('Split details must be an object')
        .custom((value) => {
            const totalSplitAmount = Object.values(value).reduce((acc, amount) => acc + amount, 0);
            if (totalSplitAmount <= 0) {
                throw new Error('Split amounts must be greater than 0');
            }
            return true;
        }),
];

// Function to handle validation errors
exports.handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};


exports.validateUserInput = [
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('mobile_number')
        .isMobilePhone('any')
        .withMessage('Mobile number must be a valid phone number'),
];