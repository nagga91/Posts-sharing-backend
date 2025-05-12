# 📝 Posts Sharing Application Backend

This is the backend of a simple social platform where users can register, log in, and share posts. Each post can be text-only or contain an image. Users can also view all shared posts and delete their own.

---

## 🚀 Features

- 🔐 User registration and login with JWT & cookies
- ✍️ Create posts (text-only or text + image)
- 📃 View all posts with user info
- ❌ Delete own posts only
- 🛡 Secure routes and input validation
- 📂 Image uploads stored locally

---

## 🎯 Skill Objectives

By the end of this project, students will have learned to:

1. Build an authentication system using JWT and cookies
2. Set up a backend with role-restricted routes
3. Handle image uploads with `multer`
4. Validate and sanitize user input
5. Apply security middleware like `helmet` and `rate-limit`
6. Restrict delete actions to post owners only

---

## 🧱 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB + Mongoose
- **Auth**: JWT with cookies
- **Uploads**: Multer (image only)
- **Security**: Helmet, Rate Limiting, express-validator

---

## 📦 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/nagga91/Posts-sharing-backend.git
cd Posts-sharing-backend
npm install
