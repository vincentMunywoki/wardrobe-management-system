# Wardrobe Management System

## Overview
A web application that helps users organize their clothing items. Built with Vue 3 for the frontend and Laravel 11 for the backend, the system allows users to add, edit, categorize, and manage their wardrobe items.

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
git clone https://github.com/vincentMunywoki/wardrobe-management-system.git
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

## Project Screenshots

### Login page
![Screenshot from 2025-02-27 01-08-50](https://github.com/user-attachments/assets/efd62605-d0c2-457d-85d4-f3a169b02952)

### Register page

![Screenshot from 2025-02-27 01-08-56](https://github.com/user-attachments/assets/66dbaa17-237a-4e9a-911a-3e970d55e561)

### Dashboaard

![image](https://github.com/user-attachments/assets/cc738cd3-1714-453c-b225-f82d1e31d136)

### Adding Items

![Screenshot from 2025-02-27 01-27-49](https://github.com/user-attachments/assets/872674af-1887-4122-984b-9f7a7099967a)

### Filtering by Shoes

![Screenshot from 2025-02-27 01-28-34](https://github.com/user-attachments/assets/ec07da8a-a937-46d6-8907-0e194c1153d1)

### Filtering by tops

![Screenshot from 2025-02-27 01-28-43](https://github.com/user-attachments/assets/acc594e0-be69-4649-847c-0edbb41872d5)

### Filtering by Bottoms

![Screenshot from 2025-02-27 01-28-52](https://github.com/user-attachments/assets/09a50132-ac83-41b7-97b7-9f8d2f180609)

## Author
Developed by Vincent Munywoki.

## Contributions
Feel free to contribute by submitting pull requests or reporting issues.

## Contact
For any inquiries, reach out via email: vincentmunywoki12@gmail.com


