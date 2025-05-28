import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin-auth");
    if (!isAdmin) {
      navigate("/admin-login");
    } else {
      fetch("http://localhost:3001/api/users")
        .then((res) => res.json())
        .then(setUsers);
    }
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.firstName} {user.lastName} - {user.bio}
          </li>
        ))}
      </ul>
    </div>
  );
}
