    //create a module
    var myApp = angular.module('myApp', ['ngRoute']);

        //configure routes
        myApp.config(function($routeProvider) {
        $routeProvider

            //route the pages
            //route for homepage
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
                .when ('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            //route for aboutpage
                .when ('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            //route for servicespage
                .when ('/services', {
                templateUrl : 'pages/services.html',
                controller  : 'servicesController'
            })

            //route for contactpage
                .when ('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
        });

    //create controller and inject angular
    myApp.controller('mainController', function() {
    });

    myApp.controller('aboutController', function() {
    });

    myApp.controller('servicesController', function() {
    });

    myApp.controller('contactController', function() {
    });