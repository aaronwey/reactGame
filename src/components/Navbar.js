import React from 'react';

const Navbar = props => (
	<nav className="navbar navbar-toggleable-md sticky-top navbar-light bg-faded" style={{backgroundColor: "#e3f2fd"}}>
	  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  
	  <div className="collapse navbar-collapse" id="navbarText">
	    <span className="navbar-text">
	      Score: {props.count} High Score: {props.highScore}
	    </span>
	  </div>
	</nav>

);

export default Navbar;