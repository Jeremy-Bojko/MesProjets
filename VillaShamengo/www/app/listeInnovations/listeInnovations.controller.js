'use strict'; 

angular.module('VillaShamengo.controllers', [])

.controller('listeInnovationsCtrl', ['$scope', 
	function($scope){

		var data = 
		[

			{
			  "title": "InnovTitle",
			  "innovNumber": 1,
			  "starred": false,
			  "beaconUUID": "0123456789",
			  "textFields": {
			    "enBref": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lorem metus. Vestibulum eget massa at augue ultricies scelerisque eu id diam. Mauris quis leo ex. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed hendrerit consectetur augue, tincidunt maximus leo feugiat ut. Suspendisse iaculis nulla ac pulvinar malesuada. Fusce eget turpis vel enim ornare pellentesque. Ut sed eros nec nibh fringilla fringilla eget at nisi. Vestibulum vitae ultricies enim, vel dapibus enim. Donec eget dui hendrerit nulla luctus lacinia sit amet et mi. Pellentesque dignissim massa et ultrices feugiat. Suspendisse potenti. Etiam mattis nisi feugiat, hendrerit odio maximus, rutrum ipsum.",
			    "innovation": "Curabitur odio est, tincidunt a metus id, lobortis ornare massa. Maecenas molestie est sed neque euismod sodales. Morbi auctor dapibus posuere. Suspendisse at mi non erat maximus varius. Duis sed lorem sem. Cras ac sem maximus massa pellentesque efficitur. Fusce suscipit tortor lacus, et volutpat sapien laoreet imperdiet. Phasellus rutrum urna sed purus semper, sit amet rutrum nunc dictum. Pellentesque eget sapien nunc. Proin erat enim, maximus ut augue in, aliquam suscipit urna.",
			    "pionner": "Vestibulum aliquet auctor gravida. Fusce finibus pellentesque lorem a congue. Donec elementum leo et ultrices dapibus. Ut tincidunt quis erat lobortis maximus. Pellentesque porttitor efficitur leo, nec bibendum mauris mattis in. Nulla tincidunt orci nec ligula efficitur volutpat. Phasellus scelerisque orci feugiat dolor congue venenatis. Pellentesque ut ligula eget odio maximus condimentum. Sed sollicitudin nibh ut odio pulvinar, ac euismod quam mattis. Curabitur lobortis ex ut nibh egestas tristique. Pellentesque id ex vitae libero fermentum finibus a vitae velit. Maecenas interdum viverra mollis."
			  },
			  "path": {
			    "pioneerPicture": "img/2055.png",
			    "innovPicture": "C:/Bla/Bla/Bla/Bla",
			    "innovVideo": "C:/Bla/Bla/Bla/Bla"
			  }
			},
			{
			  "title": "InnovTitle2",
			  "innovNumber": 2,
			  "starred": false,
			  "beaconUUID": "0123456789",
			  "textFields": {
			    "enBref": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lorem metus. Vestibulum eget massa at augue ultricies scelerisque eu id diam. Mauris quis leo ex. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed hendrerit consectetur augue, tincidunt maximus leo feugiat ut. Suspendisse iaculis nulla ac pulvinar malesuada. Fusce eget turpis vel enim ornare pellentesque. Ut sed eros nec nibh fringilla fringilla eget at nisi. Vestibulum vitae ultricies enim, vel dapibus enim. Donec eget dui hendrerit nulla luctus lacinia sit amet et mi. Pellentesque dignissim massa et ultrices feugiat. Suspendisse potenti. Etiam mattis nisi feugiat, hendrerit odio maximus, rutrum ipsum.",
			    "innovation": "Curabitur odio est, tincidunt a metus id, lobortis ornare massa. Maecenas molestie est sed neque euismod sodales. Morbi auctor dapibus posuere. Suspendisse at mi non erat maximus varius. Duis sed lorem sem. Cras ac sem maximus massa pellentesque efficitur. Fusce suscipit tortor lacus, et volutpat sapien laoreet imperdiet. Phasellus rutrum urna sed purus semper, sit amet rutrum nunc dictum. Pellentesque eget sapien nunc. Proin erat enim, maximus ut augue in, aliquam suscipit urna.",
			    "pionner": "Vestibulum aliquet auctor gravida. Fusce finibus pellentesque lorem a congue. Donec elementum leo et ultrices dapibus. Ut tincidunt quis erat lobortis maximus. Pellentesque porttitor efficitur leo, nec bibendum mauris mattis in. Nulla tincidunt orci nec ligula efficitur volutpat. Phasellus scelerisque orci feugiat dolor congue venenatis. Pellentesque ut ligula eget odio maximus condimentum. Sed sollicitudin nibh ut odio pulvinar, ac euismod quam mattis. Curabitur lobortis ex ut nibh egestas tristique. Pellentesque id ex vitae libero fermentum finibus a vitae velit. Maecenas interdum viverra mollis."
			  },
			  "path": {
			    "pioneerPicture": "img/2217.jpg",
			    "innovPicture": "C:/Bla/Bla/Bla/Bla",
			    "innovVideo": "C:/Bla/Bla/Bla/Bla"
			  }
			},
			{
			  "title": "InnovTitle3",
			  "innovNumber": 3,
			  "starred": false,
			  "beaconUUID": "0123456789",
			  "textFields": {
			    "enBref": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lorem metus. Vestibulum eget massa at augue ultricies scelerisque eu id diam. Mauris quis leo ex. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed hendrerit consectetur augue, tincidunt maximus leo feugiat ut. Suspendisse iaculis nulla ac pulvinar malesuada. Fusce eget turpis vel enim ornare pellentesque. Ut sed eros nec nibh fringilla fringilla eget at nisi. Vestibulum vitae ultricies enim, vel dapibus enim. Donec eget dui hendrerit nulla luctus lacinia sit amet et mi. Pellentesque dignissim massa et ultrices feugiat. Suspendisse potenti. Etiam mattis nisi feugiat, hendrerit odio maximus, rutrum ipsum.",
			    "innovation": "Curabitur odio est, tincidunt a metus id, lobortis ornare massa. Maecenas molestie est sed neque euismod sodales. Morbi auctor dapibus posuere. Suspendisse at mi non erat maximus varius. Duis sed lorem sem. Cras ac sem maximus massa pellentesque efficitur. Fusce suscipit tortor lacus, et volutpat sapien laoreet imperdiet. Phasellus rutrum urna sed purus semper, sit amet rutrum nunc dictum. Pellentesque eget sapien nunc. Proin erat enim, maximus ut augue in, aliquam suscipit urna.",
			    "pionner": "Vestibulum aliquet auctor gravida. Fusce finibus pellentesque lorem a congue. Donec elementum leo et ultrices dapibus. Ut tincidunt quis erat lobortis maximus. Pellentesque porttitor efficitur leo, nec bibendum mauris mattis in. Nulla tincidunt orci nec ligula efficitur volutpat. Phasellus scelerisque orci feugiat dolor congue venenatis. Pellentesque ut ligula eget odio maximus condimentum. Sed sollicitudin nibh ut odio pulvinar, ac euismod quam mattis. Curabitur lobortis ex ut nibh egestas tristique. Pellentesque id ex vitae libero fermentum finibus a vitae velit. Maecenas interdum viverra mollis."
			  },
			  "path": {
			    "pioneerPicture": "img/2308.jpg",
			    "innovPicture": "C:/Bla/Bla/Bla/Bla",
			    "innovVideo": "C:/Bla/Bla/Bla/Bla"
			  }
			}

		];

		$scope.innovations = new Array();
		for (var i = 0; i < data.length; i++) {
			$scope.innovations.push(data[i]);
		};
	
}])