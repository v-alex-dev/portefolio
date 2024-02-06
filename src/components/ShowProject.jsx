import { useState } from 'react';
import{ motion } from 'framer-motion';
import cogipImg from '../assets/cogip.png';
import consolidationImg from '../assets/consolidation.jpg';
import todoImg from '../assets/todo.jpg';
import kababiImg from '../assets/imgbg-our-menu.jpg';
import sunnyImg from '../assets/sunny.jpg';
import azImg from '../assets/AZ-store.png';

const ShowProject = () => {

	const [isNext, setIsNext] = useState(true);
	const initIsNext = {
		opacity: 0,
		x: 500
	};
	const initNotNext = {
		opacity: 0,
		x: -500
	};
	
	const projet = [
		{
			urlImg: cogipImg,
			urlDeploy: 'https://cogip-ten.vercel.app/',
			urlGithub: 'https://github.com/v-alex-dev/cogip',
			name: 'Cogip',
			description: 'Exercice solo, création d\'un site de gestion de factures deux groupes ont travaillé sur le même projet un groupe Back-end et un groupe Front-end',
		},
		{
			urlImg: consolidationImg,
			urlDeploy: 'https://v-alex-dev.github.io/consolidation/',
			urlGithub: 'https://github.com/v-alex-dev/consolidation',
			name: 'Consolidation',
			description: 'Exercice solo, premier exercice html/css de la formation Becoode',
		},
		{
			urlImg: todoImg,
			urlDeploy: '',
			urlGithub: 'https://okly2023.github.io/Project_Planner/',
			name: 'Project Planner',
			description: 'Il a été conçu pour vous permettre de créer des projets qui affichent une liste de tâches à accomplir',
		},
		{
			urlImg: kababiImg,
			urlDeploy: '',
			urlGithub: 'https://bastien-venturi.github.io/Kababi-food/',
			name: 'Kababi Food',
			description: 'Exercice de groupe, création d\'un site de commande de nourriture en ligne',
		},
		{
			urlImg: sunnyImg,
			urlDeploy: 'https://v-alex-dev.github.io/sunnyside-agency/',
			urlGithub: 'https://github.com/v-alex-dev/sunnyside-agency',
			name: 'SunnySide',
			description: 'Exercice solo, création d\'un site de présentation d\'une agence de design',
		},
		{
			urlImg: azImg,
			urlDeploy: '',
			urlGithub: 'https://github.com/v-alex-dev/AZ-store',
			name: 'AZ Store',
			description: 'Exercice de groupe, création d\'un site de vente en ligne de chaussures',
		},
		
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex === projet.length - 1 ? 0 : prevIndex + 1));
		setIsNext(true);
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) => (prevIndex === 0 ? projet.length - 1 : prevIndex - 1));
		setIsNext(false);
	};

	return (
		<div id="galerie" className='show-galerie'>
			<button onClick={handlePrev} className='btn-gal'>{'<'}</button>
			<div className="container">
				<div className="row">
					<motion.div 
							key={activeIndex}
							initial={isNext ? initIsNext : initNotNext}
							animate={{ x: 0, opacity: 1}}
							transition={{ duration: 1 , type: 'spring', stiffness: 120}}
							className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={projet[activeIndex].urlImg} alt={projet[activeIndex].name} className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{projet[activeIndex].name}</h5>
								<p className="card-text">{projet[activeIndex].description}</p>
								<div className='card-btn'>
									<a href={projet[activeIndex].urlDeploy} className={projet[activeIndex].urlDeploy.length < 2 ? "hidden" : "btn-primary" } target='_blank' rel='noreferrer'>Voir le Projet</a>
									<a href={projet[activeIndex].urlGithub} className="btn-primary" target='_blank' rel='noreferrer'>Voir le code</a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			<div>
				
				<button onClick={handleNext}  className='btn-gal'>{'>'}</button>
			</div>
		</div>
	);
};

export default ShowProject;