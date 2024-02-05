import React, { useState } from 'react';

const ShowProject = () => {
	const urlImgSrc = './src/assets/';
	const projet = [
		{
			urlImg: urlImgSrc + 'consolidation.jpg',
			urlDeploy: 'https://v-alex-dev.github.io/consolidation/',
			urlGithub: 'https://github.com/v-alex-dev/consolidation',
			name: 'Consolidation',
			description: 'Exercice solo, premier exercice html/css de la formation Becoode',
		},
		{
			urlImg: urlImgSrc + 'todo.jpg',
			urlDeploy: 'https://okly2023.github.io/Project_Planner/',
			urlGithub: 'https://github.com/Okly2023/Project_Planner?tab=readme-ov-file',
			name: 'Project Planner',
			description: 'Il a été conçu pour vous permettre de créer des projets qui affichent une liste de tâches à accomplir',
		},
		{
			urlImg: urlImgSrc + 'imgbg-our-menu.jpg',
			urlDeploy: 'https://bastien-venturi.github.io/Kababi-food/',
			urlGithub: 'https://github.com/bastien-venturi/Kababi-food?tab=readme-ov-file',
			name: 'Kababi Food',
			description: 'Exercice de groupe, création d\'un site de commande de nourriture en ligne',
		},
		{
			urlImg: urlImgSrc + 'sunny.jpg',
			urlDeploy: 'https://v-alex-dev.github.io/sunnyside-agency/',
			urlGithub: 'https://github.com/v-alex-dev/sunnyside-agency',
			name: 'SunnySide',
			description: 'Exercice solo, création d\'un site de présentation d\'une agence de design',
		},
		
	];

	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex === projet.length - 1 ? 0 : prevIndex + 1));
	};

	const handlePrev = () => {
		setActiveIndex((prevIndex) => (prevIndex === 0 ? projet.length - 1 : prevIndex - 1));
	};

	return (
		<div id="galerie" className='show-galerie'>
			<button onClick={handlePrev} className='btn-gal'>{'<'}</button>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<div className="card">
							<img src={projet[activeIndex].urlImg} alt="" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{projet[activeIndex].name}</h5>
								<p className="card-text">{projet[activeIndex].description}</p>
								<a href={projet[activeIndex].urlGithub} className={projet[activeIndex].urlGithub.length < 2 ? "hidden" : "btn-primary" }>Voir le Projet</a>
								<a href={projet[activeIndex].urlGithub} className="btn-primary">Voir le code</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				
				<button onClick={handleNext}  className='btn-gal'>{'>'}</button>
			</div>
		</div>
	);
};

export default ShowProject;