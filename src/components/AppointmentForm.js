import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const { selectedDoctor } = useAppContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!selectedDoctor) {
    return (
      <div className="container">
        <p>No doctor selected.</p>
        <button onClick={() => navigate("/")}>Back to Doctors</button>
        <br/>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.datetime) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container">
      <button onClick={() => navigate("/profile")}>← Back</button>
      <h2>Book Appointment with Dr. {selectedDoctor.name}</h2>

      {submitted ? (
        <div>
          <p>Appointment booked successfully for {formData.datetime}!</p>
          <button onClick={() => navigate("/")}>Back to Doctors</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="appointment-form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Patient Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleChange}
            required
          />
          <button type="submit">Confirm Appointment</button>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
