var calendarCtrl = angular.module("calendarCtrl",[]);

calendarCtrl.controller("listCalendarCtrl", ["$scope","$http","$routeParams",function($scope,$http,$routeParams){

		var url = "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2015/" + $routeParams.mes;
		$http.get(url).success(function(data){
			$scope.calendars = data;
		});
}]);

calendarCtrl.controller("detalleCalendarCtrl",["$scope", "$http","$routeParams",function($scope,$http,$routeParams){
		var urlDetalles = "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2015/" + $routeParams.mes + "/"+ $routeParams.dia;
		$http.get(urlDetalles).success(function(datos){
			$scope.detalleTournament = datos;
		});

}]);
