import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingListTile.css'; // Import CSS file for styling

const ShoppingListTile = ({ list }) => {
  return (
    <div className="shopping-list-tile">
      <Link to={`/shopping-list/${list.id}`} className="tile-link">
        <h3 className="tile-name">{list.name}</h3>
        <p className="tile-owner">Owner: {list.owner}</p>
        <p className="tile-members">Members: {list.members ? list.members.join(', ') : ''}</p>
        {/* Add more details as needed */}
      </Link>
    </div>
  );
};

export default ShoppingListTile;
