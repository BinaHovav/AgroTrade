// Header.tsx
import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

interface HeaderProps {
  onSearch: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <main className="header-container">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dyu8jwe4o/image/upload/v1716191502/agrotrade-removebg-preview_z3dmjb.png"
          alt="Logo"
        />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log In/Sign Up</Link>
      </div>
    </main>
  );
};

export default Header;
