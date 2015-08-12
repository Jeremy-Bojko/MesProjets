'use strict'; 

angular.module('VillaShamengo.controllers')

.controller('ficheInnovationCtrl',
	function($scope, Innov, $stateParams){
		$scope.ficheInnov = Innov.get($stateParams.innovationId); 
	
}); 