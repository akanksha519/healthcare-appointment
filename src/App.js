// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';
import AppointmentForm from './components/AppointmentForm';
import './styles.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctorList />} />
      <Route path="/profile" element={<DoctorProfile />} />
      <Route path="/appointment" element={<AppointmentForm />} />
    </Routes>
  );
};

export default App;
