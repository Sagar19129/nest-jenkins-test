"use client";

import { useState } from "react";
import Link from "next/link";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create User</h1>

      <Link href="/">
        <button style={{ marginBottom: "20px" }}>
          Back to Dashboard
        </button>
      </Link>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Role:</label><br />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
