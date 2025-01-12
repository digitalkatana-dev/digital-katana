import React from 'react';
import Slider from 'react-slick';
import './carousel.scss';

const ProjectCarousel = ({ data }) => {
	const settings = {
		// centerMode: true,
		slidesToShow: 1,
	};

	return (
		<Slider className='project-slide' {...settings}>
			{data.map((item) => (
				<div key={item.id} className='item-container'>
					<div key={item.id} className='item'>
						<img src={item.img} alt='' />
						<h5>{item.title}</h5>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default ProjectCarousel;
