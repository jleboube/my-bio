// client/src/api.js
const API_BASE_URL = "http://localhost:3001/api";

export async function registerUser(data) {
  // data: FormData instance with firstName, lastName, email, bio, linkedin, photo (file)
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    body: data,
  });
  if (!response.ok) {
    throw new Error("Failed to register user");
  }
  return await response.json();
}

export async function fetchUsers() {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) throw new Error("Failed to fetch users");
  return await response.json();
}

export async function fetchUserById(id) {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) throw new Error("User not found");
  return await response.json();
}

export async function searchUsers(query) {
  const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("Search failed");
  return await response.json();
}
