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
    <header className="header-container">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dyu8jwe4o/image/upload/v1718270490/agrotrade-high-resolution-logo-transparent_kvlrtd.png"
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
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/how-it-works">How It Works</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log In/Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
