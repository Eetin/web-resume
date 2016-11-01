'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
    .controller('MainCtrl', ['portfolio', function(portfolio) {
        this.skills = {
            primary: [
                'HTML',
                'CSS',
                'JavaScript',
                'Bootstrap',
                'AngularJS',
                'React',
                'Node.js',
                'Express.js',
                'MongoDB (Mongoose)'
            ],
            secondary: [
                'Java',
                'Python',
                'C#',
                'Unity3D'
            ]
        };

        this.portfolio = portfolio.getPortfolio();
        this.certificates = portfolio.getCertificates();

    }]);