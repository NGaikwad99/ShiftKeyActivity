import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Activity from './Activity';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Router, browserHistory } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Router>
  //   <Route path={'app'} component={App}/>
  //   <Route path={'activity'} component={Activity}/>
  // </Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
