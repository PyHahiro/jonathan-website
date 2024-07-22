import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Jonathan MARTIN--MAESTRE",
  initials: "JMM",
  url: "https://dillion.io",
  description:
    "Développeur fullstack",
  summary:
    `À la fin mes études en informatique a Dijon, je suis venu m'installer a Montpellier pour mon premier CDI, je suis un fan d'escalade en bloc, de jeux vidéos et de jeux de roles.
    Cela est peut-être étrange, mais l'informatique n'est pas ma passion première. Je pense cependant que c'est cela qui fait ma force, me permettant d'appliquer une grande rigueur et un sérieux au travail. 
    `,
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js 13",
    "Next.js 14 (App router)",
    "ViteJS",
    "Angular",
    "Typescript",
    "Node.js",
    "Python",
    "C#",
    "Java",
    "Dockerfile",
    "Docker-compose",
    "Ubuntu",
    "Unix",
    "Kotlin",
    "SQL",
    "Machine learning",
    "Python Flask",
    "Jena-Fuseki",
    "Protégé",
    "Tensorflow",
    "Keras",
    "LaTeX",
    "SQL Server Management Studio",
    "Neo4J"
  ],
  contact: {
    email: "jonathan.martinmaestre71@gmail.com",
    tel: "+33781668749",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/PyHahiro",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jonathan-martin-maestre",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:jonathan.martinmaestre71@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Septeo Notaires",
      href: "https://www.genapi.fr/",
      badges: [],
      location: "Lattes, 34970",
      title: "Développeur fullstack C#, SQL, ViteJS",
      logoUrl: "/genapi_logo.jpg",
      start: "Avril 2024",
      end: "Maintenant",
      description:
        "J'ai participé à la création d'un outil de traçage de données d'opérations effectuées dans le service de reprise fichier de l'entreprise dans le cadre du RGPD et d'attaques informatiques qu'a subit l'entreprise lors de l'année 2023. Je participe aussi aux opérations de reprises fichiers et à la maintenance des APIs de l'entreprise en C#",
    },
    {
      company: "Anabasis Assets",
      href: "https://www.anabasis-assets.com/",
      badges: [],
      location: "Saint-Denis, 93200",
      title: "Développeur fullstack Kotlin, Angular, NextJS 13",
      logoUrl: "anabasis.jpg",
      start: "Septembre 2022",
      end: "Mars 2024",
      description:
        `En alternance jusqu'à début septembre 2023, en tant que développeur junior puis en CDD de 6 mois dans l'entreprise après mes études, j'ai participé à la création et mise en place d'applications web interactives en utilisant les frameworks Angular et React (NextJS) mais aussi a la gestion et lamaintenance d'une API basée sur les ontologies et les technologies du
web sémantique en utilisant Kotlin.`,
    },
    {
      company: "Laboratoire CIAD",
      href: "https://www.ciad-lab.fr/",
      badges: [],
      location: "Dijon, 21000",
      title: "Ingénieur informatique",
      logoUrl: "/ciad_lab_logo.jpg",
      start: "Septembre 2021",
      end: "Août 2022",
      description:
        `J'ai participé au développement d'une application web permettant d'inférer des états à partir
d'enluminures médiévales (IA symbolique : ontologies, systèmes experts, inférences,
règles logiques). J'ai aussi pu développéun programme permettant de classifier et annoter
automatiquement des images d'enluminures médiévales (apprentissage profond).`,
    },
  ],
  education: [
    {
      school: "Université de Bourgogne",
      href: "https://www.u-bourgogne.fr/",
      degree: "Licence en informatique & Master en Base de Données et Intelligence Artificielle (BDIA)",
      logoUrl: "/Université_de_Bourgogne_Logo.svg",
      start: "2018",
      end: "2023",
    },
    {
      school: "Lycée Clos-maire",
      href: "https://lyc-closmaire-beaune.eclat-bfc.fr/",
      degree: "Bac Scientifique en Science de l'ingénieur (SSI)",
      logoUrl: "/clos_maire.svg",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Karnyx",
      href: "https://karnyx.com/",
      dates: "Septembre 2022 - Mars 2024",
      active: true,
      description:
        "Avec la collaboration des équipes d'Anabasis, j'ai participé extensivement a l'elaboration de l'application web (anciennement avec puis migré sous NextJS) et de l'architecture de l'API sémantique derrière la technologie Karnyx, j'ai aussi participé a l'élaboration de leur langage ontologique nommé Kalamar.",
      technologies: [
        "NextJS 13",
        "NextJS 14",
        "Typescript",
        "MariaDB",
        "PostgreSQL",
        "Kotlin",
        "Angular"
      ],
      links: [
        {
          type: "Site web",
          href: "https://karnyx.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Karnyx.png",
      video: "",
    },
    {
      title: "Illumination 3.0",
      href: "https://www.ciad-lab.fr/project/illumination-3-0/",
      dates: "Septembre 2021 - Août 2022",
      active: true,
      description:
        "J'ai conçus et développé une application web pour l'annotation d'enluminure afin d'entrainer une intelligence artificielle à la reconnaissance d'éléments et de concepts dans une image médiévale.",
      technologies: [
        "Angular",
        "Typescript",
        "Python",
        "Tensorflow",
        "Keras",
        "Dockerfile",
        "Docker-compose",
        "Neo4J"
      ],
      links: [
        {
          type: "Site web",
          href: "https://www.ciad-lab.fr/project/illumination-3-0/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/Illumination.mp4",
    },
    {
      title: "Tracking Data",
      href: "#",
      dates: "Avril 2024 - Maintenant",
      active: true,
      description:
        "J'ai conçus et développé une application web pour le suivi des données et des opérations de notre service interne dans le cadre du RGPD, cette application consiste à la création et la consultation de formulaires complexes avec de nombreuses règles métiers. Mais aussi a la recherche de données temporelles.",
      technologies: [
        "React",
        "Typescript",
        "Azure Devops",
        "Azure Pipelines",
        "TailwindCSS",
        "ViteJS",
      ],
      links: [],
      image: "",
      video: "/videos/TrackingData.mp4",
    },
    {
      title: "Capex",
      href: "https://www.docamex.fr/docamex_portail/accueil",
      dates: "Septembre 2022 - Mars 2024",
      active: true,
      description:
        "J'ai maintenu et développé une application web et une API sémantique dans le cadre de la gestion d'information à propos des AOP fromagères, dont l'implémentation de composants graphiques pour afficher des graphes de connaissances ou de la gestion de groupe utilisateurs",
      technologies: [
        "Angular",
        "Typescript",
        "Kotlin",
        "Knowledge Graph",
        "Web sémantique",
        ""
      ],
      links: [
        {
          type: "Site web",
          href: "https://www.docamex.fr/docamex_portail/accueil",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/videos/Docamex.mp4",
    },
  ],
} as const;
