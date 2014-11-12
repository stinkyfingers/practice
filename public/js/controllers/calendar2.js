//cal2
var calendar2App = angular.module("calendar2App",[]);

calendar2App.controller("calendarController2",function($scope,calendarFactory2, $location, $window){

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