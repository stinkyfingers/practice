twitterApp.factory("twitterFactory", ['$http','$q',function($http, $q){
	var factory = {};

	var APIkey = 'xCBdZRpDZehc2x6yAq37MmjI0';

	factory.getBearerToken(){
		var deferred = $q.defer();
		var url = "https://api.twitter.com/oauth2/token";
		$http({
			method:'post',
			url: url,
			header: {
				consumerSecret: 'RRGy6LNtJvJy0OzL6SXQz90XaVr9r9J6UaamUjDFhUEj1JXCI9',
				oauth_consumer_key: 'xCBdZRpDZehc2x6yAq37MmjI0'
			}
		}).success(function(data){
			deferred.resolve(data);
		})
	}

	factory.test = function(){
		var deferred = $q.defer();
		var sign = factory.createSignature();
		$http.jsonp('https://api.twitter.com/oauth/authorize?oauth_token='+sign)
		.success(function(data){
			deferred.resolve(data);
		})
		.error(function (data) {
               deferred.reject(data);
        });
        return deferred.promise;
	}

	factory.nonce = function(){
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 32;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
	    return randomstring;
	}

	factory.createBaseString = function(){
		return httpMethod+"&"+encodeURIComponent(url)+"&"+encodeURIComponent(encodeParams());
	}

	factory.createSigningKey = function(){
		return encodeURIComponent(consumerSecret)+"&"+encodeURIComponent(tokenSecret);
	}

	factory.createSignature = function(){
		return CryptoJS.HmacSHA1(factory.createBaseString(), factory.createSigningKey());
	}

	encodeParams = function(){
		str = '';
		for(var key in parameters){
			str += encodeURIComponent(key);
			str += '=';
			str += encodeURIComponent(parameters[key]);
			str += "&";

		}
		str = str.substring(0, str.length - 1);
		// console.log("STR: "+str)
		return str;
	}

	var httpMethod = 'GET',
	    url = 'https://userstream.twitter.com/1.1/user.json',
	    parameters = {
	    	include_entities: true,
	        oauth_consumer_key : 'xCBdZRpDZehc2x6yAq37MmjI0', 
	        oauth_nonce : factory.nonce(),
	        oauth_signature_method : 'HMAC-SHA1',
	        oauth_timestamp : Date.now(),
	        oauth_token : '92431847-W4QbFHsUU67AlHBnGFAIJi8adeUNFvPTgz5CmQyFV',
	        oauth_version : '1.0',

	    },
	    consumerSecret = 'RRGy6LNtJvJy0OzL6SXQz90XaVr9r9J6UaamUjDFhUEj1JXCI9',
	    tokenSecret = 'gKJizxAcTL92ggToB8OcNwXX5BBOzeEz0BfVWKQfChzXy',
	    // generates a RFC3986 encoded, BASE64 encoded HMAC-SHA1 hash
	    encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret),
	    // generates a BASE64 encode HMAC-SHA1 hash
	    signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, 
	        { encodeSignature: false})
	    ;
		

	return factory;
}]);