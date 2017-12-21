import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import pics from './pics.json';

class App extends React.Component {
  
	state = {
	    count: 0,
	    pics, 
	    clicked: [],
	    highScore: 0
	};
	
	handleIncrement = id => {

		let clicked = this.state.clicked.includes(id) ? (this.state.clicked.splice(0), clicked=this.state.clicked) : this.state.clicked.concat(id);
		this.setState({ clicked: clicked });
		console.log(this.state.clicked);
		console.log(clicked);
		this.setState({ count: clicked.length });
		clicked.length > this.state.highScore ? this.setState({ highScore: clicked.length }) : this.setState({ highScore: this.state.highScore })
		const shuffled = pics.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
		this.setState ({ pics: shuffled })
	   
	};

	render(){
		return(
			<div>
				<Navbar 
					count={this.state.count}
					highScore={this.state.highScore}
					handleIncrement={this.handleIncrement}
				/>
				<Header />
				{this.state.pics.map(pic => (
					<Section
						handleIncrement={this.handleIncrement}						
						id={pic.id}
						key={pic.id}
						name={pic.name}
						image={pic.image}
					/>
				))}
			</div>
		);
	}
}

export default App;