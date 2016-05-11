angular.module('teleportation',['weblibs'])
    .config(function(){

    })
    .run(function($rootScope){
        $rootScope.$on('$routeChangeStart', function(){
            $rootScope.isRouteLoading = true;
            console.log("start");
        });

        $rootScope.$on('$routeChangeSuccess', function(){
            $rootScope.isRouteLoading = false;
            console.log("end");
        });
    })
    .controller('RootController', function($mdSidenav){
        var RC = this;
        RC.toggleSidenav = function(){
            $mdSidenav('left').toggle();
        }
    });