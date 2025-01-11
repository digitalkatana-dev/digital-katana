import React from 'react';
import './projects.scss';

const Projects = () => {
	return (
		<div id='projects'>
			<div className='section-head'>
				<h2>Projects</h2>
			</div>
			<div className='project-mobile-container'>
				<div className='mobile-header'>
					<h5>Featured</h5>
				</div>
				<div className='slide-container'></div>
				<div className='mobile-header'>
					<h5>Web App</h5>
				</div>
				<div className='slide-container'></div>
				<div className='mobile-header'>
					<h5>Mobile App</h5>
				</div>
				<div className='slide-container'></div>
			</div>
			<ul></ul>
		</div>
	);
};

export default Projects;
