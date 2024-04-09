import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Modal.css'; // Import modal styles from the correct path
import Modal from './Modal'; // Import modal component from the correct path

// Import add_icon.png and back_icon.png
import addIcon from '../images/add_icon.png';
import backIcon from '../images/back_icon.png';

function CreateShoppingList({ addNewShoppingList }) {
  const [showModal, setShowModal] = useState(false);
  const [newListName, setNewListName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setNewListName(e.target.value);
    setError(''); // Clear error when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newListName.trim() === '') {
      setError('Please enter a valid shopping list name.'); // Set error message
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/shoppingList/create', {
        name: newListName,
        // You may need to include other data in the request body, depending on your API requirements
      });
      // If the request is successful, add the new shopping list to the state
      addNewShoppingList(response.data);
      // Clear the input field after submission
      setNewListName('');
      setShowModal(false); // Close the modal after submission
    } catch (error) {
      console.error('Error creating shopping list:', error.response.data);
      setError('An error occurred while creating the shopping list. Please try again later.');
    }
  };

  const handleBackNavigation = () => {
    // Implement navigation logic here
  };

  return (
    <div>
      <div className="create-list-header">
        <button onClick={() => setShowModal(true)}>
          <img src={addIcon} alt="Create New Shopping List" width="20" height="20" />
        </button>
        <button onClick={handleBackNavigation}>
          <img src={backIcon} alt="Back to Overview" width="20" height="20" />
        </button>
      </div>
      {/* Add button outside the modal */}
      <button onClick={() => setShowModal(true)}>Create New Shopping List</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Create New Shopping List</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter shopping list name"
              value={newListName}
              onChange={handleInputChange}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there's an error */}
            <button type="submit">Create</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default CreateShoppingList;
