import React, { useState } from "react";
import { registerUser } from "../api";

export default function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    linkedin: "",
    photo: null,
  });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm((f) => ({ ...f, photo: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in form) {
        if (form[key]) formData.append(key, form[key]);
      }
      const result = await registerUser(formData);
      setMessage("Registration successful! User ID: " + result.user.id);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        bio: "",
        linkedin: "",
        photo: null,
      });
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Register User</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={form.bio}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          type="url"
          name="linkedin"
          placeholder="LinkedIn Profile URL"
          value={form.linkedin}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input type="file" name="photo" onChange={handleChange} accept="image/*" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Register
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
