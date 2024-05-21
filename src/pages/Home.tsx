import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <main className="home-container">
      <h1>AGROTRADE</h1>
      <h2>WORLDWIDE TRADING PLATFORM</h2>
      <Link className="login-button" to="/products">
        Login
      </Link>
    </main>
  );
};

export default Home;
