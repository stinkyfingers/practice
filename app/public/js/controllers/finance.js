
var financeApp = angular.module("financeApp",[]);

financeApp.controller("finController",function($scope,finFactory){
	// $scope.test=[{testes:"testes"}];//needs an array

	var controller = {};

	$scope.test=finFactory.getTest();
	$scope.lookup = function(term){
		$scope.term = term;
		var result = finFactory.lookup(term);
		console.log(result);
	}

	$scope.getQuote = function(symbol){
		$scope.symbol = symbol;
		var result = finFactory.getQuote(symbol);
		console.log(result);
	}



	return controller;

});

