var app = angular.module( 'BPD', [ 'ngRoute', 'chart.js' ] );

angular.module( 'BPD' )
    .config( [ '$routeProvider', function ( $routeProvider ) {
        $routeProvider
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


app.controller( 'BaltiController', [ '$scope', '$http', function ( $scope, $http ) {
    var ctrl = this;
    this.countSexF = 0;
    this.countSexM = 0;
    this.sexArray = [ 0, 0 ];
    this.ageArray = [ 0, 0, 0, 0, 0 ];
    this.raceArray = [
        [ 0 ],
        [ 0 ],
        [ 0 ],
        [ 0 ],
        [ 0 ]
    ];
    this.countRaceA = 0;
    this.countRaceB = 0;
    this.countRaceI = 0;
    this.countRaceU = 0;
    this.countRaceW = 0;
    this.countAge1525 = 0;
    this.countAge2635 = 0;
    this.countAge3650 = 0;
    this.countAge5165 = 0;
    this.countAge6500 = 0;
    this.gender = '';
    this.ageMin = 0;
    this.ageMax = 0;
    this.Race = '';
    this.District = '';
    this.arrests = [];
    this.bufferArrests = [];
    this.sex = function ( input ) {
        ctrl.gender = input;
    }
    this.age = function ( input1, input2 ) {
        ctrl.ageMin = input1;
        ctrl.ageMax = input2
    }
    this.race = function ( input ) {
        ctrl.Race = input;
    }
    this.district = function ( input ) {
        ctrl.District = input;
    }
    $http.get( 'https://data.baltimorecity.gov/resource/3i3v-ibrt.json' )
        .success( function ( result ) {
            ctrl.bufferArrests = result;
            ctrl.arrests = result;
            angular.forEach( ctrl.bufferArrests, function ( value, key ) {
                if ( value.sex == "F" ) ctrl.countSexF++;
                if ( value.sex == "M" ) ctrl.countSexM++;
                if ( value.race == "A" ) ctrl.countRaceA++;
                if ( value.race == "B" ) ctrl.countRaceB++;
                if ( value.race == "I" ) ctrl.countRaceI++;
                if ( value.race == "U" ) ctrl.countRaceU++;
                if ( value.race == "W" ) ctrl.countRaceW++;
                if ( value.age <= 25 && value.age >= 15 ) ctrl.countAge1525++;
                if ( value.age <= 35 && value.age >= 26 ) ctrl.countAge2635++;
                if ( value.age <= 50 && value.age >= 36 ) ctrl.countAge3650++;
                if ( value.age <= 65 && value.age >= 51 ) ctrl.countAge5165++;
                if ( value.age >= 65 ) ctrl.countAge6500++;
            } );
            ctrl.sexArray = [ ctrl.countSexF, ctrl.countSexM ];
            ctrl.ageArray = [ ctrl.countAge1525, ctrl.countAge2635, ctrl.countAge3650, ctrl.countAge5165, ctrl.countAge6500 ];
            ctrl.raceArray = [
                [ ctrl.countRaceA ],
                [ ctrl.countRaceB ],
                [ ctrl.countRaceI ],
                [ ctrl.countRaceU ],
                [ ctrl.countRaceW ]
            ];
            console.log( ctrl.raceArray );
            $scope.sLabels = [ "Female", "Male" ];
            $scope.sData = ctrl.sexArray;
            $scope.aLabels = [ "15-25 yo", "26-35 yo", "36-50 yo", "51-65 yo", "Above 65 yo" ];
            $scope.aData = ctrl.ageArray;
            $scope.rLabels = [ '' ];
            $scope.rSeries = [ 'Asians', 'Blacks', 'Indians', 'Unknown', 'Whites' ];
            $scope.rData = ctrl.raceArray;
        } );
    this.load = function () {
        ctrl.arrests = [];
        if ( ctrl.gender == "" && ctrl.ageMin == 0 && ctrl.ageMax == 0 && ctrl.Race == "" && ctrl.District == "" ) ctrl.arrests = ctrl.bufferArrests;
        angular.forEach( ctrl.bufferArrests, function ( value, key ) {
            if ( ( value.sex == ctrl.gender || ctrl.gender == "" ) && ( ( value.age <= ctrl.ageMax && value.age >= ctrl.ageMin ) || ( ctrl.ageMin == 0 && ctrl.ageMax == 0 ) ) && ( value.race == ctrl.Race || ctrl.Race == "" ) && ( value.district == ctrl.District || ctrl.District == "" ) ) ctrl.arrests.push( value );
        } );
    }
} ] );
