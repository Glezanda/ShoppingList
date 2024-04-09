import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users when component mounts
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  const handleDeleteUser = userId => {
    axios.delete(`/api/users/${userId}`)
      .then(response => {
        if (response.status === 200) {
          // If the response is successful, update the users state after successful deletion
          setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } else {
          // If the response is not successful, throw an error
          throw new Error('Failed to delete user');
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <p>ID: {user.id}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
