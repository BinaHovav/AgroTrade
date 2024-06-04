import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <main className="home-container">
      <h1>AGROTRADE</h1>
      <h2>WORLDWIDE TRADING PLATFORM</h2>
      <div className="button-container">
        <Link className="login-button" to="/products">
          Enter
        </Link>
      </div>
    </main>
  );
};

export default Home;
