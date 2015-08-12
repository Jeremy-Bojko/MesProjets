'use strict'; 

angular.module('VillaShamengo.services', [])

.factory('Innov',function(){

	var data = [
	    {
	      "innovName": "Potager Vertical",
	      "pionnerName" : "Peggy Pascal",
	      "innovNumber": 1,
	      "category" : "Food",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Description breve",
	        "innovation": "Description innovation",
	        "pionner": "Description pionnier"
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/",
	        "pioneerPicture": "img/2055.png",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Je cultive un potager vertical",
	      "pionnerName" : "Britta Riley",
	      "innovNumber": 2,
	      "category" : "Food",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Pour nous reconnecter à la terre, cette citadine a inventé un potager malin qui se suspend à nos fenêtres. Grâce à cette technique, nous pouvons cultiver des plantes aromatiques, salades et fruits rouges, même dans les plus petits studios. \nCraquant.",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/97-britta-riley",
	        "pioneerPicture": "img/2217.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Loliware",
	      "pionnerName" : "Chelsea Briganti",
	      "innovNumber": 3,
	      "category" : "Food",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.loliware.com/about/",
	        "pioneerPicture": "img/2308.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Wikipearl",
	      "pionnerName" : "David Edwards",
	      "innovNumber": 4,
	      "category" : "Food",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Pour éviter l’avalanche de produits phytosanitaires dans les rizières, Takao a trouvé l’arme fatale :  Des canards ! Ces palmipèdes se régalent de tous les parasites, génèrent de l’engrais et égaient le paysage pour le bonheur de tous. \nRéjouissant.",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.loliware.com/about/",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Mes champignons poussent grâce à votre petit noir sur le zinc",
	      "pionnerName" : "Cédric Péchard",
	      "innovNumber": 5,
	      "category" : "Food",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Saviez-vous que le marc de café, est l’un des meilleurs substrats agricoles au monde ? Cédric s’en sert pour faire pousser des pleurotes en ville. L’une des initiatives de l’économie circulaire les plus prometteuses qu’il soit. \nA votre café et vos fourchettes !",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/167-cedric-pechard",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Chewing-Gum Chizca",
	      "pionnerName" : "Manuele Aldrete",
	      "innovNumber": 6,
	      "category" : "Food",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/167-cedric-pechard",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Mon eau sèche reverdit les déserts",
	      "pionnerName" : "Philippe Ouaki di Giorno",
	      "innovNumber": 7,
	      "category" : "Water",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Grâce à l’innovation révolutionnaire de cet agronome, il existe enfin un moyen de maintenir l’eau de pluie à la racine des plantes. Un produit dégradable naturellement à découvrir absolument. \nMagique ! ",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/164-philippe-ouaki-di-giorno",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Je dépollue les sols grâce aux plantes",
	      "pionnerName" : "Thierry Jacquet",
	      "innovNumber": 8,
	      "category" : "Water",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Qui aurait cru que certaines plantes pouvaient détruire jusqu’à 99% des agents toxiques contenus dans les sols, tout en restant saines ? Après 10 ans de recherches, Thierry a trouvé la solution pour décontaminer les sols avec un procédé économique et écologique. La Chine et le Brésil ont déjà adopté cette arme de dépollution massive. \nA qui le tour ? ",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/146-thierry-jacquet",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Je purifie l’eau grâce à l’énergie solaire",
	      "pionnerName" : "Petra Wadström",
	      "innovNumber": 9,
	      "category" : "Water",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Son invention ressemble à un simple jerrican. Elle est pourtant le fruit d’une longue recherche technologique. Son pouvoir : transformer en quelques heures une eau infestée de bactéries en eau potable. \nMagique.",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/86-petra-wadstrom",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "C:/Bla/Bla/Bla/Bla"
	      }
	    },
	    
	    {
	      "innovName": "Nous transformons l’eau des marres en eau potable",
	      "pionnerName" : "François Jaquenoud & Lo Chay",
	      "innovNumber": 10,
	      "category" : "Water",
	      "starred": false,
	      "beaconMajor": "0123456789",
	      "textFields": {
	        "enBref": "Permettre à des populations très pauvres d’avoir accès à une eau potable bon marché, c’est le pari mené à un train d’enfer par ce duo franco-cambodgien. Cerise sur le gâteau : ce projet sanitaire est développé par des micro-entrepreneurs locaux. ",
	        "innovation": "",
	        "pionner": ""
	      },
	      "path": {
	        "ShamengoLink": "http://www.shamengo.com/fr/pionnier/58-francois-jacquenoud-amp-lo-chay",
	        "pioneerPicture": "img/2323.jpg",
	        "innovPicture": "C:/Bla/Bla/Bla/Bla",
	        "innovVideo": "	C:/Bla/Bla/Bla/Bla"
	      }
	    }
	];


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
			return data;
		},
		get: function(innovNumber){
			for (var i = 0; i < data.length; i++) {
				if (data[i].innovNumber === parseInt(innovNumber)) {
					return data[i];
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