import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const DoctorProfile = () => {
  const { selectedDoctor, setSelectedDoctor } = useAppContext();
  const navigate = useNavigate();

  if (!selectedDoctor) {
    return (
      <div className="container">
        <p>No doctor selected.</p>
        <button onClick={() => navigate("/")}>Back to List</button>
      </div>
    );
  }

  const { name, specialization, image, availability } = selectedDoctor;

  const handleBook = () => {
    // Optional safety check: reset selected doctor in context
    setSelectedDoctor(selectedDoctor);
    navigate("/appointment");
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/")}>← Back</button>
      <br/>
      <br/>
      <div className="doctor-profile">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Specialization: {specialization}</p>
        <p className={availability ? "available" : "unavailable"}>
          Status: {availability ? "Available" : "Unavailable"}
        </p>
        <button onClick={handleBook}>Book Appointment</button>
      </div>
    </div>
  );
};

export default DoctorProfile;
