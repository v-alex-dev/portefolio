const GalerieShowProjet = () => {
  const urlImgSrc = "./src/assets/";
  const projet = [
    {
      urlImg: urlImgSrc + "todo.jpg",
      urlDeploy: "https://okly2023.github.io/Project_Planner/",
      urlGithub:
        "https://github.com/Okly2023/Project_Planner?tab=readme-ov-file",
      name: "Project Planner",
      description:
        "Il a été conçu pour vous permettre de créer des projets qui affichent une liste de tâches à accomplir",
    },
    {
      urlImg: urlImgSrc + "imgbg-our-menu.jpg",
      urlDeploy: "https://bastien-venturi.github.io/Kababi-food/",
      urlGithub:
        "https://github.com/bastien-venturi/Kababi-food?tab=readme-ov-file",
      name: "Kababi Food",
      description:
        "Exercice de groupe, création d'un site de commande de nourriture en ligne",
    },
    {
      urlImg: urlImgSrc + "imgbg-our-menu.jpg",
      urlDeploy: "https://bastien-venturi.github.io/Kababi-food/",
      urlGithub: "",
      name: "Kababi Food",
      description:
        "Exercice de groupe, création d'un site de commande de nourriture en ligne",
    },
  ];

  return (
    <>
      {projet.map((projet, index) => {
        <div key={index} id="galerie">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <img src={projet.urlImg} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{projet.name}</h5>
                    <p className="card-text">{projet.description}</p>
                    <a href={projet.urlDeploy} className="btn btn-primary">
                      Voir le projet
                    </a>
                    <a href={projet.urlGithub} className="btn btn-primary">
                      Voir le code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
      })}
    </>
  );
};

export default GalerieShowProjet;
