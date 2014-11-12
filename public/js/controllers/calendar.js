
var calendarApp = angular.module("calendarApp",[]);

calendarApp.controller("calendarController",function($scope,calendarFactory, $location, $window){

	$scope.path = $location.path();
	$scope.access_token = $scope.path.split(/[&=]/)[1];
	access_token = $scope.access_token;

	$scope.testSite = ($location.host())=='localhost'?true:false;


	$scope.userCalendars = {};
	$scope.userEvents = {};
	$scope.calendarId = {};
	
	$scope.calendarList = function(){
		access_token = $scope.path.split(/[&=]/)[1];
		var result = calendarFactory.calendarList(access_token)
			.then(function(data){
				$scope.userCalendars = data.items;
				$scope.calendarId = data.items[0].id;
			
				// calendarFactory.setCalendarId($scope.calendarId);
			})
	}

	$scope.eventsList = function(){
		access_token = $scope.path.split(/[&=]/)[1];
		var result = calendarFactory.eventsList(access_token)
			.then(function(data){
				console.log(data);
				$scope.userEvents = data.items;
			})
	}



	// return controller;

});