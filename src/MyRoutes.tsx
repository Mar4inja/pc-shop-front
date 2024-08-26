import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './pages/login/Login';
import Signup from './components/signup/Signup'; // Ensure this path is correct

const MyRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Signup />} /> 
      </Routes>
    </Router>
  );
};

export default MyRoutes;
