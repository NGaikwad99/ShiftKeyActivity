import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Form from './Form';
import Final from './Final';
import logo from "./shiftkey-logo.png";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className='header'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Digital Defense 101: Demo</h1>
        </div>
        
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<Form />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
