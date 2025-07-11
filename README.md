# 🌱 ThinkGreenly (Backend)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<!-- [![Build Status](https://img.shields.io/github/actions/workflow/status/your-repo/backend/ci.yml)](https://github.com/khaledssbd/ThinkGreenly-apis/actions)
[![Coverage](https://coveralls.io/repos/github/your-repo/backend/badge.svg)](https://coveralls.io/github/khaledssbd/ThinkGreenly-apis) -->

# 📌 Overview

RESTful API for the ThinkGreenly, built with Node.js, Express, and PostgreSQL. Handles authentication, idea moderation, and payments.

## 🌍 Live URL

- [Front-end](https://think-greenly-one.vercel.app)
- [Back-end](https://think-greenly-serverside.vercel.app)

## 📂 Repository Link

- [Front-end](https://github.com/khaledssbd/ThinkGreenly)
- [Back-end](https://github.com/khaledssbd/ThinkGreenly-apis)

## 🛠️ Features

- **Database**: PostgreSQL with Prisma ORM.
- **JWT Authentication**: Secure member/admin login.
- **CRUD Operations**: Manage ideas, comments, and votes.
- **Admin Endpoints**: Approve/reject ideas with feedback.

## 🏗️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Payment API**: SSLCommerz.
- **Auth**: JWT, bcrypt

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js ≥18.x
- PostgreSQL ≥16.x

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/khaledssbd/ThinkGreenly-apis.git
   cd ThinkGreenly-apis
   ```
2. Install dependencies

   ```bash
   npm install --legacy-peer-deps
   ```

3. Set up environment variables in a `.env` file:

   ```env
   NODE_ENV="development"
   PORT=5000

   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/ThinkGreenly?schema=public"

   JWT_SECRET=""
   JWT_EXPIRATION="15d"
   JWT_REFRESH=""
   JWT_REFRESH_EXPIRATION="7d"
   RESET_PASSWORD_SECRET=""
   RESET_PASSWORD_EXPIRATION="10m"
   RESET_PASSWORD_LINK="http://localhost:5000/auth/reset-password"
   RESEND_API_KEY=""

   BCRYPT_SALT_ROUNDS=12
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER=""


   CLOUDINARY_CLOUD_NAME=""
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=""
   ```

4. Set up database

   ```bash
   npx prisma migrate dev
   ```

5. Start the server
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth APIs

```
✅️ POST  /api/v1/auth/login                    Login User
✅️ POST  /api/v1/auth/send-email             Send Email (e.g., reset link)
✅️ POST  /api/v1/auth/reset-password         Reset Password
✅️ POST  /api/v1/auth/refresh-token          Generate Refresh Token
✅️ PATCH  /api/v1/auth/change-password        Change Password
```

### User APIs

```
✅️ POST  /api/v1/users                     Create User
✅️ PATCH  /api/v1/users/:id/status          Update User Status/Role (Admin)
✅️ GET   /api/v1/users/me                Get My Profile
✅️ GET   /api/v1/users/:id                Get Single User
✅️ PATCH  /api/v1/users/:id/profile         Update Profile
```

### Admin APIs

```
✅️ GET   /api/v1/admin/ideas              Get All Ideas (Admin View)
✅️ GET   /api/v1/admin/users              Get All Users
✅️ PATCH  /api/v1/admin/ideas/:id/status    Update Idea Status (Approve/Reject)
✅️ PATCH  /api/v1/admin/users/:id/status   Update User Status (e.g., isActive)
```

### Idea APIs

```
✅️ POST  /api/v1/ideas/drafts             Draft an Idea
✅️ GET   /api/v1/ideas                   Get All Ideas (Public)
✅️ GET   /api/v1/ideas/:id               Get an Idea
✅️ PUT   /api/v1/ideas/:id               Update an Idea
✅️ DELETE  /api/v1/ideas/:id              Delete an Idea
✅️ POST  /api/v1/ideas                   Create an Idea (Submit for Review)
✅️ GET   /api/v1/ideas/me                Get All Own Ideas
```

### Payment APIs

```
✅️ POST  /api/v1/payments                Create a Payment (Paid Ideas)
✅️ GET   /api/v1/payments                Get All Payments (Admin)
✅️ GET   /api/v1/payments/me             Get Member Payments
✅️ GET   /api/v1/payments/:id            Get Payment Details
✅️ PATCH  /api/v1/payments/:id/validate   Validate a Payment
```

### Comment APIs

```
✅️ POST  /api/v1/comments                Create Comment
✅️ GET   /api/v1/comments/:id            Get Comment
✅️ DELETE  /api/v1/comments/:id           Delete Comment
```

### Category APIs

```
✅️ POST  /api/v1/categories              Create Category (Admin)
✅️ GET   /api/v1/categories              Get All Categories
```

### Vote APIs

```
✅️ POST  /api/v1/votes             Register Vote (Upvote/Downvote)
✅️ DELETE  /api/v1/votes/:id          Remove Vote
✅️ GET   /api/v1/votes/me           Get Current User’s Vote for an Idea
✅️ GET   /api/v1/ideas/sorted-by-votes   	Get All Ideas Sorted by Votes
✅️ GET   /api/v1/votes/stats          Get Upvote/Downvote Stats
```

## 👥 Contributors

<a href="https://github.com/mdrakibmia99">
  <img src="https://avatars.githubusercontent.com/mdrakibmia99" width="40" style="border-radius: 50%;" />
</a>
<a href="https://github.com/Md-Rashedul-Islam-Rajib">
  <img src="https://avatars.githubusercontent.com/Md-Rashedul-Islam-Rajib" width="40" style="border-radius: 50%;" />
</a>
<a href="https://github.com/khaledssbd">
  <img src="https://avatars.githubusercontent.com/khaledssbd" width="40" style="border-radius: 50%;" />
</a>
<a href="https://github.com/krHasan">
  <img src="https://avatars.githubusercontent.com/krHasan" width="40" style="border-radius: 50%;" />
</a>
<a href="https://github.com/Rakesh01999">
  <img src="https://avatars.githubusercontent.com/Rakesh01999" width="40" style="border-radius: 50%;" />
</a>
<a href="https://github.com/Farsit-007">
  <img src="https://avatars.githubusercontent.com/Farsit-007" width="40" style="border-radius: 50%;" />
</a>
<a href="https://github.com/Rahib38">
  <img src="https://avatars.githubusercontent.com/Rahib38" width="40" style="border-radius: 50%;" />
</a><a href="https://github.com/al-af-muktadir">
  <img src="https://avatars.githubusercontent.com/al-af-muktadir" width="40" style="border-radius: 50%;" />
</a>

---

![alt text](think-greenly-one.vercel.app_.png)

## License

MIT (do whatever you want to do :smile: )
