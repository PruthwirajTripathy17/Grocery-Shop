# 🛒 Grocery Shop - E-Commerce Platform

Welcome to the **Grocery Shop** project! This is a complete end-to-end full-stack web application built using the **MERN** (MongoDB, Express, React, Node.js) stack. It is designed to be fully responsive, feature-rich, and ready for production deployment.

Developed by **Pruthwiraj Tripathy**.

---

## 📋 Features

- 👤 **User Authentication**: Secure Login and Registration system with encrypted password storage (`bcrypt`).
- 🔐 **Authentication Protection**: Route guards, password resets, and session management using secure, cross-origin cookies.
- 📦 **Product Catalog**: Dynamic catalog browsing, searching, and filtering by category or price range.
- 🛒 **Shopping Cart**: Real-time product addition, quantity adjustments, and total calculation.
- 💳 **Checkout Flow**: Complete checkout preview, delivery details confirmation, and order summary.
- 📝 **Product Reviews**: Interactive customer feedback with star ratings and comments.
- 🛡️ **Admin Dashboard**: Specialized interface for administrators to manage products, categories, users, and reviews.
- 🔌 **Resilient Database Fallback**: Built-in logic that attempts connection to MongoDB Atlas first, and automatically falls back to a local MongoDB instance if whitelisting/network constraints are encountered.

---

## ⚙️ Configuration

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=8000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET_KEY=your_jwt_secret_key
JWT_RESET_PASSWORD_SECRET_KEY=your_jwt_reset_password_secret_key
COOKIE_EXPIRE=5
SMTP_MAIL=your_gmail_address
SMTP_PASSWORD=your_gmail_app_password
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET_KEY=your_cloudinary_api_secret_key
```

---

## 🚀 Local Installation & Execution

### 1. Backend Setup
1. From the project root folder, install the backend node modules:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the peer-compatible frontend dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Access the site in your browser at `http://localhost:3000`.

---

## 🌐 Production Deployment (Render)

This repository is optimized for deployment on **Render** using a single full-stack web service:

### 1. Settings Configuration
- **Root Directory**: *Keep empty (root)*
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Publish Directory**: `dist` (if deploying a static site)

### 2. Environment Setup
Add your `.env` keys and values in the **Environment** tab of your Render service. Ensure MongoDB Atlas network access whitelists `0.0.0.0/0` to allow connections from Render's dynamic IPs.

---

## 🛠️ Tech Stack

- **Database**: MongoDB (Mongoose ODM)
- **Backend Framework**: Express.js & Node.js
- **Frontend Library**: React (Redux for global state management)
- **Styles**: Vanilla CSS (Mobile-first responsive design)
- **Mailing service**: Nodemailer (via Google SMTP)
- **CDN Cloud hosting**: Cloudinary
