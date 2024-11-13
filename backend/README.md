# Surge Backend

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Description

Surge Backend is a server-side application built with Hono, Prisma, and Zod. It provides a robust and scalable backend for managing user authentication and blog posts. The project leverages Cloudflare Workers for deployment, ensuring high availability and performance.

## Technologies

- **Hono**: A small, simple, and fast web framework for Cloudflare Workers.
- **Prisma**: A next-generation ORM for Node.js and TypeScript.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **Cloudflare Workers**: A serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.

## Installation

### Prerequisites

- Node.js (v20 or higher)
- npm (v8 or higher)
- Wrangler CLI (for Cloudflare Workers)
- PostgreSQL (for Prisma) locally or Aiven or Neon.tech
- Prisma Accelerate for connection pooling

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FahimJadid/surge-blog.git
   cd surge-blog
   ```

2. **Install dependencies:**   

   ```bash
   npm install
   ```

3. **Set up Prisma:**   

   ```bash
   npx prisma generate
   ```   

3. **Configure environment variables:**   
Create a .env file in the root directory and add the following variables:
Use your local PostgreSQL or Aiven or Neon Database URL for DIRECT_URL.

   ```bash
   DIRECT_URL=your_database_url
   ```      

3. **Configure wrangler.toml variables:**   
Login to Prisma Accelerate for connection pooling and add the URL to the DATABASE_URL variable and a random string for JWT_SECRET variable to wrangler.toml:

   ```bash
   name = "backend"
   main = "src/index.ts"
   compatibility_date = "2024-11-10"

   [vars]
   DATABASE_URL = "your_prisma_accelerator_url"
   JWT_SECRET = "your_jwt_secret"
   ```      


## Usage

### Development

To start the development server, run the following command:

    ```bash
    npm run dev
    ```

This will start the server using Wrangler in development mode.

### Development

To deploy the application to Cloudflare Workers, run:

    ```bash
    npm run deploy
    ```


## API Endpoints

### User Authentication

- **POST /api/v1/user/signup**: Register a new user.
- **POST /api/v1/user/login**: Login an existing user.

### Blog Posts

- **GET /api/v1/blog/bulk**: Get all blog posts.
- **POST /api/v1/blog**: Create a new blog post.
- **PUT /api/v1/blog**: Update an existing blog post.
- **GET /api/v1/blog/:id**: Get a single blog post.
