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
			.when( "/Home", {
                templateUrl: "Partials/Home.html",
            } )
            .otherwise( {
                   	redirectTo: "Home"
            } )
    } ] );

app.controller( 'BaltiController', [ '$http','$scope', function ( $scope, $http ) {
    console.log( "BaltiController", $http );
    var ctrl = this;
    this.selected = 0;
    this.arrests = [];

    $http.get( 'https://data.baltimorecity.gov/resource/3i3v-ibrt.json' )
        .success( function ( result ) {
            console.log( 'callback', this );
            console.log( result );
            $scope.arrests = result;
        } );
} ] );

app.controller('pageBController',[
'$scope','$routeParams',
function($scope,$routeParams){
	$scope.test1="du texte";
	$scope.message=$routeParams.msg;
	$routeParams.msg;
	var products={
		"product_1":{
			"name":"phone",
			"price":25.95
		},
		"product_2":{
			"name":"gun",
			"price":545.95
		},
		"product_3":{
			"name":"Floppy",
			"price":15.95
		}
	};
	$scope.product=products[$routeParams.msg];
}
]);