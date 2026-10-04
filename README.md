# 🤖 AI Virtual Assistant

A full-stack AI-powered virtual assistant built with **React, Node.js, Express, MongoDB, and Gemini API**. The assistant understands natural-language commands and can perform different actions such as answering questions, searching Google and YouTube, playing videos, opening social media, checking the weather, and providing the current date and time.

## ✨ Features

- 🤖 AI-powered conversational responses
- 🎙️ Voice-enabled virtual assistant interface
- 🧠 Natural-language command understanding using Gemini
- 🔍 Google search commands
- ▶️ YouTube search and video playback
- 🌦️ Weather information
- 🕐 Current time and date
- 📅 Day and month information
- 🧮 Calculator access
- 📸 Instagram access
- 📘 Facebook access
- 🔐 User authentication
- 🔑 JWT-based authentication
- 🔒 Password hashing with bcrypt
- ☁️ Cloudinary integration for media handling
- 👤 User profile management
- 🗄️ MongoDB database integration
- 🌐 REST API architecture
- 📱 React-based responsive frontend

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- React Router
- Axios
- React Icons
- JavaScript (ES6+)

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Axios
- Cookie Parser
- CORS
- Multer
- Cloudinary
- Dotenv
- Nodemon

### AI

- Gemini API
- Natural Language Processing
- Intent classification
- AI-generated responses

## 🏗️ Project Architecture

```text
AI/
└── virtualAssistant/
    │
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   ├── index.html
    │   ├── vite.config.js
    │   ├── package.json
    │   └── ...
    │
    └── backend/
        ├── config/
        ├── controllers/
        ├── middleware/
        ├── models/
        ├── public/
        ├── routes/
        ├── gemini.js
        ├── index.js
        ├── package.json
        └── ...
```

## 🔄 How It Works

The application follows a frontend-backend architecture:

```text
User
  │
  ▼
React Frontend
  │
  ▼
Express Backend
  │
  ├── Authentication
  │
  ├── User Management
  │
  └── Gemini API
          │
          ▼
    Intent Detection
          │
          ▼
    Assistant Action
```

### Assistant Command Flow

When the user gives a command, the backend sends the command to the Gemini API.

Gemini identifies the user's intent and returns structured information such as:

```json
{
  "type": "youtube-search",
  "userInput": "latest Java tutorials",
  "response": "Here's what I found."
}
```

The frontend can then use the returned intent to perform the appropriate action.

## 🧠 Supported Assistant Commands

The assistant currently supports several command types:

| Command | Purpose |
|---|---|
| `general` | Answer general questions |
| `google-search` | Search Google |
| `youtube-search` | Search YouTube |
| `youtube-play` | Play a YouTube video |
| `get-time` | Get the current time |
| `get-date` | Get today's date |
| `get-day` | Get the current day |
| `get-month` | Get the current month |
| `calculator-open` | Open calculator |
| `instagram-open` | Open Instagram |
| `facebook-open` | Open Facebook |
| `weather-show` | Show weather information |

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

```bash
cd AI
```

### 2. Setup the Backend

Navigate to the backend:

```bash
cd virtualAssistant/backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_URL=your_gemini_api_url
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:8000
```

### 3. Setup the Frontend

Open another terminal and navigate to:

```bash
cd virtualAssistant/frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## 🔐 Environment Variables

The project requires environment variables for services such as:

- MongoDB
- Gemini API
- JWT authentication
- Cloudinary

**Never commit your `.env` file or API keys to GitHub.**

Make sure `.env` is included in your `.gitignore`.

Example:

```text
.env
node_modules/
dist/
```

## 📡 Backend API

The backend exposes REST endpoints for authentication and user management.

Main API groups:

```text
/api/auth
/api/user
```

The root endpoint also processes assistant prompts:

```text
GET /
```

Example:

```text
http://localhost:8000/?prompt=What%20is%20the%20weather%20today
```

## 🚀 Running the Project

You need **two terminals**.

### Terminal 1 — Backend

```bash
cd virtualAssistant/backend
npm install
npm run dev
```

### Terminal 2 — Frontend

```bash
cd virtualAssistant/frontend
npm install
npm run dev
```

Then open the frontend URL shown by Vite, usually:

```text
http://localhost:5173
```

## 📌 Future Improvements

- [ ] Improve voice recognition
- [ ] Add conversation history
- [ ] Add streaming AI responses
- [ ] Add more assistant commands
- [ ] Add personalized assistant settings
- [ ] Add real-time weather integration
- [ ] Improve error handling
- [ ] Add loading states
- [ ] Add better mobile responsiveness
- [ ] Deploy frontend and backend
- [ ] Add automated testing

## 👨‍💻 Author

**Jaydev Singh**

Full-Stack Developer | AI & Backend Enthusiast

---

⭐ If you found this project useful, consider giving the repository a star.