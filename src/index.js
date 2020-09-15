import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FamilyProvider from './global/family';
import ManagerProvider from './global/manager';

ReactDOM.render(
  <React.StrictMode>
  <ManagerProvider>
      <FamilyProvider>
        <App />
      </FamilyProvider>
    </ManagerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
