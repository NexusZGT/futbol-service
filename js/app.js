var calendarService = angular.module("calendarService", ["ngRoute","calendarCtrl"]);

calendarService.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when("/:mes",{
		templateUrl: "meses.html",
		controller: "listCalendarCtrl"
	}).
	otherwise({
		redirecTo: "/"
	});

}]);
