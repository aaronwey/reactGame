import React from 'react';
import '../styles/Section.css';

const Section = props => (

		<img src ={props.image} className='clickItem' onClick= {props.handleIncrement} />

);

export default Section;