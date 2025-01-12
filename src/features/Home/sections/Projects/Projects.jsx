import { useEffect, useState } from 'react';
import { sections } from '../../../../util/data';
import './projects.scss';
import ProjectCarousel from './components/ProjectCarousel';

const Projects = () => {
	const [selected, setSelected] = useState('featured');
	const [data, setData] = useState([]);

	useEffect(() => {
		switch (selected) {
			case 'featured':
				setData(sections[0].data);
				break;

			case 'web':
				setData(sections[1].data);
				break;

			case 'mobile':
				setData(sections[2].data);
				break;

			case 'design':
				setData(sections[3].data);
				break;

			case 'branding':
				setData(sections[4].data);
				break;

			default:
				setData(sections[5].data);
		}
	}, [selected]);

	return (
		<div id='projects'>
			<div className='section-head'>
				<h2>Projects</h2>
			</div>
			<div className='project-mobile-container'>
				{sections.map((section) => (
					<div key={section.id} className='section'>
						<div className='mobile-header'>
							<h5>{section.title}</h5>
						</div>
						<div className='slide-container'>
							<ProjectCarousel data={section.data} />
						</div>
					</div>
				))}
			</div>
			<ul>
				{sections.map((item) => (
					<li
						key={item.id}
						className={selected === item.id ? 'active' : ''}
						onClick={() => setSelected(item.id)}
					>
						{item.title}
					</li>
				))}
			</ul>
			<div className='project-item-container'>
				{data.map((item) => (
					<div key={item.id} className='project-item'>
						<img src={item.img} alt='' />
						<h4>{item.title}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
