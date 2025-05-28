import React, { useState } from "react";
import { searchUsers } from "../api";
import { Link } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) {
      setResults([]);
      return;
    }
    try {
      const users = await searchUsers(query);
      setResults(users);
      setError("");
    } catch (err) {
      setError(err.message);
      setResults([]);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Users</h1>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter name, email, or LinkedIn"
          className="border p-2 flex-grow"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded">
          Search
        </button>
      </form>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <ul className="space-y-4">
        {results.length === 0 && <p>No users found.</p>}
        {results.map((user) => (
          <li key={user.id} className="border p-4 rounded flex items-center gap-4">
            <img
              src={`http://localhost:3001/uploads/${user.photoFilename}`}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <Link to={`/profile/${user.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {user.firstName} {user.lastName}
              </Link>
              <p>{user.bio}</p>
              <a href={user.linkedin} target="_blank" rel="noreferrer" className="text-sm text-blue-500">
                LinkedIn Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
