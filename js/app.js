var futbolService = angular.module("futbolService", ["ngRoute","futbolCtrl"]);

futbolService.config(["$routeProvider", function($routeProvider){
		$routeProvider.
		when("/:tournamentID",{
			templateUrl: "teams.html",
			controller: "detalleTournamentCtrl"
		}).
		otherwise({
			redirecTo: "/"
		});

}]);
