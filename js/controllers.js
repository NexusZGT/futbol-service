var futbolCtrl = angular.module("futbolCtrl",[]);

futbolCtrl.controller("listTournamentsCtrl", ["$scope","$http",function($scope,$http) {

		var url= "http://api.football-data.org/v1/soccerseasons";
		$http({
			method: 'GET',
			url:'url',
    	headers:{
        'X-Auth-Token' : 'fedd55f67bba46b5a52c5a0058168b00'
    				}
					}
		).success(function(data){
			$scope.tournaments = data;
		});
}]);

futbolCtrl.controller("detalleTournamentCtrl",["$scope", "$http","$routeParams",function($scope,$http,$routeParams){
		var urlDetalles = "http://api.football-data.org/v1/soccerseasons/"+ $routeParams.tournamentID;
		$http.get(urlDetalles).success(function(datos){
			$scope.detalleTournament = datos;
		});

}]);
