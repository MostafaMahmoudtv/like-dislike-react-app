import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="title">User List</h1>

      <input
        type="text"
        className="search-input"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p className="loading">Loading users...</p>
      ) : (
        <div className="user-list">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id} className="user-card">
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
              </div>
            ))
          ) : (
            <p className="no-users">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
