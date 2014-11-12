imgurApp.factory("imgurFactory", ['$http','$q',function($http, $q){
	var factory = {};
	var clientId = 'a269f56d36a8aa0';
	var oAuthUrl = 'https://api.imgur.com/oauth2/authorize?client_id='+clientId+'&response_type=token';

	factory.lookup = function(id){
		var deferred = $q.defer();
		$http({
			method:'get',
			url: 'https://api.imgur.com/3/image/'+id,
			headers:{
				Authorization: 'Client-ID 1560b4d377a69a3'
			}
			
		})
		.success(function(data){
			// console.log(data);
			deferred.resolve(data.data);
		})
		.error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}
	factory.login = function(){
		var deferred = $q.defer();
		$http({
			method:'get',
			url: 'https://api.imgur.com/oauth2/authorize?client_id=a269f56d36a8aa0&response_type=token',
			headers:{
				Authorization: 'Client-ID a269f56d36a8aa0'
			}
			
		})
		.success(function(data){
			// First, parse the query string
			var params = {}, queryString = location.hash.substring(1),
			    regex = /([^&=]+)=([^&]*)/g, m;
			while (m = regex.exec(queryString)) {
			  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
			}
			console.log(data);
			deferred.resolve(params);
		})
		.error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}




	return factory;
}]);