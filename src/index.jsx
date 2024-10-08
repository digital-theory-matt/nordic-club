import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const customerPortal = process.env.REACT_APP_CUSTOMER_PORTAL_URL;
console.log(customerPortal);

export default function Index() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App page='home' customerPortal={customerPortal} />} />
        <Route path="/memberships" element={<App page='memberships' customerPortal={customerPortal} />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index />
);

// Performance measuring
reportWebVitals();
