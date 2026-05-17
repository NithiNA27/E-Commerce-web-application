# Shivam Auto Workshop – E-Commerce Web Application

## Project Overview

Shivam Auto Workshop is a full-stack automobile workshop and spare parts e-commerce web application developed using:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express.js
- Database: MongoDB
- Authentication: JWT Authentication
- Payment Method: Cash On Delivery (COD)

This application allows customers to browse automobile spare parts, add products to cart, place orders, and track their orders.

Admins can manage customer orders and update delivery status.

------------------------------------------------------------

# Features

## Customer Features

- User Login/Register
- Browse Products
- Add To Cart
- Remove From Cart
- Checkout System
- Cash On Delivery (COD)
- View Orders
- Track Order Status

------------------------------------------------------------

## Admin Features

- View All Orders
- Accept Orders
- Reject Orders
- Update Order Status
- View Customer Details

------------------------------------------------------------

# Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## Authentication
- JWT (JSON Web Token)

------------------------------------------------------------

# Folder Structure

project-root/

│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│

├── frontend/
│   ├── js/
│   ├── pages/
│   ├── pictures/
│   └── style.css
│

└── README.md

------------------------------------------------------------

# Installation

## Clone Repository

git clone <your-repository-url>

------------------------------------------------------------

# Backend Setup

## Move to Backend Folder

cd backend

## Install Dependencies

npm install

## Start Server

npm run dev

Server runs on:

http://localhost:5000

------------------------------------------------------------

# MongoDB Setup

Create .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

------------------------------------------------------------

# Frontend Setup

Open frontend using Live Server extension in VS Code.

Example:

frontend/pages/home.html

------------------------------------------------------------

# API Routes

## Authentication

POST /api/auth/register
POST /api/auth/login

------------------------------------------------------------

## Products

GET /api/products
POST /api/products

------------------------------------------------------------

## Cart

GET /api/cart
POST /api/cart
DELETE /api/cart/:id

------------------------------------------------------------

## Orders

POST /api/orders
GET /api/orders/my-orders
GET /api/orders
PUT /api/orders/:id

------------------------------------------------------------

# Screens Included

- Home Page
- Services Page
- Auto Store
- Cart Page
- Checkout Page
- Orders Page
- Login Page
- Admin Dashboard

------------------------------------------------------------

# Future Improvements

- Online Payment Gateway
- Product Search
- Image Upload System
- Quantity Increment/Decrement
- Admin Analytics Dashboard
- Email Notifications

------------------------------------------------------------

# Developed By

Nithin Sajjanapu

B.Tech – Computer Science & Design

Shivam Auto Workshop Project – 2026