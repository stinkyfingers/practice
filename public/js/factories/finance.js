financeApp.factory("finFactory", ['$http','$q',function($http,$q){
	// yahooConsumerKey = "dj0yJmk9S0RjWHp1UzJSOUVlJmQ9WVdrOVpGbENSR3hZTmpRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1hYQ--";
	// yahooConsumerSecret = "4e80135214d9061ff41f5b957ec6fb145976aae7";
	//see: http://dev.markitondemand.com/
	var lookup = "http://dev.markitondemand.com/Api/v2/Lookup?callback=jsoncallback&input="
	var quote = "http://dev.markitondemand.com/Api/v2/Quote?symbol=";
	var factory = {};

	factory.getTest = function(){
		return [{testes:"testes"},{testes:"test"}];
	}

	factory.lookup = function(term){
		var deferred = $q.defer();
		$http.get(lookup+term).success(function(data){
			deferred.resolve(data);
		}).error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}

	factory.getQuote = function(symbol){
		var deferred = $q.defer();
		$http.get(quote+symbol).success(function(data){
			deferred.resolve(data);
		}).error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}


	return factory;

}]);