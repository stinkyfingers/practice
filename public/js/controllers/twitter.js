var twitterApp = angular.module("twitterApp",[]);

twitterApp.controller("twitterController",function($scope, twitterFactory, $location, $window){

	showBaseString = function(){
		str = twitterFactory.createSignature();
		return str;
	}
	output = showBaseString();
	console.log(output);

	$scope.test = function(){
		twitterFactory.test()
			.then(function(data){
				console.log(data);
			},function(){
				alert("Failure!")
			})
	}


});