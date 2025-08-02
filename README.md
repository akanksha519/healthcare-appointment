# 🏥 Healthcare Appointment Booking App

A responsive React.js application that allows users to browse doctor profiles, view their availability, and book appointments with ease.

## 🚀 Features

- 🔍 View list of doctors with name, specialization, availability
- 👩‍⚕️ Click to view detailed doctor profile
- 📅 Book appointments through a simple form
- 💻 Fully responsive and clean UI
- 🔄 React Router-based navigation

## 🛠️ Tools & Technologies Used

- **React.js**
- **React Router DOM**
- **Static JSON data**
- **CSS Flexbox & Grid** for responsive styling
- **VS Code** for development

## 📂 Project Structure

  healthcare
├── components/
│ ├── DoctorCard.js
│ ├── DoctorList.js
│ ├── DoctorProfile.js
│ └── AppointmentForm.js
├── context/
│ └── AppContext.js
├── data/
│ └── doctors.json
├── App.js
├── index.js
├── styles.css
└── README.md

## 😅 Challenges Faced

- **Image Loading Errors:** Some Unsplash image URLs failed to load. Solved using `onError` fallback to a default placeholder.
- **Availability Logic Bug:** Initially, doctors' availability didn't display correctly due to mismatch in property names (`availability` vs `available`). Resolved by using consistent naming.
- **Styling Layout:** Making doctor cards responsive and aligned horizontally while keeping card content vertical took some time to adjust with `flex-wrap` and `flex-direction`.

## ⏭️ Future Improvements

- 🧾 Save appointments to backend (using Firebase or Node.js API)
- 📨 Email confirmation on successful booking
- 🔐 Add login/signup for patients
- 🌍 Filter/search doctors by specialization or location
- 🗓️ View user's past/future appointments

## ✅ How to Run Locally

```bash
git clone https://github.com/akanksha519/healthcare-appointment.git
cd healthcare
npm install
npm start

Then open http://localhost:3000 in your browser.