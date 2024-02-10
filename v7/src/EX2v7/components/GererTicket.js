import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTicket } from "../actions/action";

function GererTicket({ ticket}) {
  const [updatedTicket, setUpdatedTicket] = useState(ticket);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setUpdatedTicket({ ...updatedTicket, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTicket(updatedTicket))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input readOnly value={updatedTicket.idTicket} />
      <input name="nom" value={updatedTicket.nom} onChange={handleChange} />
      <textarea name="description" value={updatedTicket.description} onChange={handleChange} />
      <select name="priorite" value={updatedTicket.priorite} onChange={handleChange}>
        <option value="Faible">Faible</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Haute">Haute</option>
        <option value="Critique">Critique</option>
      </select>
      <input name="statut" value={updatedTicket.statut} onChange={handleChange} />
      <button type="submit">Update Ticket</button>
    </form>
  );
}
export default GererTicket