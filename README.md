# Sparkboard - Idea Management Application

A full-stack web application for sharing and managing creative ideas. Built with Node.js, Express, MongoDB, and Vanilla JavaScript.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Features

- Create and submit new ideas with text, tags, and usernames
- Browse all submitted ideas in a responsive card layout
- Tag-based categorization system
- User-specific idea management (edit/delete your own ideas)
- Responsive design for desktop and mobile
- Real-time form validation

## Tech Stack

**Backend:**

- Node.js with Express.js
- MongoDB Atlas with Mongoose
- CORS middleware
- Environment configuration with dotenv

**Frontend:**

- Vanilla JavaScript (ES6+)
- Webpack for module bundling
- Axios for HTTP requests
- Font Awesome for icons
- Modern CSS with custom properties

## Project Structure

```
sparkboard-app/
├── server.js                    # Express server entry point
├── package.json                 # Backend dependencies
├── config/db.js                 # MongoDB connection
├── models/Idea.js               # Mongoose schema
├── routes/ideas.js              # API routes
├── public/                      # Built frontend files
└── client/                      # Frontend source
    ├── package.json             # Frontend dependencies
    ├── webpack.config.js        # Build configuration
    └── src/
        ├── index.html           # HTML template
        ├── index.js             # App entry point
        ├── css/style.css        # Styles
        ├── components/          # JavaScript components
        └── services/            # API service layer
```

## Installation

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account
- Git

### Setup

1. Clone the repository

```bash
git clone https://github.com/vsniranjan/sparkboard-app.git
cd sparkboard-app
```

2. Install dependencies

```bash
npm install
cd client && npm install && cd ..
```

3. Create environment file

```bash
# Create .env file in root directory
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Configure MongoDB Atlas

- Create a cluster and database user
- Whitelist your IP address
- Copy connection string to .env file

## Usage

### Development

Start backend server:

```bash
npm run dev
```

Start frontend development server:

```bash
cd client && npm run dev
```

Access the application at `http://localhost:3000`

### Production

Build frontend and start server:

```bash
cd client && npm run build && cd ..
npm start
```

## API Endpoints

### Ideas Resource (`/api/ideas`)

| Method   | Endpoint | Description       | Request Body              |
| -------- | -------- | ----------------- | ------------------------- |
| `GET`    | `/`      | Get all ideas     | None                      |
| `GET`    | `/:id`   | Get specific idea | None                      |
| `POST`   | `/`      | Create new idea   | `{ text, tag, username }` |
| `PUT`    | `/:id`   | Update idea       | `{ text, tag, username }` |
| `DELETE` | `/:id`   | Delete idea       | `{ username }`            |

All responses follow the format: `{ success: boolean, data: object }`

Users can only update/delete their own ideas based on username matching.

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
PORT=5000
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Niranjan V S**  
GitHub: [@vsniranjan](https://github.com/vsniranjan)
