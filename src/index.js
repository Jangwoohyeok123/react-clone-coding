import React from 'react'; 
import ReactDOM from 'react-dom/client'; // DOM을 다룰 수 있는 모듈 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);