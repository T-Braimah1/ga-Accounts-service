import dotenv from 'dotenv'; // Dotenv is a package that lets us used environment variables
dotenv.config(); // we call this to initialise dotenv
import express from "express"; // We need express as it's the framework flor building APIs

const port = process.env.PORT; // get the PORT variable from the ,env file
const app = express(); // create a new express application

app.use(express.json()); // this configures express to read request body when a user sends data

async function startServer() { // async functions can wait for things to happen e.g. an API enquiry response(await)
  try { // try to start the server using app.listen
    app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`));
  } catch (err) { // if there's an error, tell us
    console.log("🤖 Oh no something went wrong", err);
  }
}

startServer();