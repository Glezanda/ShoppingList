// ShoppingListTile.js
import React from 'react';

const ShoppingListTile = ({ list }) => {
  return (
    <div className="shopping-list-tile">
      <h3>{list.name}</h3>
      <p>Owner: {list.owner}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ShoppingListTile;
