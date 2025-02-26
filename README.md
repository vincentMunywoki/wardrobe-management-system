# Wardrobe Management System

## Overview
The Wardrobe Management System is a web application that helps users organize their clothing items efficiently. Built with Vue 3 for the frontend and Laravel 11 for the backend, the system allows users to add, edit, categorize, and manage their wardrobe items seamlessly.

## Features
-  User authentication (Login/Registration)
-  Add, edit, and delete clothing items
-  Categorize clothing items (e.g., tops, bottoms, shoes)
-  Filter and search functionality
-  Responsive and user-friendly UI

## Technologies Used
### Frontend:
- Vue 3
- Vue Router
- Vuex
- CSS3
- Tailwind CSS
- Axios

### Backend:
- Laravel 11
- MySQL
- Sanctum (for authentication)

## Installation Guide

### Prerequisites
Ensure you have the following installed:
- Node.js & npm
- PHP & Composer
- MySQL (or any preferred database)

### Setting Up the Frontend
```sh
# Clone the repository
git clone https://github.com/incentMunywoki/wardrobe-management-system.git
cd wardrobe-management-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Setting Up the Backend
```sh
# Navigate to the backend directory
cd wardrobe-backend

# Install dependencies
composer install

# Copy environment file
cp .env.example .env

# Set up database credentials in .env file

# Run migrations
php artisan migrate

# Start the Laravel server
php artisan serve
```

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST | `/api/clothing-items` | Add a new clothing item |
| GET | `/api/clothing-items` | Get all clothing items |
| PUT | `/api/clothing-items/{id}` | Update a clothing item |
| DELETE | `/api/clothing-items/{id}` | Delete a clothing item |

## License
This project is licensed under the [MIT License](LICENSE).

## Author
Developed by Vincent Munywoki.

## Contributions
Feel free to contribute by submitting pull requests or reporting issues.

## Contact
For any inquiries, reach out via email: vincentmunywoki12@gmail.com.

