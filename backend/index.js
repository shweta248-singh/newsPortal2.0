import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dbConnect } from './Config/db.js';

import router from './route/userRoute.js'; 
import fileUpload from 'express-fileupload';
import cors from 'cors'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line && !line.trim().startsWith('#'))
    .forEach((line) => {
      const [key, ...valueParts] = line.split('=');
      if (key && !process.env[key.trim()]) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
}

app.use(express.json());
app.use(fileUpload());
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 9000;
app.use('/api', router);

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on port ${PORT}...`);
    })
  })
  .catch((error) => {
    console.error("Database connection failed.");
    console.error(error.message);
    process.exit(1);
  });
// http://localhost:9000/api/login
