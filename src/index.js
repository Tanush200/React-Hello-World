import React from 'react'; // Component's First letter is always Capital
import ReactDOM from 'react-dom/client';
import App from './App';  // import App
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App/>   // Write the componet name 
  </React.StrictMode>
);

 