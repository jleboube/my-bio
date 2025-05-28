import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}
