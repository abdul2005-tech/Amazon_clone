import React from "react";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={onClose}></div>}

      {/* Side Menu */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>

        {/* Header */}
        <div className="side-header">
          <span>👤 Hello, sign in</span>
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
