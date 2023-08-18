import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // You can create this CSS file for global styles if needed
import App from './App'; // This is the main component of your app
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance, you can use the following function.
// Learn more about this at https://bit.ly/CRA-vitals
reportWebVitals();
