import React, { useState } from 'react';

export default function InputForm({ onGenerate }) {
  const [form, setForm] = useState({
    name: '',
    about: '',
    currentProject: '',
    skills: '',
    socials: {
      github: '',
      linkedin: '',
      twitter: '',
      devto: '',
      medium: '',
      website: '',
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in form.socials) {
      setForm(prev => ({
        ...prev,
        socials: { ...prev.socials, [name]: value }
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      skills: form.skills.split(',').map(s => s.trim()),
    };
    onGenerate(payload);
  };

  return (
    <form className="bg-white shadow-md rounded p-6" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">Enter Your Info</h2>

      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="input" />
      <input type="text" name="about" placeholder="About" onChange={handleChange} className="input" />
      <input type="text" name="currentProject" placeholder="Current Project" onChange={handleChange} className="input" />
      <input type="text" name="skills" placeholder="Skills (comma-separated)" onChange={handleChange} className="input" />

      <hr className="my-4" />
      <p className="font-medium mb-2">Social Links</p>

      {["github", "linkedin", "twitter", "devto", "medium", "website"].map((social) => (
        <input key={social} type="text" name={social} placeholder={social} onChange={handleChange} className="input" />
      ))}

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Generate README</button>
    </form>
  );
}
