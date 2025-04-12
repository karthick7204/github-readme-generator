import { generateMarkdownTemplate } from '../services/markdownGenerator.js';

export const generateMarkdownController= (req, res) => {
  try {
    const data = req.body;
    const markdown = generateMarkdownTemplate(data);
    res.status(200).json({ markdown });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate markdown' });
  }
};
