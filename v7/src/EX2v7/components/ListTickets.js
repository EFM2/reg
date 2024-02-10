import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTicket } from '../actions/action';
import GererTicket from './GererTicket';

const ListTickets = () => {
  const tickets = useSelector(state => state.tickets);
  const dispatch = useDispatch();
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleDelete = ticketId => {
    dispatch(deleteTicket(ticketId));
  };

  const handleEdit = ticket => {
    setSelectedTicket(ticket);
  };

  return (
    <div>
      <h2>Liste des Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>IdTicket</th>
            <th>Date</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Description</th>
            <th>Priorité</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.date}</td>
              <td>{ticket.nom}</td>
              <td>{ticket.categorie}</td>
              <td>{ticket.description}</td>
              <td>{ticket.priorite}</td>
              <td>{ticket.statut}</td>
              <td>
                <button onClick={() => handleEdit(ticket)}>Gerer Ticket</button>
                <button onClick={() => handleDelete(ticket.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTicket && <GererTicket ticket={selectedTicket} />}
    </div>
  );
};

export default ListTickets;
