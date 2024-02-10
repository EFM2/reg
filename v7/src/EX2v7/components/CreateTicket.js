import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTicket } from '../actions/action';

const CreerTicket = () => {
  const [ticket, setTicket] = useState({
    id: '',
    date: '',
    nom: '',
    categorie: '',
    description: '',
    priorite: '',
    statut: '',
  });

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTicket(ticket));
    // Réinitialiser le formulaire après avoir ajouté le ticket
    setTicket({
      id: '',
      date: '',
      nom: '',
      categorie: '',
      description: '',
      priorite: '',
      statut: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setTicket({ ...ticket, [name]: value });
  };

  return (
    <div>
      <h2>Créer un ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Id:
          <input type="text" name="id" value={ticket.id} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={ticket.date} onChange={handleChange} />
        </label>
        <label>
          Nom:
          <input type="text" name="nom" value={ticket.nom} onChange={handleChange} />
        </label>
        <label>
          Catégorie:
          <input type="text" name="categorie" value={ticket.categorie} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={ticket.description} onChange={handleChange} />
        </label>
        <label>
          Priorité:
          <input type="text" name="priorite" value={ticket.priorite} onChange={handleChange} />
        </label>
        <label>
          Statut:
          <input type="text" name="statut" value={ticket.statut} onChange={handleChange} />
        </label>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default CreerTicket;
