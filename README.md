# 🔐 Authentication System (MERN)

## 📌 Overview
This project is a **complete authentication system** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It provides secure user authentication with features like **signup, login, email verification, password reset, and welcome emails**.

---

## 🚀 Features
- User Registration with **Email Verification**  
- Login & JWT Authentication  
- **Password Reset** via OTP (sent to email)  
- Welcome Email after successful signup  
- Protected Routes (only logged-in users can access)  
- Context API + React Hooks for managing auth state  

---

## 🛠 Tech Stack
- **Frontend:** React.js, Context API, Hooks (useState, useEffect, useContext)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Email Service:** Nodemailer (Gmail/SMTP)  
- **Authentication:** JWT (JSON Web Tokens)  

---

## ⚙️ Project Structure
```
Authentication-System/
│── backend/
│   ├── controllers/ (auth logic e.g., signup, login, reset password)
│   ├── models/ (User schema)
│   ├── routes/ (API routes)
│   ├── middleware/ (JWT authentication)
│   └── server.js
│
│── frontend/
│   ├── src/
│   │   ├── components/ (UI components)
│   │   ├── pages/ (Login, Signup, ResetPassword, VerifyEmail...)
│   │   ├── context/ (AuthContext)
│   │   └── App.js
```

---

## 🔄 User Flows

### 🟢 Signup + Email Verification
1. User registers → Backend sends **verification email** with OTP.  
2. User enters OTP → Account verified → Stored in MongoDB.  
3. Welcome email is sent.  

### 🔵 Login
1. User enters email/password.  
2. Backend validates credentials and returns **JWT token**.  
3. Token stored in frontend (localStorage/context).  

### 🟡 Reset Password
1. User requests reset → OTP sent to email.  
2. User enters OTP + new password → Backend updates password.  

---

## ▶️ Running the Project
```bash
# Backend
cd backend
npm install
npm start

# Frontend
cd frontend
npm install
npm start
```

---

Preview Link : https://drive.google.com/drive/folders/1AYFEu7z14oEEadYxNa_bkCkdzbVb6m6j
