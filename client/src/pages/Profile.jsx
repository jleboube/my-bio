import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/user/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch user profile");
        return res.json();
      })
      .then(setUser)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {user.firstName} {user.lastName}
      </h1>
      <img
        src={`http://localhost:3001/uploads/${user.photoFilename}`}
        alt="User profile"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      <p className="mb-2">{user.bio}</p>
      <a
        href={user.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        LinkedIn
      </a>
    </div>
  );
}