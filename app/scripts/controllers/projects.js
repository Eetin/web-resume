'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
    .controller('ProjectsCtrl', ['portfolio', function(portfolio) {

        var fullStack = portfolio.getPortfolio().filter(function (project) {
            return project.type === 'fullStack';
        });

        var frontEnd = portfolio.getPortfolio().filter(function (project) {
            return project.type === 'frontEnd';
        });

        var backEnd = portfolio.getPortfolio().filter(function (project) {
            return project.type === 'backEnd';
        });

        this.fullStackRows = [];
        for (var i = 0; i < fullStack.length; i += 3) {
            this.fullStackRows.push(fullStack.slice(i, i + 3));
        }
        console.log(this.fullStackRows);

        this.frontEndRows = [];
        for (var i = 0; i < frontEnd.length; i += 3) {
            this.frontEndRows.push(frontEnd.slice(i, i + 3));
        }

        this.backEndRows = [];
        for (var i = 0; i < backEnd.length; i += 3) {
            this.backEndRows.push(backEnd.slice(i, i + 3));
        }

    }]);