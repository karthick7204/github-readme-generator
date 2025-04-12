import React, { useState } from 'react';
import InputForm from './components/InputForm';
import MarkdownPreview from './components/MarkdownPreview';

export default function App() {
  const [markdown, setMarkdown] = useState('');

  const handleGenerate = async (formData) => {
    const res = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const { markdown } = await res.json();
    setMarkdown(markdown);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub README Profile Generator</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputForm onGenerate={handleGenerate} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
}

