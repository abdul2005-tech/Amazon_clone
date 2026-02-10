import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      {/* Side Menu */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="side-header">
          <Link to="/account" onClick={onClose} style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '25px' }}>👤</span>
            <span style={{ fontWeight: 'bold', fontSize: '19px' }}>Hello, sign in</span>
          </Link>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Content */}
        <div className="side-content">

          <h4>Trending</h4>
          <p>Bestsellers</p>
          <p>New Releases</p>
          <p>Movers and Shakers</p>

          <hr />

          <h4>Digital Content and Devices</h4>
          <p>Echo & Alexa ❯</p>
          <p>Fire TV ❯</p>
          <p>Kindle E-Readers & eBooks ❯</p>
          <p>Audible Audiobooks ❯</p>
          <p>Amazon Prime Video ❯</p>
          <p>Amazon Prime Music ❯</p>

          <hr />

          <h4>Shop by Category</h4>
          <p>Mobiles, Computers ❯</p>

        </div>
      </div>
    </>
  );
};

export default SideMenu;
