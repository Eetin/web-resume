'use strict';

/**
 * @ngdoc overview
 * @name resumeApp
 * @description
 * # resumeApp
 *
 * Main module of the application.
 */
angular
    .module('resumeApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl as main'
            })
            .state('projects', {
                url: '/projects/',
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl as projects'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            });

        $urlRouterProvider.otherwise('/');

    }]);