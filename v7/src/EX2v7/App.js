import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Menu from './components/Menu';
import CreateTicket from './components/CreateTicket';
import ListTickets from './components/ListTickets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/create-ticket' element={<CreateTicket/>} />
          <Route path='/list-tickets' element={<ListTickets/>} />


        </Routes>

      </BrowserRouter>
    </Provider>
  );
};

export default App;
