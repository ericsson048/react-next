 const data = [
    {
        id: 1,
        name: "Stephanie",
        bio: "Tech Lead chez MyUnisoft, est un expert Node.js, membre officiel du groupe de sécurité Node.js et multi-conférencier sur le sujet.",
        image: "https://avatars.githubusercontent.com/u/1031111?v=4",
        formation: [
            {
                title: "Clean Programming",
                description: "Cette formation vous aidera à produire un code lisible et facile à faire évoluer, que vous travailliez seul.e ou en équipe. En vous appuyant sur des références comme Clean Code, Pragmatic Programmer, et Building Maintainable Software, vous apprendrez à éviter les pièges de la dette technique et à maintenir un design durable.",
                objectif: "adopter des techniques pour écrire un code propre et maintenable à long terme.",
                public: "devs, leads, architectes, managers tech",
                prix: 2700,
                duree: 3,
                slug: "clean-programming"
            }
        ]
    },
    {
        id: 2,
        name: "Alice Dupont",
        bio: "Développeuse full-stack avec une passion pour l'innovation.",
        image: "https://example.com/image2.jpg",
        formation: [
            {
                title: "Développement Web Avancé",
                description: "Ce cours approfondi couvre les dernières technologies web, y compris HTML5, CSS3, JavaScript, et les frameworks modernes. Vous apprendrez à créer des applications web réactives et performantes, à intégrer des API, et à optimiser le SEO. Les projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de développer des applications web complètes, de la conception à la mise en production. [500 mots]",
                objectif: "Maîtriser le développement web moderne.",
                public: "Développeurs, designers, entrepreneurs",
                prix: 3000,
                duree: 4,
                slug: "developpement-web-avance"
            }
        ]
    },
    {
        id: 3,
        name: "Marc Lefevre",
        bio: "Expert en cybersécurité avec plus de 10 ans d'expérience.",
        image: "https://example.com/image3.jpg",
        formation: [
            {
                title: "Cybersécurité pour les professionnels",
                description: "Cette formation vous plongera dans le monde de la cybersécurité, en abordant les menaces actuelles, les meilleures pratiques de sécurité, et les outils nécessaires pour protéger vos systèmes. Vous apprendrez à identifier les vulnérabilités, à mettre en place des mesures de sécurité, et à réagir face à des incidents de sécurité. Des études de cas réels vous aideront à comprendre les enjeux et à développer des compétences pratiques. [500 mots]",
                objectif: "Devenir un professionnel de la cybersécurité.",
                public: "Professionnels IT, responsables de la sécurité",
                prix: 3500,
                duree: 5,
                slug: "cybersecurite-pour-les-professionnels"
            }
        ]
    },
    {
        id: 4,
        name: "Sophie Martin",
        bio: "Consultante en marketing digital avec une expertise en SEO.",
        image: "https://example.com/image4.jpg",
        formation: [
            {
                title: "Stratégies de Marketing Digital",
                description: "Ce cours vous apprendra à élaborer des stratégies de marketing digital efficaces, en mettant l'accent sur l'optimisation des moteurs de recherche (SEO), le marketing de contenu, les réseaux sociaux, et l'analyse des données. Vous découvrirez comment attirer et engager une audience cible, générer du trafic, et augmenter les conversions. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de développer une stratégie de marketing digital complète, adaptée aux besoins de votre entreprise. [500 mots]",
                objectif: "Devenir un expert en marketing digital.",
                public: "Marketeurs, entrepreneurs, étudiants",
                prix: 2800,
                duree: 4,
                slug: "strategies-de-marketing-digital"
            }
        ]
    },
    {
        id: 5,
        name: "Paul Bernard",
        bio: "Ingénieur logiciel avec une passion pour l'IA et le machine learning.",
        image: "https://example.com/image5.jpg",
        formation: [
            {
                title: "Introduction à l'Intelligence Artificielle",
                description: "Ce cours vous introduira aux concepts fondamentaux de l'intelligence artificielle, en abordant les algorithmes de machine learning, les réseaux de neurones, et les applications pratiques de l'IA. Vous découvrirez comment collecter et préparer des données, entraîner des modèles, et évaluer leur performance. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de comprendre les bases de l'intelligence artificielle et de développer des applications pratiques. [500 mots]",
                objectif: "Comprendre les bases de l'intelligence artificielle.",
                public: "Développeurs, chercheurs, étudiants",
                prix: 3200,
                duree: 5,
                slug: "introduction-a-l-intelligence-artificielle"
            }
        ]
    },
    {
        id: 6,
        name: "Claire Dubois",
        bio: "Architecte de solutions cloud avec une expertise en AWS.",
        image: "https://example.com/image6.jpg",
        formation: [
            {
                title: "Cloud Computing avec AWS",
                description: "Ce cours vous apprendra à concevoir et déployer des solutions sur AWS, en abordant les services de calcul, de stockage, de réseau, et de base de données. Vous découvrirez comment optimiser la performance, la sécurité, et la scalabilité de vos applications cloud. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de maîtriser les services AWS pour le cloud computing et de développer des solutions cloud robustes et évolutives. [500 mots]",
                objectif: "Maîtriser les services AWS pour le cloud computing.",
                public: "Architectes, développeurs, administrateurs système",
                prix: 3600,
                duree: 6,
                slug: "cloud-computing-avec-aws"
            }
        ]
    },
    {
        id: 7,
        name: "Lucie Moreau",
        bio: "Designer UX/UI avec une passion pour l'expérience utilisateur.",
        image: "https://example.com/image7.jpg",
        formation: [
            {
                title: "Design d'Expérience Utilisateur",
                description: "Ce cours vous apprendra à créer des interfaces utilisateur intuitives et esthétiquement agréables, en mettant l'accent sur la recherche utilisateur, la conception d'information, et la conception visuelle. Vous découvrirez comment concevoir des wireframes, des maquettes, et des prototypes, et comment les tester et les itérer en fonction des retours des utilisateurs. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de concevoir des expériences utilisateur exceptionnelles, adaptées aux besoins de votre entreprise. [500 mots]",
                objectif: "Devenir un expert en design UX/UI.",
                public: "Designers, développeurs, chefs de produit",
                prix: 2900,
                duree: 4,
                slug: "design-d-experience-utilisateur"
            }
        ]
    },
    {
        id: 8,
        name: "Antoine Lefevre",
        bio: "Développeur mobile avec une expertise en applications iOS et Android.",
        image: "https://example.com/image8.jpg",
        formation: [
            {
                title: "Développement d'Applications Mobiles",
                description: "Ce cours vous apprendra à développer des applications pour iOS et Android, en abordant les langages de programmation natifs, les frameworks, et les outils de développement. Vous découvrirez comment concevoir des interfaces utilisateur réactives, intégrer des services, et optimiser la performance. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de développer des applications mobiles de qualité, adaptées aux besoins de votre entreprise. [500 mots]",
                objectif: "Maîtriser le développement mobile.",
                public: "Développeurs, étudiants, entrepreneurs",
                prix: 3100,
                duree: 5,
                slug: "developpement-d-applications-mobiles"
            }
        ]
    },
    {
        id: 9,
        name: "Julien Petit",
        bio: "Expert en blockchain et cryptomonnaies.",
        image: "https://example.com/image9.jpg",
        formation: [
            {
                title: "Introduction à la Blockchain",
                description: "Ce cours vous introduira aux concepts de la blockchain et des cryptomonnaies, en abordant les technologies sous-jacentes, les applications pratiques, et les enjeux de sécurité. Vous découvrirez comment créer des contrats intelligents, sécuriser des transactions, et comprendre les implications réglementaires. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de comprendre les fondamentaux de la blockchain et de développer des applications pratiques. [500 mots]",
                objectif: "Comprendre les fondamentaux de la blockchain.",
                public: "Développeurs, investisseurs, étudiants",
                prix: 3300,
                duree: 4,
                slug: "introduction-a-la-blockchain"
            }
        ]
    },
    {
        id: 10,
        name: "Émilie Girard",
        bio: "Spécialiste en gestion de projet avec une certification PMP.",
        image: "https://example.com/image10.jpg",
        formation: [
            {
                title: "Gestion de Projet Agile",
                description: "Ce cours vous apprendra les principes de la gestion de projet Agile, en mettant l'accent sur la planification, l'exécution, et la livraison itérative. Vous découvrirez comment gérer les risques, communiquer efficacement, et mesurer la performance. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de devenir un chef de projet Agile certifié, adapté aux besoins de votre entreprise. [500 mots]",
                objectif: "Devenir un chef de projet Agile certifié.",
                public: "Chefs de projet, équipes de développement, managers",
                prix: 3400,
                duree: 5,
                slug: "gestion-de-projet-agile"
            }
        ]
    },
    {
        id: 11,
        name: "Nicolas Roy",
        bio: "Analyste de données avec une expertise en Big Data.",
        image: "https://example.com/image11.jpg",
        formation: [
            {
                title: "Analyse de Données avec Big Data",
                description: "Ce cours vous apprendra à analyser de grandes quantités de données, en abordant les technologies de stockage, de traitement, et d'analyse. Vous découvrirez comment extraire des insights, visualiser des données, et prendre des décisions éclairées. Des projets pratiques vous permettront de mettre en œuvre vos compétences dans des scénarios réels, tout en recevant des retours d'experts. À la fin de cette formation, vous serez capable de maîtriser les outils d'analyse de données et de développer des solutions d'analyse de données robustes et évolutives. [500 mots]",
                objectif: "Maîtriser les outils d'analyse de données.",
                public: "Analystes, scientifiques des données, étudiants",
                prix: 3500,
                duree: 6,
                slug: "analyse-de-donnees-avec-big-data"
            }
        ]
    }
]
export default data