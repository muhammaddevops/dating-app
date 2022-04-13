import React from "react";
import Wlogo from "../images/NTWLogo.png";
import Blogo from "../images/NTLogo.png";

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
	const handleClick = () => {
		setShowModal(true);
		setIsSignUp(false);
	};

	return (
		<nav>
			<div className='logo-container'>
				<img className='logo' src={minimal ? Blogo : Wlogo} />
			</div>
			{!authToken && !minimal && (
				<button
					className='nav-button'
					onClick={handleClick}
					disabled={showModal}
				>
					Log in
				</button>
			)}
		</nav>
	);
};

export default Nav;
