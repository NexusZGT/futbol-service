var futbolCtrl = angular.module("futbolCtrl",[]);

futbolCtrl.controller("listTournamentsCtrl", ["$scope","$http",function($scope,$http) {

		var url= "http://api.football-api.com/2.0/competitions?Authorization=565eaa22251f932b9f000001d50aaf0b55c7477c5ffcdbaf113ebbda";
		$http({
			method: 'GET',
			url:'url',
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
