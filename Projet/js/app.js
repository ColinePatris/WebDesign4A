var app = angular.module( 'BPD', ['ngRoute'] );

angular.module( 'BPD' )
    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider
            .when( "/Stat", {
                templateUrl: "Partials/Stat.html"
            } )
            .when( "/List", {
                templateUrl: "Partials/List.html",
                controller: 'BaltiController'
            } )
            .otherwise( {
                   	redirectTo: "Stat"
            } )
    } ] );

app.controller( 'BaltiController', [ '$http', function ( $http ) {
    console.log( "BaltiController", $http );
    var ctrl = this;
    this.selected = 0;
    this.arrests = [];

    $http.get( 'https://data.baltimorecity.gov/resource/3i3v-ibrt.json' )
        .success( function ( result ) {
            console.log( 'callback', this );
            console.log( result );
            ctrl.arrests = result;
        } );
} ] );
