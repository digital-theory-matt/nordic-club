import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const customerPortal = 'https://billing.stripe.com/p/login/test_9AQ01o1wW8rr5sk000'

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App page='home' customerPortal={customerPortal} />} />
        <Route path="/memberships" element={<App page='memberships' customerPortal={customerPortal} />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index />
);

// Performance measuring
reportWebVitals();
