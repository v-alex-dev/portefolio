import js from '../assets/js.svg';
import typescript from '../assets/typescript.svg';
import nodejs from '../assets/node-js.svg';
import sql from '../assets/database-solid.svg';
import react from '../assets/react.svg';
import nextjs from '../assets/next-js.svg';
import tailwind from '../assets/tailwind.svg';
import git from '../assets/github.svg';
import figma from '../assets/figma-icon.svg';
import csharp from '../assets/c-sharp.svg';
import dotnet from '../assets/dotnet-icon.svg';
import angular from '../assets/angular-icon.svg';
import django from '../assets/django-logo-positive.svg';
import python from '../assets/python-icon.svg';
import php from '../assets/new-php-logo.svg';
import team from '../assets/noun-teamwork-1696074.svg';
import customer from '../assets/noun-customer-oriented-2123208.svg';
import learner from '../assets/noun-learner-4693255.svg';

export  const currentSkills =
    [
        {
            urlImg:js,
            name:'Javascript'
        },
        {
            urlImg:typescript,
            name:'Typescript'
        },
        {
            urlImg:nodejs,
            name:'NodeJs'
        },
        {
            urlImg:sql,
            name:'SQL'
        },
        {
            urlImg:react,
            name:'React'
        },
        {
            urlImg:nextjs,
            name:'Next.js'
        },
        {
            urlImg:tailwind,
            name:'Tailwindcss'
        },
        {
            urlImg:git,
            name:'Git'
        },
        {
            urlImg:figma,
            name:'Figma'
        },
    ];
export const casualSkills = [
    {
        urlImg:csharp,
        name:'C#'
    },

    {
        urlImg: dotnet,
        name:'.NET'
    },
    {
        urlImg:angular,
        name:'Angular'
    },
    {
        urlImg:django,
        name:'Django'
    },
    {
        urlImg:python,
        name:'Python'
    },
    {
        urlImg: php,
        name:'PHP'
    },

]

export const softSkills = [
    {
        title:"Team Player",
        imgSrc:team,
        description:"Collaborateur passionné, j'excelle dans le travail d'équipe en valorisant l'écoute et le débat" +
            " d'idées. Mon objectif : atteindre les meilleurs résultats pour l'entreprise et satisfaire pleinement" +
            " nos clients"
    },
    {
        title:"Customer-oriented",
        imgSrc:customer,
        description:"Orienté client, je suis à l'écoute de ses besoins tout en respectant les objectifs de la société." +
            " Mon engagement : concilier les attentes du client avec les aspirations de l'entreprise."
    },
    {
        title:"Continuous Learner",
        imgSrc:learner,
        description:
            "Apprenant continu, je m'épanouis dans l'acquisition de nouvelles technologies. Ouvert à toute formation," +
            " je cherche constamment à me perfectionner pour relever de nouveaux défis avec expertise et innovation."
    }
]