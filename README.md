# Daily Expenses Sharing Application

## Project Overview
The Daily Expenses Sharing Application is a web application that allows users to manage their daily expenses. Users can add and split expenses, view individual and overall spending, and download balance sheets.

### Technologies Used
- **Backend**: Django
- **Framework**: Django REST Framework
- **Database**: PostgreSQL

## Installation Guide

### Prerequisites
Before you begin, ensure you have the following installed:
- **Python** (version 3.x)
- **Django** (version x.x)
- **Django REST Framework** (version x.x)
- **PostgreSQL** (version x.x)
- **Node.js** and **npm** (for frontend, if applicable)

### Clone the Repository
```bash
git clone <repository-url>
cd <project-directory>


## Install Dependencies

pip install -r requirements.txt

## Configuration
Database Setup
Create a PostgreSQL database for the application.
Update the database settings in settings.py:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': '<database-name>',
            'USER': '<database-user>',
            'PASSWORD': '<password>',
            'HOST': 'localhost',
            'PORT': '',
        }
    }


### Environment Variables
        Create a .env file to store sensitive information (e.g., secret keys).
        Migrate Database
        Run the following command to set up the database tables:

            python manage.py migrate
            API Endpoints
            User Registration
            Endpoint: /api/register/
            Method: POST
            Request Body:
            {
                "email": "usertest@example.com",
                "name": "John Doe",
                "mobile_number": "1234567890"
            }
            Response:
            Success: 201 Created
            Error: 400 Bad Request
            User Login
            Endpoint: /api/login/
            Method: POST
            Request Body:
            {
                "email": "usertest@example.com",
                "mobile_number": "1234567890"
            }
            Response:
            Success: 200 OK
            Error: 400 Bad Request
            Create Expense
            Endpoint: /api/expenses/
            Method: POST
            Request Body:
            {
                "user": 1,
                "total_amount": 100,
                "method": "cash",
                "split_details": {}
            }
            Response:
            Success: 201 Created
            Error: 400 Bad Request
            Get Expenses
            Endpoint: /api/expenses/
            Method: GET
            Response:
            Success: 200 OK
            Data Structure:
            [
                {
                    "id": 1,
                    "user": 1,
                    "total_amount": 100,
                    "method": "cash",
                    "split_details": {}
                }
            ]
### Features
            User Authentication: Registration and login functionality.
            Expense Management: Add, view, and manage daily expenses.
            Split Expenses: Ability to split expenses among users based on different criteria.
            Download Balance Sheet: Option to download a summary of expenses.