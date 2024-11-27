# Surge Blog: Full-Stack Application

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
  - [Backend Usage](#backend-usage)
  - [Frontend Usage](#frontend-usage)
- [API Endpoints](#api-endpoints)
  - [User Authentication](#user-authentication)
  - [Blog Posts](#blog-posts)
- [Environment Variables](#environment-variables)
- [License](#license)

---

## Description
**Surge Blog** is a full-stack application designed for creating, managing, and sharing blog posts. It features a **robust backend** built with modern web technologies for scalability and performance and a **user-friendly frontend** offering a responsive and intuitive interface. Key functionalities include user authentication, blog post management, and social interactions like likes, comments, and bookmarks.

---

## Technologies

### Backend
- **Hono**: Lightweight and fast web framework for Cloudflare Workers.
- **Prisma**: ORM for seamless database management.
- **Zod**: Schema validation for TypeScript.
- **Cloudflare Workers**: Serverless deployment for high availability.

### Frontend
- **React**: Modern JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Vite**: Fast development server and build tool.
- **Shadcn**: Component library for styling.
- **Axios**: HTTP client for API requests.
- **React Router DOM**: Routing for single-page applications.
- **Lucide React**: Icons for UI.

---

## Installation

### Backend Setup
#### Prerequisites
- Node.js (v20+)
- npm (v8+)
- PostgreSQL (local or cloud-based like Aiven or Neon.tech)
- Wrangler CLI (for Cloudflare Workers)

#### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/FahimJadid/surge-blog.git
   cd surge-blog/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Prisma:
   ```bash
   npx prisma generate
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory:
     ```env
     DIRECT_URL=your_database_url
     ```
   - Update `wrangler.toml` for deployment:
     ```toml
     name = "backend"
     main = "src/index.ts"
     compatibility_date = "2024-11-10"

     [vars]
     DATABASE_URL = "your_prisma_accelerator_url"
     JWT_SECRET = "your_jwt_secret"
     ```

### Frontend Setup
1. Clone the repository (if not already cloned):
   ```bash
   git clone https://github.com/FahimJadid/surge-blog.git
   cd surge-blog/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file:
     ```env
     VITE_BACKEND_URL=your_api_base_url
     ```

---

## Usage

### Backend Usage
- **Development Mode**:
  ```bash
  npm run dev
  ```
- **Deploy to Cloudflare Workers**:
  ```bash
  npm run deploy
  ```

### Frontend Usage
- **Development Mode**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## API Endpoints

### User Authentication
- **POST** `/api/v1/user/signup`: Register a new user.
- **POST** `/api/v1/user/login`: Login an existing user.

### Blog Posts
- **GET** `/api/v1/blog/bulk`: Fetch all blog posts.
- **POST** `/api/v1/blog`: Create a new blog post.
- **PUT** `/api/v1/blog`: Update an existing blog post.
- **GET** `/api/v1/blog/:id`: Fetch a single blog post.

---

## Environment Variables

### Backend
Add the following to a `.env` file:
```env
DIRECT_URL=your_database_url
DATABASE_URL=your_prisma_accelerator_url
JWT_SECRET=your_jwt_secret
```

### Frontend
Add the following to a `.env` file:
```env
VITE_BACKEND_URL=your_api_base_url
```

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
