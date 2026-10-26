# 21 Savage Fan Message Board

A full-stack message board where users can post messages and interact with other entries.

I built this project to practice CRUD functionality using Node.js, Express, EJS, and MongoDB. The page uses a black background, white text, and an embedded GIF from GIPHY.

## Live Application

Render:(https://savage-demo-exbm.onrender.com/)

## Screenshot

<img width="600" height="600" alt="savage-demo" src="https://github.com/user-attachments/assets/cb824c26-ce84-4c3a-af9d-6fa786516787" />

## Features

- Add a message with a name.
- View saved messages.
- Increase or decrease a message’s vote count.
- Delete messages.
- Display an embedded GIPHY animation.

This application does not include authentication. Everyone shares the same message board.

## CRUD Functionality

- **Create:** Add a message.
- **Read:** Display messages saved in MongoDB.
- **Update:** Change a message’s vote count.
- **Delete:** Remove a message.

## Tools Used

- **HTML and EJS:** Structure the page and display database information.
- **CSS:** Style the page with a black background and white text.
- **JavaScript:** Handle voting and delete button clicks.
- **Node.js:** Run the server-side JavaScript.
- **Express:** Handle requests and routes.
- **MongoDB Atlas:** Host the database.
- **MongoDB Node.js driver:** Connect the server to MongoDB.
- **body-parser:** Read submitted form and JSON data.
- **dotenv:** Load the private database connection setting.
- **Nodemon:** Restart the server during development.

## How It Works

The browser sends requests to Express when someone adds, votes on, or deletes a message.

Express reads or changes the information in MongoDB. EJS displays the saved messages when the homepage loads.

The routes are defined directly in `server.js`.

## Run Locally

1. Clone this repository and open the project folder.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file beside `server.js`:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Use your own Atlas database credentials and allow your current IP address in Atlas.

5. Start the server:

   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000).

The application uses the `savage-demo` database.

## Routes

- `GET /` — Load and display messages.
- `POST /messages` — Save a message.
- `PUT /messages` — Update a message’s vote count.
- `DELETE /messages` — Delete a message.

## Environment Variables

- `MONGODB_URI` — The private MongoDB connection string.
- `PORT` — Provided by the hosting service; defaults to 3000 locally.

The `.env` file and `node_modules/` are excluded through `.gitignore`.

## What I Learned

- How to build CRUD routes with Express.
- How to connect an application to MongoDB.
- How to display saved information using EJS.
- How to send requests using fetch.
- How to style a page and embed a GIF.
- How to keep database credentials in environment variables.
- How to prepare a Node.js application for Render.

## Credits

- Based on the `savage-demo` starter provided through Resilient Coders coursework.
- GIF hosted on [GIPHY](https://giphy.com/). The original GIF link and credit are included beside the embed on the webpage.

I do not claim ownership of the GIF or its underlying footage.
