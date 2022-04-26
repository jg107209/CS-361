import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Inventory from './pages/Inventory';
import Navbar from './components/Navbar';
import Wishlist from './pages/WishList';
import AdminPage from './pages/AdminPage';
import HelpPage from './pages/HelpPage';

function App() {

  return (

    <div className="App-header">

      <BrowserRouter>
      
      <Navbar />

        <div className="App-content">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/WishList" element={<Wishlist />} />
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/HelpPage" element={<HelpPage />} />
          </Routes>

        </div>

      </BrowserRouter>

    </div>
  );
}

export default App;
