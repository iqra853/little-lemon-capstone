import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">🍋 LITTLE LEMON</div>
      <nav aria-label="Main Navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/booking">Reserve a Table</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;