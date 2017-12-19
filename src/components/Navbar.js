import React from 'react';

const Navbar = props => (
	<nav className="navbar navbar-toggleable-md sticky-top navbar-light bg-faded" style={{backgroundColor: "#e3f2fd"}}>
	  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
	    <span className="navbar-toggler-icon"></span>
	  </button>
	  <a className="navbar-brand" href="#">Navbar w/ text</a>
	  <div className="collapse navbar-collapse" id="navbarText">
	    <ul className="navbar-nav mr-auto">
	      <li className="nav-item active">
	        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="#">Features</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="#">Pricing</a>
	      </li>
	    </ul>
	    <span className="navbar-text">
	      Score: {props.count}
	    </span>
	  </div>
	</nav>

);

export default Navbar;