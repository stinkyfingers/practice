//cal2
calendar2App.factory("calendarFactory2", ['$http','$q',function($http, $q){
	var factory = {};
	// var clientId = '576551333135-k4g9c1jcsbeg52fjniougsjtics1i5js.apps.googleusercontent.com';
	// var secret = 'vHxE0ALAt6ogyfRoXgnBPhne';
	// var authUrl = 'https://www.googleapis.com/auth/calendar';


	// var OAUTHURL    =   'https://accounts.google.com/o/oauth2/auth?';
 //    var VALIDURL    =   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
 //    var SCOPE       =   'https://www.googleapis.com/auth/calendar';
 //    var CLIENTID    =   '576551333135-k4g9c1jcsbeg52fjniougsjtics1i5js.apps.googleusercontent.com';
 //    var REDIRECT    =   'https://practicegoangular.appspot.com/calendar'
 //    var TYPE        =   'token';
 //    var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;

	// var calendarList = 'https://www.googleapis.com/calendar/v3/users/me/calendarList?access_token=';
	var calendarId = 'johnshenkthegreat@gmail.com';
	factory.setCalendarId = function(calendarId){
		this.calendarId = calendarId;
	}

	var getCalendarId = function(){
		return this.calendarId;
	}


	var apiBase = 'https://www.googleapis.com/calendar/v3';
	var calendarList = '/users/me/calendarList?access_token=';
	var eventsList = '/calendars/'+calendarId+'/events?access_token=';
	
	factory.calendarList = function(access_token){
		var deferred = $q.defer();
		$http({
			method:'get',
			url: apiBase+calendarList+access_token
		})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}


	factory.eventsList = function(access_token){
		var deferred = $q.defer();
		$http({
			method:'get',
			url: apiBase+eventsList+access_token
		})
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}




	return factory;
}]);