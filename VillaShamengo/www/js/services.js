'use strict'; 

angular.module('VillaShamengo.services', [])

.factory('Innov',function(){

	var data = {
  "fiches": [
    {
      "innovName": "Potager Vertical",
      "pioneerName": "Peggy Pascal",
      "pionneerCountry": "",
      "innovNumber": 1,
      "category": "Nourriture",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer01.png",
      "innovPicture": "innov01.jpg",
      "innovVideo": "video01.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/"
    },
    {
      "innovName": "Je cultive un potager vertical",
      "pioneerName": "Britta Riley",
      "pionneerCountry": "Brooklyn - United States",
      "innovNumber": 2,
      "category": "Nourriture",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Pour nous reconnecter à la terre, cette citadine a inventé un potager malin qui se suspend à nos fenêtres. Grâce à cette technique, nous pouvons cultiver des plantes aromatiques, salades et fruits rouges, même dans les plus petits studios. \nCraquant.",
      "pioneerPicture": "pioneer02.jpg",
      "innovPicture": "innov02.jpg",
      "innovVideo": "video02.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/97-britta-riley"
    },
    {
      "innovName": "Loliware",
      "pioneerName": "Chelsea Briganti",
      "pionneerCountry": "",
      "innovNumber": 3,
      "category": "Nourriture",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer03.jpg",
      "innovPicture": "innov03.jpg",
      "innovVideo": "video03.jpg",
      "ShamengoLink": "http://www.loliware.com/about/"
    },
    {
      "innovName": "Wikipearl",
      "pioneerName": "David Edwards",
      "pionneerCountry": "",
      "innovNumber": 4,
      "category": "Nourriture",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer04.jpg",
      "innovPicture": "innov04.jpg",
      "innovVideo": "video04.jpg",
      "ShamengoLink": "http://www.wikipearl.com/#wikipearl"
    },
    {
      "innovName": "Mes champignons poussent grâce à votre petit noir sur le zinc",
      "pioneerName": "Cédric Péchard",
      "pionneerCountry": "Versailles - France",
      "innovNumber": 5,
      "category": "Nourriture",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Saviez-vous que le marc de café, est l’un des meilleurs substrats agricoles au monde ? Cédric s’en sert pour faire pousser des pleurotes en ville. L’une des initiatives de l’économie circulaire les plus prometteuses qu’il soit. \nA votre café et vos fourchettes !",
      "pioneerPicture": "pioneer05.jpg",
      "innovPicture": "innov05.jpg",
      "innovVideo": "video05.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/167-cedric-pechard"
    },
    {
      "innovName": "Chewing-Gum Chizca",
      "pioneerName": "Manuele Aldrete",
      "pionneerCountry": "",
      "innovNumber": 6,
      "category": "Nourriture",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer06.jpg",
      "innovPicture": "innov06.jpg",
      "innovVideo": "video06.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Mon eau sèche reverdit les déserts",
      "pioneerName": "Philippe Ouaki di Giorno",
      "pionneerCountry": "Eauze - France",
      "innovNumber": 7,
      "category": "Eau",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Grâce à l’innovation révolutionnaire de cet agronome, il existe enfin un moyen de maintenir l’eau de pluie à la racine des plantes. Un produit dégradable naturellement à découvrir absolument. \nMagique !",
      "pioneerPicture": "pioneer07.jpg",
      "innovPicture": "innov07.jpg",
      "innovVideo": "video07.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/164-philippe-ouaki-di-giorno"
    },
    {
      "innovName": "Je dépollue les sols grâce aux plantes",
      "pioneerName": "Thierry Jacquet",
      "pionneerCountry": "La Brosse-Montceaux - France",
      "innovNumber": 8,
      "category": "Eau",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Qui aurait cru que certaines plantes pouvaient détruire jusqu’à 99% des agents toxiques contenus dans les sols, tout en restant saines ? Après 10 ans de recherches, Thierry a trouvé la solution pour décontaminer les sols avec un procédé économique et écologique. La Chine et le Brésil ont déjà adopté cette arme de dépollution massive. \nA qui le tour ?",
      "pioneerPicture": "pioneer08.jpg",
      "innovPicture": "innov08.jpg",
      "innovVideo": "video08.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/146-thierry-jacquet"
    },
    {
      "innovName": "Je purifie l’eau grâce à l’énergie solaire",
      "pioneerName": "Petra Wadström",
      "pionneerCountry": "Stockholm - Suède",
      "innovNumber": 9,
      "category": "Eau",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Son invention ressemble à un simple jerrican. Elle est pourtant le fruit d’une longue recherche technologique. Son pouvoir : transformer en quelques heures une eau infestée de bactéries en eau potable. \nMagique.",
      "pioneerPicture": "pioneer09.jpg",
      "innovPicture": "innov09.jpg",
      "innovVideo": "video09.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/86-petra-wadstrom"
    },
    {
      "innovName": "Nous transformons l’eau des marres en eau potable",
      "pioneerName": "François Jaquenoud & Lo Chay",
      "pionneerCountry": "Phnom Penh - Cambodia",
      "innovNumber": 10,
      "category": "Eau",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Permettre à des populations très pauvres d’avoir accès à une eau potable bon marché, c’est le pari mené à un train d’enfer par ce duo franco-cambodgien. \nCerise sur le gâteau : ce projet sanitaire est développé par des micro-entrepreneurs locaux.",
      "pioneerPicture": "pioneer10.jpg",
      "innovPicture": "innov10.jpg",
      "innovVideo": "video10.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/58-francois-jacquenoud-amp-lo-chay"
    },
    {
      "innovName": "Chargeur téléphone",
      "pioneerName": "Georgie Delaney",
      "pionneerCountry": "",
      "innovNumber": 11,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer11.jpg",
      "innovPicture": "innov11.jpg",
      "innovVideo": "video11.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Route cyclable solaire",
      "pioneerName": "Sten de Wit",
      "pionneerCountry": "",
      "innovNumber": 12,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer12.jpg",
      "innovPicture": "innov12.jpg",
      "innovVideo": "video12.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Cuisinez écolo avec mon four solaire",
      "pioneerName": "Beverly Blum",
      "pionneerCountry": "Sacramento - United States",
      "innovNumber": 13,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Il y a 30 ans, cette mère de famille découvre incrédule que personne n’utilise la cuisson solaire en Afrique. Il n’en fallait pas plus à cette pionnière pour évangéliser les femmes africaines avec son four solaire.",
      "pioneerPicture": "pioneer13.jpg",
      "innovPicture": "innov13.jpg",
      "innovVideo": "video13.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/137-beverly-blum"
    },
    {
      "innovName": "Mon réfrigérateur fonctionne sans électricité",
      "pioneerName": "Mansukh Prajapati",
      "pionneerCountry": "Wankaner - India",
      "innovNumber": 14,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Fabricant de jarres traditionnelles en argile, ce potier indien a eu l’idée d’améliorer sa technique en fabriquant sur le même principe des réfrigérateurs. La température intérieure y est de 15 à 20 degrés inférieurs à la température extérieure. Rafraichissant !",
      "pioneerPicture": "pioneer14.jpg",
      "innovPicture": "innov14.jpg",
      "innovVideo": "video14.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/163-mansukhlal-prajapati"
    },
    {
      "innovName": "Qarnot - l’ordinateur/radiateur de la villa",
      "pioneerName": "Paul Benoît",
      "pionneerCountry": "",
      "innovNumber": 15,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer15.jpg",
      "innovPicture": "innov15.jpg",
      "innovVideo": "video15.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Pilo",
      "pioneerName": "Urbain Prieur, Alice Fournet, Nicolas Toper",
      "pionneerCountry": "",
      "innovNumber": 16,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer16.jpg",
      "innovPicture": "innov16.jpg",
      "innovVideo": "video16.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Je vous aide à économiser votre électricité",
      "pioneerName": "Pilgrim Beart",
      "pionneerCountry": "London - United Kingdom",
      "innovNumber": 17,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Cet ingénieur a mis au point un dispositif qui permet de connaître en temps réel le coût  de sa consommation électrique. Grâce aux options de son système, il devient très facile de faire la chasse au gaspi et de réaliser ainsi de substantielles économies.",
      "pioneerPicture": "pioneer17.jpg",
      "innovPicture": "innov17.jpg",
      "innovVideo": "video17.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/133-pilgrim-beart"
    },
    {
      "innovName": "Les intouchables que je réhabilite ne ramassent plus les excréments humains",
      "pioneerName": "Bindeshwar Pathak",
      "pionneerCountry": "New Delhi / India",
      "innovNumber": 18,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Ce géant de l’entrepreneuriat social a libéré un million d’intouchables dont le métier consistait jusqu’alors à vider à mains nues des toilettes d’un autre âge. Celles qu’il installe en remplacement sont des modèles open source ultra-écologiques dont l’Occident pourrait s’inspirer.",
      "pioneerPicture": "pioneer18.jpg",
      "innovPicture": "innov18.jpg",
      "innovVideo": "video18.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/63-bindeswhar-pathak"
    },
    {
      "innovName": "Liter of light salon ou jardin",
      "pioneerName": "Illac Diaz",
      "pionneerCountry": "",
      "innovNumber": 19,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer19.jpg",
      "innovPicture": "innov19.jpg",
      "innovVideo": "video20.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Papier de pierre",
      "pioneerName": "Henry Liang",
      "pionneerCountry": "",
      "innovNumber": 20,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer20.jpg",
      "innovPicture": "innov20.jpg",
      "innovVideo": "video20.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "J’ai créé le premier réseau d’énergie verte",
      "pioneerName": "Ursula Sladek",
      "pionneerCountry": "Schönau - Allemagne",
      "innovNumber": 21,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Peut-on produire et distribuer de l’énergie verte pour alimenter les besoins de la population à grande échelle ? Cette mère de famille le prouve avec brio et s’apprête à conquérir le monde. \nContagieux.",
      "pioneerPicture": "pioneer21.jpg",
      "innovPicture": "innov21.jpg",
      "innovVideo": "video21.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/112-ursula-sladek"
    },
    {
      "innovName": "Fleurs ou corbeilles de fruits passion",
      "pioneerName": "Eric Scotto",
      "pionneerCountry": "",
      "innovNumber": 22,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer22.jpg",
      "innovPicture": "innov22.jpg",
      "innovVideo": "video22.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "Shoecharger",
      "pioneerName": "Anthony Mutua",
      "pionneerCountry": "",
      "innovNumber": 23,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "",
      "pioneerPicture": "pioneer23.jpg",
      "innovPicture": "innov23.jpg",
      "innovVideo": "video23.jpg",
      "ShamengoLink": ""
    },
    {
      "innovName": "J’ai créé l’université des va-nu-pieds",
      "pioneerName": "Bunker Roy",
      "pionneerCountry": "Tiloniya, Rajasthan - India",
      "innovNumber": 24,
      "category": "Energie",
      "starred": false,
      "beaconMajor": "123",
      "beaconMinor": "123",
      "description": "Parce que plus d’un milliard de personnes n’ont pas accès à l’électricité et presque autant ont peu suivi l’école, Bunker a décidé de concilier les deux en aidant des va-nu-pieds à devenir ingénieurs solaires, pour apporter la lumière dans leurs villages. \nUn géant de l’entrepreneuriat social !",
      "pioneerPicture": "pioneer24.jpg",
      "innovPicture": "innov24.jpg",
      "innovVideo": "video24.jpg",
      "ShamengoLink": "http://www.shamengo.com/fr/pionnier/170-bunker-roy-i-created-the-barefoot-college"
    }
  ]
};

	// var data = [
	//     {
	//       "innovName": "Potager Vertical",
	//       "pionnerName" : "Peggy Pascal",
	//       "innovNumber": 1,
	//       "category" : "Food",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Description breve",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/",
	//         "pioneerPicture": "img/2055.png",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Je cultive un potager vertical",
	//       "pionnerName" : "Britta Riley",
	//       "innovNumber": 2,
	//       "category" : "Food",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Pour nous reconnecter à la terre, cette citadine a inventé un potager malin qui se suspend à nos fenêtres. Grâce à cette technique, nous pouvons cultiver des plantes aromatiques, salades et fruits rouges, même dans les plus petits studios. \nCraquant.",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/97-britta-riley",
	//         "pioneerPicture": "img/2217.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Loliware",
	//       "pionnerName" : "Chelsea Briganti",
	//       "innovNumber": 3,
	//       "category" : "Food",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Description breve",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.loliware.com/about/",
	//         "pioneerPicture": "img/2308.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Wikipearl",
	//       "pionnerName" : "David Edwards",
	//       "innovNumber": 4,
	//       "category" : "Food",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Pour éviter l’avalanche de produits phytosanitaires dans les rizières, Takao a trouvé l’arme fatale :  Des canards ! Ces palmipèdes se régalent de tous les parasites, génèrent de l’engrais et égaient le paysage pour le bonheur de tous. \nRéjouissant.",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.loliware.com/about/",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Mes champignons poussent grâce à votre petit noir sur le zinc",
	//       "pionnerName" : "Cédric Péchard",
	//       "innovNumber": 5,
	//       "category" : "Food",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Saviez-vous que le marc de café, est l’un des meilleurs substrats agricoles au monde ? Cédric s’en sert pour faire pousser des pleurotes en ville. L’une des initiatives de l’économie circulaire les plus prometteuses qu’il soit. \nA votre café et vos fourchettes !",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/167-cedric-pechard",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Chewing-Gum Chizca",
	//       "pionnerName" : "Manuele Aldrete",
	//       "innovNumber": 6,
	//       "category" : "Food",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Description breve",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/167-cedric-pechard",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Mon eau sèche reverdit les déserts",
	//       "pionnerName" : "Philippe Ouaki di Giorno",
	//       "innovNumber": 7,
	//       "category" : "Water",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Grâce à l’innovation révolutionnaire de cet agronome, il existe enfin un moyen de maintenir l’eau de pluie à la racine des plantes. Un produit dégradable naturellement à découvrir absolument. \nMagique ! ",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/164-philippe-ouaki-di-giorno",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Je dépollue les sols grâce aux plantes",
	//       "pionnerName" : "Thierry Jacquet",
	//       "innovNumber": 8,
	//       "category" : "Water",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Qui aurait cru que certaines plantes pouvaient détruire jusqu’à 99% des agents toxiques contenus dans les sols, tout en restant saines ? Après 10 ans de recherches, Thierry a trouvé la solution pour décontaminer les sols avec un procédé économique et écologique. La Chine et le Brésil ont déjà adopté cette arme de dépollution massive. \nA qui le tour ? ",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/146-thierry-jacquet",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Je purifie l’eau grâce à l’énergie solaire",
	//       "pionnerName" : "Petra Wadström",
	//       "innovNumber": 9,
	//       "category" : "Water",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Son invention ressemble à un simple jerrican. Elle est pourtant le fruit d’une longue recherche technologique. Son pouvoir : transformer en quelques heures une eau infestée de bactéries en eau potable. \nMagique.",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/86-petra-wadstrom",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "C:/Bla/Bla/Bla/Bla"
	//       }
	//     },
	    
	//     {
	//       "innovName": "Nous transformons l’eau des marres en eau potable",
	//       "pionnerName" : "François Jaquenoud & Lo Chay",
	//       "innovNumber": 10,
	//       "category" : "Water",
	//       "starred": false,
	//       "beaconMajor": "0123456789",
	//       "textFields": {
	//         "enBref": "Permettre à des populations très pauvres d’avoir accès à une eau potable bon marché, c’est le pari mené à un train d’enfer par ce duo franco-cambodgien. Cerise sur le gâteau : ce projet sanitaire est développé par des micro-entrepreneurs locaux. ",
	//         "innovation": "Description innovation",
	//         "pionner": "Description pionnier"
	//       },
	//       "path": {
	//         "ShamengoLink": "http://www.shamengo.com/fr/pionnier/58-francois-jacquenoud-amp-lo-chay",
	//         "pioneerPicture": "img/2323.jpg",
	//         "innovPicture": "C:/Bla/Bla/Bla/Bla",
	//         "innovVideo": "	C:/Bla/Bla/Bla/Bla"
	//       }
	//     }
	// ];


	// var data = 
	// [
	// 	{
	// 	  "title": "InnovTitle",
	// 	  "innovNumber": 1,
	// 	  "starred": false,
	// 	  "beaconUUID": "0123456789",
	// 	  "textFields": {
	// 	    "enBref": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lorem metus. Vestibulum eget massa at augue ultricies scelerisque eu id diam. Mauris quis leo ex. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed hendrerit consectetur augue, tincidunt maximus leo feugiat ut. Suspendisse iaculis nulla ac pulvinar malesuada. Fusce eget turpis vel enim ornare pellentesque. Ut sed eros nec nibh fringilla fringilla eget at nisi. Vestibulum vitae ultricies enim, vel dapibus enim. Donec eget dui hendrerit nulla luctus lacinia sit amet et mi. Pellentesque dignissim massa et ultrices feugiat. Suspendisse potenti. Etiam mattis nisi feugiat, hendrerit odio maximus, rutrum ipsum.",
	// 	    "innovation": "Curabitur odio est, tincidunt a metus id, lobortis ornare massa. Maecenas molestie est sed neque euismod sodales. Morbi auctor dapibus posuere. Suspendisse at mi non erat maximus varius. Duis sed lorem sem. Cras ac sem maximus massa pellentesque efficitur. Fusce suscipit tortor lacus, et volutpat sapien laoreet imperdiet. Phasellus rutrum urna sed purus semper, sit amet rutrum nunc dictum. Pellentesque eget sapien nunc. Proin erat enim, maximus ut augue in, aliquam suscipit urna.",
	// 	    "pionner": "Vestibulum aliquet auctor gravida. Fusce finibus pellentesque lorem a congue. Donec elementum leo et ultrices dapibus. Ut tincidunt quis erat lobortis maximus. Pellentesque porttitor efficitur leo, nec bibendum mauris mattis in. Nulla tincidunt orci nec ligula efficitur volutpat. Phasellus scelerisque orci feugiat dolor congue venenatis. Pellentesque ut ligula eget odio maximus condimentum. Sed sollicitudin nibh ut odio pulvinar, ac euismod quam mattis. Curabitur lobortis ex ut nibh egestas tristique. Pellentesque id ex vitae libero fermentum finibus a vitae velit. Maecenas interdum viverra mollis."
	// 	  },
	// 	  "path": {
	// 	    "pioneerPicture": "img/2055.png",
	// 	    "innovPicture": "C:/Bla/Bla/Bla/Bla",
	// 	    "innovVideo": "C:/Bla/Bla/Bla/Bla"
	// 	  }
	// 	},
	// 	{
	// 	  "title": "InnovTitle2",
	// 	  "innovNumber": 2,
	// 	  "starred": false,
	// 	  "beaconUUID": "0123456789",
	// 	  "textFields": {
	// 	    "enBref": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lorem metus. Vestibulum eget massa at augue ultricies scelerisque eu id diam. Mauris quis leo ex. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed hendrerit consectetur augue, tincidunt maximus leo feugiat ut. Suspendisse iaculis nulla ac pulvinar malesuada. Fusce eget turpis vel enim ornare pellentesque. Ut sed eros nec nibh fringilla fringilla eget at nisi. Vestibulum vitae ultricies enim, vel dapibus enim. Donec eget dui hendrerit nulla luctus lacinia sit amet et mi. Pellentesque dignissim massa et ultrices feugiat. Suspendisse potenti. Etiam mattis nisi feugiat, hendrerit odio maximus, rutrum ipsum.",
	// 	    "innovation": "Curabitur odio est, tincidunt a metus id, lobortis ornare massa. Maecenas molestie est sed neque euismod sodales. Morbi auctor dapibus posuere. Suspendisse at mi non erat maximus varius. Duis sed lorem sem. Cras ac sem maximus massa pellentesque efficitur. Fusce suscipit tortor lacus, et volutpat sapien laoreet imperdiet. Phasellus rutrum urna sed purus semper, sit amet rutrum nunc dictum. Pellentesque eget sapien nunc. Proin erat enim, maximus ut augue in, aliquam suscipit urna.",
	// 	    "pionner": "Vestibulum aliquet auctor gravida. Fusce finibus pellentesque lorem a congue. Donec elementum leo et ultrices dapibus. Ut tincidunt quis erat lobortis maximus. Pellentesque porttitor efficitur leo, nec bibendum mauris mattis in. Nulla tincidunt orci nec ligula efficitur volutpat. Phasellus scelerisque orci feugiat dolor congue venenatis. Pellentesque ut ligula eget odio maximus condimentum. Sed sollicitudin nibh ut odio pulvinar, ac euismod quam mattis. Curabitur lobortis ex ut nibh egestas tristique. Pellentesque id ex vitae libero fermentum finibus a vitae velit. Maecenas interdum viverra mollis."
	// 	  },
	// 	  "path": {
	// 	    "pioneerPicture": "img/2217.jpg",
	// 	    "innovPicture": "C:/Bla/Bla/Bla/Bla",
	// 	    "innovVideo": "C:/Bla/Bla/Bla/Bla"
	// 	  }
	// 	},
	// 	{
	// 	  "title": "InnovTitle3",
	// 	  "innovNumber": 3,
	// 	  "starred": false,
	// 	  "beaconUUID": "0123456789",
	// 	  "textFields": {
	// 	    "enBref": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lorem metus. Vestibulum eget massa at augue ultricies scelerisque eu id diam. Mauris quis leo ex. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed hendrerit consectetur augue, tincidunt maximus leo feugiat ut. Suspendisse iaculis nulla ac pulvinar malesuada. Fusce eget turpis vel enim ornare pellentesque. Ut sed eros nec nibh fringilla fringilla eget at nisi. Vestibulum vitae ultricies enim, vel dapibus enim. Donec eget dui hendrerit nulla luctus lacinia sit amet et mi. Pellentesque dignissim massa et ultrices feugiat. Suspendisse potenti. Etiam mattis nisi feugiat, hendrerit odio maximus, rutrum ipsum.",
	// 	    "innovation": "Curabitur odio est, tincidunt a metus id, lobortis ornare massa. Maecenas molestie est sed neque euismod sodales. Morbi auctor dapibus posuere. Suspendisse at mi non erat maximus varius. Duis sed lorem sem. Cras ac sem maximus massa pellentesque efficitur. Fusce suscipit tortor lacus, et volutpat sapien laoreet imperdiet. Phasellus rutrum urna sed purus semper, sit amet rutrum nunc dictum. Pellentesque eget sapien nunc. Proin erat enim, maximus ut augue in, aliquam suscipit urna.",
	// 	    "pionner": "Vestibulum aliquet auctor gravida. Fusce finibus pellentesque lorem a congue. Donec elementum leo et ultrices dapibus. Ut tincidunt quis erat lobortis maximus. Pellentesque porttitor efficitur leo, nec bibendum mauris mattis in. Nulla tincidunt orci nec ligula efficitur volutpat. Phasellus scelerisque orci feugiat dolor congue venenatis. Pellentesque ut ligula eget odio maximus condimentum. Sed sollicitudin nibh ut odio pulvinar, ac euismod quam mattis. Curabitur lobortis ex ut nibh egestas tristique. Pellentesque id ex vitae libero fermentum finibus a vitae velit. Maecenas interdum viverra mollis."
	// 	  },
	// 	  "path": {
	// 	    "pioneerPicture": "img/2308.jpg",
	// 	    "innovPicture": "C:/Bla/Bla/Bla/Bla",
	// 	    "innovVideo": "C:/Bla/Bla/Bla/Bla"
	// 	  }
	// 	}
	// ];

	return{
		all: function() {
			return data.fiches;
		},
		get: function(innovNumber){
			for (var i = 0; i < data.fiches.length; i++) {
				if (data.fiches[i].innovNumber === parseInt(innovNumber)) {
					return data.fiches[i];
				}
		    }
		    return null;
		}
	};

		// $scope.innovations = new Array();
		// for (var i = 0; i < data.length; i++) {
		// 	$scope.innovations.push(data[i]);
		// };
	
});