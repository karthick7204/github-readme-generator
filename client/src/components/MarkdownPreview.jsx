import React from 'react';

export default function MarkdownPreview({ markdown }) {
  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    link.click();
  };

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-semibold mb-4">Preview Markdown</h2>
      <textarea
        className="w-full h-96 border p-3 font-mono text-sm rounded resize-none"
        value={markdown}
        readOnly
      />

      <div className="flex gap-3 mt-4">
        <button onClick={() => navigator.clipboard.writeText(markdown)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Copy</button>
        <button onClick={downloadMarkdown} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Download</button>
      </div>
    </div>
  );
}
