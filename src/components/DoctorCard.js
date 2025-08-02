import React from "react";

const DoctorCard = ({ doctor, onSelect }) => {
  const defaultImage = "https://via.placeholder.com/150?text=No+Image";

  return (
    <div className="doctor-card" onClick={() => onSelect(doctor)}>
  <img
    src={doctor.image || defaultImage}
    alt={doctor.name}
    onError={(e) => (e.target.src = defaultImage)}
  />
  <h3>{doctor.name}</h3>
  <p>{doctor.specialization}</p>
  <p className={`status ${doctor.availability ? "available" : "unavailable"}`}>
    {doctor.availability ? "Available" : "Unavailable"}
  </p>
</div>

  );
};

export default DoctorCard;
