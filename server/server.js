// File: server/server.js
import express from "express";
import cors from "cors";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const upload = multer({ dest: "uploads/" });

let users = []; // In-memory for now

app.post("/api/register", upload.single("photo"), (req, res) => {
  const { firstName, lastName, email, bio, linkedin } = req.body;
  const id = uuidv4();
  const photo = req.file ? `/uploads/${req.file.filename}` : null;

  const user = { id, firstName, lastName, email, bio, linkedin, photo };
  users.push(user);
  res.status(201).json({ user });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
});

app.get("/api/search", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const results = users.filter(
    (u) =>
      u.firstName.toLowerCase().includes(q) ||
      u.lastName.toLowerCase().includes(q) ||
      u.bio.toLowerCase().includes(q)
  );
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
