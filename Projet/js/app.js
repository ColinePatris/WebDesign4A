var app = angular.module( 'BPD', ['ngRoute'] );

angular.module( 'BPD' )
    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider
            .when( "/Stat", {
                templateUrl: "Partials/Stat.html"
            } )
            .when( "/List", {
                templateUrl: "Partials/List.html",
            } )
			.when( "/Home", {
                templateUrl: "Partials/Home.html",
            } )
            .otherwise( {
                   	redirectTo: "Home"
            } )
    } ] );