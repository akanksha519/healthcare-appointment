import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import doctorsData from "../data/doctors.json";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { setSelectedDoctor } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredDoctors(doctorsData);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = doctorsData.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(value) ||
        doctor.specialization.toLowerCase().includes(value)
    );
    setFilteredDoctors(filtered);
  };

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    navigate("/profile");
  };

  return (
    <div className="container">
      <h1>Meet Your Doctor Today</h1>
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="doctor-grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onSelect={handleSelectDoctor} />
          ))
        ) : (
          <p>No doctors found</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
