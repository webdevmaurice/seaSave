(function(){
    angular.module('seasafe')
        .config(['$routeProvider', function ($routeProvider) {
            var baseUrl = 'client/app/main_component/';
            $routeProvider
                .when('/acceuil',{
                    templateUrl: baseUrl + 'accueil/accueil.html',
                    controller: 'AccueilController',
                    controllerAs: 'avm'
                })
                .when('/geolocalisation',{
                    templateUrl: baseUrl + 'geolocalisation/geolocalisation.html',
                    controller: 'GeolocalisationController',
                    controllerAs: 'gvm'
                })
                /*.when('/voyage', {
                 //templateUrl: baseUrl + 'voyage/voyage.html',
                 templateUrl: baseUrl + 'voyage/voyages.html',
                 controller: 'VoyageCtrl1',
                 controllerAs: 'vm'
                 })
                 .when('/events', {
                 //templateUrl: baseUrl + 'voyage/voyage.html',
                 templateUrl: baseUrl + 'event/event.html',
                 controller: 'EventCtrl',
                 controllerAs: 'vm'
                 })
                 .when('/map', {
                 templateUrl: baseUrl + 'map/map.html',
                 controller: 'MapCtrl',
                 controllerAs: 'vm'
                 })
                 .when('/about', {
                 templateUrl: baseUrl + 'about/about.html',
                 controller: 'aboutCtrl',
                 controllerAs: 'vm'
                 }*/
                .otherwise({redirectTo: '/acceuil'});
        }]);
})();