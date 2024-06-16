import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = () => {
  return (
    <main className="home-container">
      <img
        src="https://res.cloudinary.com/dyu8jwe4o/image/upload/v1718270490/agrotrade-high-resolution-logo-transparent_kvlrtd.png"
        alt="logo"
      />
      <div className="titles">
        <h1>AGROTRADE</h1>
        <h2>WORLDWIDE TRADING PLATFORM</h2>
      </div>
      <div className="button-container">
        <Link className="login-button" to="/products">
          Enter
        </Link>
      </div>
    </main>
  );
};

export default Home;
