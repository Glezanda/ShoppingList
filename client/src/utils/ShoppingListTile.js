import React from 'react';
import './ShoppingListTile.css'; // Import CSS file for styling

const ShoppingListTile = ({ item }) => {
  return (
    <div className="shopping-list-tile">
      <h3 className="tile-name">{item.name}</h3>
      <p className="tile-resolved">{item.resolved ? 'Resolved' : 'Unresolved'}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ShoppingListTile;
