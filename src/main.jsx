import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // এই লাইনটি যোগ করুন
import App from './App';
import './index.css'; // আপনার সিএসএস ফাইল

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* পুরো অ্যাপকে ব্রাউজার রাউটার দিয়ে ঘিরে দিন */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);