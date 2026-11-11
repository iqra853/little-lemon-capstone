import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [time, setTime] = useState(availableTimes[0] || "17:00");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!date) {
      newErrors.date = "Please select a valid date.";
    } else if (date < today) {
      newErrors.date = "Date cannot be in the past.";
    }
    if (guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      submitForm({ name, date, time, guests, occasion });
    }
  };

  return (
    <section className="booking-section" aria-labelledby="booking-heading">
      <h1 id="booking-heading" style={{ marginBottom: "1.5rem", color: "#495e57" }}>
        Book a Table
      </h1>
      <form className="booking-form" onSubmit={handleSubmit} aria-label="Table Reservation Form">
        <div className="form-group">
          <label htmlFor="customer-name">Full Name *</label>
          <input
            type="text"
            id="customer-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            aria-required="true"
          />
          {errors.name && <span className="error-text" role="alert">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="res-date">Choose date *</label>
          <input
            type="date"
            id="res-date"
            value={date}
            min={today}
            onChange={handleDateChange}
            required
            aria-required="true"
          />
          {errors.date && <span className="error-text" role="alert">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time *</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-required="true"
          >
            {availableTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests *</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
            aria-required="true"
          />
          {errors.guests && <span className="error-text" role="alert">{errors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary"
          aria-label="On Click Make Your Reservation"
        >
          Make Your Reservation
        </button>
      </form>
    </section>
  );
}

export default BookingForm;