
var imgurApp = angular.module("imgurApp",[]);

imgurApp.controller("imgurController",function($scope,imgurFactory){

	$scope.image = {};
	$scope.lookup = function(image){
		var result = imgurFactory.lookup(image.id)
		.then(function(data){
			$scope.image = data;
			console.log(data);
		});
		
	}
	$scope.auth = function(){
		result = imgurFactory.login()
			.then(function(data){
				$scope.accessToken = data.access_token;
				$scope.refreshToken = data.refresh_token;
				$scope.expiresIn = data.expires_in;
				$scope.accountUser = data.account_username;
				console.log($scope.accessToken);
			});
	
	}




	// return controller;

});