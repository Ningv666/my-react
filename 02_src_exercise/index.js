import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Weather from './Weather';
// import reportWebVitals from './reportWebVitals'; 用于性能测试，暂时用不上

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <div>
    <App />
    <Weather address="北京市" />
  </div>
  // </React.StrictMode>
);


