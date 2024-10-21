// /config/db.js

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const env = process.env.NODE_ENV || 'development';

// Database configuration for different environments
const config = {
    development: {
        username: process.env.DB_USERNAME || 'your_dev_username',
        password: process.env.DB_PASSWORD || 'your_dev_password',
        database: process.env.DB_NAME || 'your_dev_database',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
    },
    test: {
        username: process.env.DB_USERNAME || 'your_test_username',
        password: process.env.DB_PASSWORD || 'your_test_password',
        database: process.env.DB_NAME || 'your_test_database',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: process.env.DB_USERNAME || 'your_prod_username',
        password: process.env.DB_PASSWORD || 'your_prod_password',
        database: process.env.DB_NAME || 'your_prod_database',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};

// Create Sequelize instance
const dbConfig = config[env];
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions || {},
});

// Export the Sequelize instance and configuration
module.exports = { sequelize, dbConfig };
