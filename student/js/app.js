'use strict';
var studentApp = angular.module('studentApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/addstudent.html',
            controller: 'addstudentcontroller',
            controllerAs: 'asc'
        }).
            when('/about', {
                templateUrl: 'pages/AboutUs.html',
                controller: 'aboutuscontroller',
                controllerAs: 'auc'
            }).
            when('/contact', {
                templateUrl: 'pages/ContactUs.html'

            }).
        when('/addstudent', {
            templateUrl: 'pages/addstudent.html',
            controller: 'addstudentcontroller',
            controllerAs: 'asc'
        }).
             when('/student', {
                 templateUrl: 'pages/studentview.html',
                 controller: 'studentcontroller',
                 controllerAs: 'st'
             })
         .otherwise({ redirectTo: '/' });

    }]);