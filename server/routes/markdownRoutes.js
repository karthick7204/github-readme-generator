import express from 'express';
import { generateMarkdownController } from '../controllers/markdownController.js';

const router = express.Router();

router.post('/generate', generateMarkdownController);

export default router;
