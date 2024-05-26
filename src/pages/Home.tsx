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
          Login
        </Link>
        <Link className="login-button" to="/signup">
          Sign Up
        </Link>
      </div>
    </main>
  );
};

export default Home;
