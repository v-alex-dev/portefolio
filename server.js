import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import cors from 'cors'; 
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config } from 'dotenv';
import { log } from 'console';
config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());
// Serve static files from the React frontend app
// Put all API endpoints under '/api'


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});