// utils/validateInput.js
const validateInput = (requiredFields, data) => {
    for (const field of requiredFields) {
      if (!data[field]) {
        return { isValid: false, message: `${field} is required` };
      }
    }
    return { isValid: true, message: '' };
  };
  
  module.exports = validateInput;
  