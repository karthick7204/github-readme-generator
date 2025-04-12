import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import markdownRoutes from './routes/markdownRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', markdownRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
