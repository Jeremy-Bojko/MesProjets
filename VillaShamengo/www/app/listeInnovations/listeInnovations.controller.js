'use strict'; 

angular.module('VillaShamengo.controllers', [])

.controller('listeInnovationsCtrl', 
	function($scope, Innov){
		$scope.innovations = Innov.all(); 	
})