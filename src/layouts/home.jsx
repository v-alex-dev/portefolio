import Article from "../components/article.jsx";
import {useEffect, useRef, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import "../../public/descriptionTitle.svg";
import AboutMe from "../components/aboutMe.jsx";
import TitleSection from "../components/titleSection.jsx";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const controls = useAnimation();
    const scrollRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                await new Promise((resolve) => setTimeout(resolve, 1000));
                setTimeout(setLoading(false), 2000)

            } catch (error) {
                console.error("Erreur lors de la récupération des données", error);
            }
        };
        fetchData();
        const handleScroll = () => {
            const element = scrollRef.current;
            if (element) {
                const elementTop = element.offsetTop;
                const scrollPosition = window.scrollY + window.innerHeight;

                if (scrollPosition > elementTop) {
                    controls.start({ opacity: 1 });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    const articleContent = [
        {
            parcours: "Technocité",
            url: 'https://technocite.be/',
            description: 'Formation dynamique de 6 mois en développement .NET, mettant l\'accent sur le langage C# et' +
                ' les fondements back end tels que ASP, ADO, SQL, et Entity Framework Core. Expertise solide en ' +
                'administration SQL Server, méthodologies Scrum, et utilisation avancée de Git. Exploration du ' +
                'développement cross-platform avec Xamarin et du cloud Azure. Projet final : conception et défense d\'une ' +
                'application devant des professionnels, démontrant une maîtrise complète du développement web.'
        },
        {
            parcours: "BeCode",
            url: 'https://becode.org/fr/les-formations/junior-developer/',
            description:  '7 mois de formation intensive en développement web chez BeCode, avec un focus sur les compétences ' +
                'tant front-end que back-end. Initiation complète aux technologies modernes telles que React et ' +
                'l\'exploration continue avec NEXT.JS pour renforcer mes compétences front-end. La formation a mis ' +
                'l\'accent sur l\'apprentissage actif, le travail d\'équipe, la gestion de projets, et le développement ' +
                'de soft skills essentielles pour une carrière réussie en tant que développeur.'
        }
    ];
    return (<div id="home" className={"w-full overflow-y-auto"}>
            <section id={"description"}
                     className={"rounded md:p-4 relative md:my-10 my-20"}>
                <TitleSection title={"About me"} urlIcon={"./descriptionTitle.svg"} />
                <AboutMe/>

            </section>
            <section id={"formations" } className={"relative"}>
                <TitleSection title={"Formations"} urlIcon={"./maison.svg"}/>
                <div id={"Parcours"} className={" flex md:justify-around my-8 flex-col md:flex-row p-8"}>
                    {articleContent.map((item, index) => (<motion.a
                        ref={scrollRef}
                        initial={{ opacity: 0 }}
                        animate={controls}
                        href={item.url}
                        key={index}
                        target={"_blank"}
                        className={"bg-light-orange rounded-xl shadow-dark p-4 hover:shadow-2xl duration-150 md:w-1/3 w-full mt-8 overflow-y-auto h-72 md:h-auto"}>
                        <Article title={item.parcours} description={item.description} loading={loading}/>
                    </motion.a>))}
                </div>
            </section>
            <section id={"skills"}>
                <h2>skills</h2>
            </section>
            <section id={"soft-skills"}>
                <h2>soft-skills</h2>
            </section>
        </div>)
}

export default Home;