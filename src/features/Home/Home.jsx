import React from 'react';
import { Container } from '@mui/material';
import './home.scss';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Works from './sections/Works';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

const Home = () => {
	return (
		<div id='home'>
			<Container maxWidth='xl'>
				<Hero />
				<Projects />
				<Works />
				<Testimonials />
				<Contact />
			</Container>
		</div>
	);
};

export default Home;
