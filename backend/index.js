import express from 'express';

import { dbConnect } from './config/db.js';

import router from './route/userRoute.js'; 
import fileUpload from 'express-fileupload';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(fileUpload());
app.use(cors());
const PORT = 9000;
dbConnect()
app.use('/api', router);
app.listen(PORT, () => {
  console.log("Server Running...");

})
// http://localhost:9000/api/login