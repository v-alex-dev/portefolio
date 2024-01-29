import {motion} from "framer-motion";
import Article from "./article.jsx";

const articleContent = [
    {
        parcours: "Technocité",
        url: 'https://technocite.be/',
        description: ['Formation dynamique de 6 mois en développement .NET, mettant l\'accent sur le langage C# et' +
            ' les fondements back-end tels que ASP, ADO, SQL, et Entity Framework Core. Expertise solide en ' +
            'administration SQL Server, méthodologies Scrum et utilisation avancée de Git.',' Exploration du ' +
            'développement cross-platform avec Xamarin et du cloud Azure. Projet final : conception et défense d\'une ' +
            'application devant des professionnels, démontrant une maîtrise complète du développement web.']
    },
    {
        parcours: "BeCode",
        url: 'https://becode.org/fr/les-formations/junior-developer/',
        description: ['Après 7 mois de formation intensive en développement web chez BeCode, avec un focus sur les compétences ' +
        'tant front-end que back-end. Initiation complète aux technologies modernes telles que React et ' + -
        'l\'exploration continue avec NEXT.JS pour renforcer mes compétences front-end.','La formation a mis ' +
        'l\'accent sur l\'apprentissage actif, le travail d\'équipe, la gestion de projets et le développement ' +
        'de soft skills essentielles pour une carrière réussie en tant que développeur.']
    }
];
const ListFormations = ({loading}) => {
  return(
      <div id={"Parcours"} className={" flex md:justify-around my-8 flex-col md:flex-row p-8"}>
          {articleContent.map((item, index) => (<motion.a
              href={item.url}
              whileHover={{ scale: 1.1}}
              whileTap={{scale:1}}
              key={index}
              target={"_blank"}
              className={"bg-light-orange rounded-xl p-4 duration-150 md:w-1/3 w-full mt-8 overflow-y-auto h-72 md:h-auto hover:shadow-black hover:shadow-lg"}>
              <Article title={item.parcours} description={item.description} loading={loading}/>
          </motion.a>))}
      </div>
  )
}

export default ListFormations;