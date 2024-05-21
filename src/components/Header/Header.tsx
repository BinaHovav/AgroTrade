import React, { useState, ChangeEvent } from 'react';
import * as S from './style';


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
    <S.HeaderContainer>
      <S.Logo>
        <img
          src="https://res.cloudinary.com/dyu8jwe4o/image/upload/v1716191502/agrotrade-removebg-preview_z3dmjb.png"
          alt="Logo"
        />
      </S.Logo>
      <S.SearchBar>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </S.SearchBar>
      <S.Navbar>
        <a href="#home">Home</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#about-us">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#login">Log In/Sign Up</a>
      </S.Navbar>
    </S.HeaderContainer>
  );
};

export default Header;
