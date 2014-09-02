var musicApp = angular.module("musicApp",[]);

musicApp.controller("musicController",function($scope,musicFactory){
	$scope.data = {};
	$scope.updateArtist = function(){
		musicFactory.setArtist($scope.artist);
	};
	$scope.submitArtist = function(){
		musicFactory.callItunes()
			.then(function(data){
				$scope.results = data.results;
			},function(){
				alert("Query failed");
			})
	}

	// $scope.quick = function(){
	// 	musicFactory.quick()
	// 		.then(function(data){
	// 			$scope.results = data.results;
	// 			console.log($scope.results);
	// 		});
	// }


});