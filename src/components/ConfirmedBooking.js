import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking({ bookingData }) {
  return (
    <main className="confirmed-box" aria-live="polite">
      <h1 style={{ color: "#495e57", marginBottom: "1rem" }}>Booking Confirmed!</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Thank you{bookingData?.name ? `, ${bookingData.name}` : ""}! Your table reservation has been successfully recorded.
      </p>
      {bookingData && (
        <div style={{ marginBottom: "2rem", background: "#edefee", padding: "1rem", borderRadius: "8px", display: "inline-block" }}>
          <p><strong>Date:</strong> {bookingData.date}</p>
          <p><strong>Time:</strong> {bookingData.time}</p>
          <p><strong>Guests:</strong> {bookingData.guests}</p>
          <p><strong>Occasion:</strong> {bookingData.occasion}</p>
        </div>
      )}
      <br />
      <Link to="/" className="btn-primary">Back to Home</Link>
    </main>
  );
}

export default ConfirmedBooking;