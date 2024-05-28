import React, { useState, ChangeEvent } from 'react';
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
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about-us">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#login">Log In/Sign Up</a>
      </div>
    </main>
  );
};

export default Header;
