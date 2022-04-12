import React from "react";
import logo from "../images/logo.png";
import tinderLogo from "../images/Tinder-Logo.png";

const Nav = ({ minimal, authToken, setShowModal, showModal }) => {

  const handleClick = ()=>{
    setShowModal(true)
  }
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? tinderLogo : logo} />
      </div>
      {!authToken && !minimal && <button className="nav-button" onClick={handleClick}
      disabled={showModal}>Log in</button>}
    </nav>
  );
};

export default Nav;
