app.controller("MainController", function($scope){
	$scope.newPerson = null;
	loadRemoteData();
    $scope.addNew = function() {
        if ($scope.newPerson != null && $scope.newPerson != "") {
            $scope.people.push({
                id: $scope.people.length,
                name: $scope.newPerson,
                live: true,
                music: []
            });
        }
    }

	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
        {
            id: 0,
            name: 'Leon',
            music: [
                'Rock',
                'Metal',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 1,
            name: 'Chris',
            music: [
                'Indie',
                'Drumstep',
                'Dubstep',
                'Electro'
            ],
            live: true
        },
        {
            id: 2,
            name: 'Harry',
            music: [
                'Rock',
                'Metal',
                'Thrash Metal',
                'Heavy Metal'
            ],
            live: false
        },
        {
            id: 3,
            name: 'Allyce',
            music: [
                'Pop',
                'RnB',
                'Hip Hop'
            ],
            live: true
        }
    ];

	function loadRemoteData() {
	 
		// The friendService returns a promise.
		friendService.getFriends()
		.then(
			function( friends ) {
			 
				applyRemoteData( friends );
			 
			}
		);

	}

}
 app.service(
	"friendService",
	function( $http, $q ) {
	 
		// Return public API.
		return({
		// addFriend: addFriend,
		getFriends: getFriends,
		// removeFriend: removeFriend
		});
	 
	 	function getFriends() {
	 
			var request = $http({
				method: "get",
				url: "api/index.cfm",
				params: {
					action: "get"
				}
			});
	 
		return( request.then( handleSuccess, handleError ) );
	}
	function handleSuccess( response ) {
 
		return( response.data );
 
	}
	 
});