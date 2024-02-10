import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/create-ticket">Create Ticket</Link></li>
        <li><Link to="/list-tickets">List Tickets</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
