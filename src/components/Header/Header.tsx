import React from 'react';
import * as S from './style';

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <img
          src="https://res.cloudinary.com/dyu8jwe4o/image/upload/v1716191502/agrotrade-removebg-preview_z3dmjb.png"
          alt="Logo"
        />
      </S.Logo>
      <S.SearchBar>
        <input type="text" placeholder="Search..." />
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
