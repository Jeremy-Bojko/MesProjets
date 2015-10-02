'use strict'; 

angular.module('VillaShamengo.controllers', [])

.controller('listeInnovationsCtrl', 
	function($scope, Innov, $filter){
		$scope.innovations = Innov.all();
		$scope.search ='';
})