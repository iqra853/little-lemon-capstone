import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-text">
          <h1 id="hero-heading">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn-primary" aria-label="On Click Reserve a Table">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
            alt="Delicious Mediterranean grilled dish at Little Lemon"
            className="hero-image"
          />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
