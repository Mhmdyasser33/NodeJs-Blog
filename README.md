# NodeJS Blog Application

A full-stack blog application built with Express.js, MongoDB, and EJS templating, featuring both public blog functionality and administrative content management.

## Features

- **Public Blog Interface**: View and search blog posts with pagination
- **Admin Dashboard**: Protected administrative interface for content management
- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **Database Integration**: MongoDB with Mongoose ODM
- **Responsive Design**: Mobile-friendly CSS styling
- **Search Functionality**: Real-time blog post search

## Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Server** | Express.js | 5.1.0 |
| **Database** | MongoDB + Mongoose | 8.15.1 |
| **Template Engine** | EJS | 3.1.10 |
| **Authentication** | JWT + bcrypt | 6.0.0 |
| **Session Management** | express-session + connect-mongo | - |

## Architecture

The application follows MVC architecture with clear separation between public and administrative functionality:

```
├── server.js                 # Application entry point
├── backend/
│   ├── config/
│   │   └── dbConnect.js      # Database connection setup
│   ├── models/
│   │   ├── Post.js           # Blog post data model
│   │   └── User.js           # User authentication model
│   ├── controllers/
│   │   ├── postController.js # Public blog logic
│   │   └── adminController.js# Admin panel logic
│   └── routes/               # Route handlers
├── views/                    # EJS templates
└── public/                   # Static assets (CSS, JS)
```

## Database Connection

The application uses a centralized MongoDB connection through Mongoose ODM . The connection is established during server startup with proper error handling and logging.

### Connection Configuration

- **Connection Method**: `mongoose.connect()` with environment variable
- **Strict Query**: Disabled for flexible blog content queries
- **Error Handling**: Comprehensive try-catch with detailed logging

## Data Models

### Post Model [2](#0-1) 

- `title`: Required string field for post headlines
- `body`: Required string field for post content  
- `timestamps`: Automatic creation and update tracking

### User Model [3](#0-2) 

- `username`: Required, unique string for user identification
- `password`: Required string for authentication (bcrypt hashed)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NodeJs-Blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file with:
   ```
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   JWT_SECRET=your_jwt_secret
   PORT=4000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

The server will start on port 4000.

## Server Configuration

The Express server is configured with a comprehensive middleware stack :

- JSON and URL-encoded body parsing
- Static file serving from `public/` directory
- Cookie parsing for JWT tokens
- Session management with MongoDB store
- Method override for HTTP forms
- EJS templating with layouts

## Authentication System

The application implements JWT-based authentication for administrative access:

- **Login Process**: Credential validation with bcrypt password comparison
- **Token Generation**: JWT tokens stored in HTTP-only cookies
- **Session Persistence**: MongoDB-backed session storage
- **Protected Routes**: Middleware-based route protection

## Admin Features

The admin dashboard provides comprehensive content management:

- **Dashboard**: Overview of all blog posts
- **Add Posts**: Create new blog content
- **Edit Posts**: Update existing posts
- **Delete Posts**: Remove posts from the database
- **Logout**: Secure session termination

## Public Interface

The public blog interface offers:

- **Homepage**: Paginated list of blog posts
- **Individual Posts**: Detailed post view
- **Search**: Real-time post search functionality
- **Responsive Design**: Mobile-optimized layout

## Development

The codebase uses ES6 modules throughout and follows modern JavaScript practices. The database connection is established before server startup to ensure proper initialization order.
