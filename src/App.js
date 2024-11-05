import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      
      <div className="main-layout">
        <Sidebar />
      
      </div>
    </div>
  );
}

export default App;
