import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppR from './AppR';
import { Provider } from 'react-redux';
import store from './store';
import articleStore from './articleStore';
import AppA from './AppA';
import { BrowserRouter } from 'react-router-dom';
import Affichage from './loc_server_tp/affichage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
/*   <Provider store={store}>
 <App/> 
<AppR/>

</Provider> */
/*<BrowserRouter>
<Provider store={articleStore}>
  <AppA/>
</Provider></BrowserRouter>*/
<React.StrictMode>
  <Affichage/>
</React.StrictMode>
);

