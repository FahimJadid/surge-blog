# Surge Blog Application

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Description

Surge Blog is a modern, responsive web application for creating and sharing blog posts. It features a clean, intuitive interface with functionalities like user authentication, blog post creation, commenting, and social interactions such as likes and bookmarks.

## Technologies

- React 
- TypeScript 
- Vite 
- Shadcn
- Axios
- React Router DOM 
- Lucide React

## Installation

To set up the Surge Blog application locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/FahimJadid/surge-blog.git
   cd surge-blog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add necessary environment variables (see [Environment Variables](#environment-variables) section).

## Usage

To run the application in development mode:

```
npm run dev
```

To build the application for production:

```
npm run build
```

To preview the production build:

```
npm run preview
```

## Endpoints

The application interacts with a backend API. Here are the main endpoints:

- `GET /blog/bulk`: Fetch all blog posts
- `GET /blog/:id`: Fetch a specific blog post
- `POST /blog`: Create a new blog post
- `PUT /blog/:id`: Update an existing blog post
- `DELETE /blog/:id`: Delete a blog post

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_BACKEND_URL=your_api_base_url

```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.