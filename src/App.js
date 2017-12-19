import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';
import pics from './pics.json';

class App extends React.Component {
  // Setting the initial state of the Counter component
	state = {
	    count: 0,
	    pics
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render(){
		return(
			<div>
				<Navbar 
					count={this.state.count}
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
