export const addTicket = ticket => ({
  type: 'ADD_TICKET',
  payload: ticket,
});


export const deleteTicket = ticketId => ({
  type: 'DELETE_TICKET',
  payload: ticketId,
});


export const updateTicket = ticket => ({
  type: 'UPDATE_TICKET',
  payload: ticket,
});
