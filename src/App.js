import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BookingForm from "./components/BookingForm";
import ConfirmedBooking from "./components/ConfirmedBooking";

// Reducer functions exported for unit testing
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  if (action.type === "UPDATE_TIMES") {
    return ["17:00", "18:30", "19:30", "20:30", "21:30"];
  }
  return state;
};

function MainApp() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [bookingData, setBookingData] = useState(null);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    setBookingData(formData);
    navigate("/confirmed");
  };

  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={
              <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route path="/confirmed" element={<ConfirmedBooking bookingData={bookingData} />} />
        </Routes>
      </main>
      <footer>
        <p>© 2026 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;