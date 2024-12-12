<div align="center">

  <h3 align="center">Spotify Clone</h3>

  <div style="margin-top: 20px; margin-bottom: 30px;">
    <img src="https://img.shields.io/badge/react.js-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react.js" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="tailwindcss" />
<img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
<img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express.js" />
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

This project is a functional replica of the Spotify platform, designed as a fullstack application combining a powerful frontend and a robust backend. The goal is to deliver an experience similar to the official app, allowing users to explore music, manage playlists, and simulate the typical flow of a streaming platform.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Frontend**: React.js and Tailwind CSS to build a modern, dynamic, and responsive interface.

- **Backend**: Express.js and MongoDB, providing a solid API to manage data and operations related to users, playlists, and songs.

## <a name="features">🔋 Features</a>

🖥️ **List playlists** stored in the database.

🎶 **Play songs** directly from the interface.

🔒 **Google login** for authentication.

📡 **Database connection** to fetch and display data dynamically.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/mestradafite/spotify-clone.git
cd spotify-clone
```

**Installation**

1. Set Up the **Frontend**

```bash
cd frontend
npm install       # Install dependencies
npm run dev       # Start the React development server
```

The frontend will run at http://localhost:5173 by default.

2. Set Up the **Backend**

```bash
cd backend
npm install # Install dependencies
npm run dev # Start the Express development server
```

The backend will run at http://localhost:5000 by default.

3. Set Up **MongoDB**

   Make sure you have MongoDB installed and running locally, or use a cloud-based MongoDB instance like MongoDB Atlas. Update the connection string in the backend/.env file:

```bash
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

4. Run the **Application**

Frontend: Open your browser at http://localhost:5173.
Backend: Ensure the API is running and connected to MongoDB.
