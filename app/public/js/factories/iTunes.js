musicApp.factory("musicFactory",function($http,$q){
	var service = {};
	var baseUrl = "https://itunes.apple.com/search?term=";
	var _artist = "";
	var _finalUrl = "";

	var makeUrl = function(){
		artist = service.getArtist();
		artist = artist.split(" ").join("+");
		_finalUrl = baseUrl + _artist + "&callback=JSON_CALLBACK";
		return _finalUrl;
	}
	var quickUrl = "https://itunes.apple.com/search?term=Dio&callback=JSON_CALLBACK";

	service.setArtist = function(artist){
		_artist = artist;
	}

	service.getArtist = function(){
		return _artist;
	}

	service.callItunes = function(){
		makeUrl();
		var deferred = $q.defer();
		$http({
			method:"JSONP",
			url: _finalUrl
		}).success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("Error");
		})

		return deferred.promise;
	}

	// service.quick = function(){
	// 	var deferred = $q.defer();
	// 	$http.jsonp(quickUrl)
	// 		.success(function(data){
	// 			deferred.resolve(data);
	// 			// console.log(data);
	// 		});
	// 	return deferred.promise;
	// }
	return service;
})