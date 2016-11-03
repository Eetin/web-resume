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

        var fullStack = portfolio.getPortfolio().filter(function(project) {
            return project.type === 'fullStack';
        });

        var frontEnd = portfolio.getPortfolio().filter(function(project) {
            return project.type === 'frontEnd';
        });

        var dataViz = portfolio.getPortfolio().filter(function(project) {
            return project.type === 'dataViz';
        });

        var backEnd = portfolio.getPortfolio().filter(function(project) {
            return project.type === 'backEnd';
        });

        var i;
        var fullStackRows = [];
        for (i = 0; i < fullStack.length; i += 3) {
            fullStackRows.push(fullStack.slice(i, i + 3));
        }

        var frontEndRows = [];
        for (i = 0; i < frontEnd.length; i += 3) {
            frontEndRows.push(frontEnd.slice(i, i + 3));
        }

        var dataVizRows = [];
        for (i = 0; i < dataViz.length; i += 3) {
            dataVizRows.push(dataViz.slice(i, i + 3));
        }

        var backEndRows = [];
        for (i = 0; i < backEnd.length; i += 3) {
            backEndRows.push(backEnd.slice(i, i + 3));
        }

        this.categories = [{
            label: 'Full Stack Projects',
            projects: fullStackRows
        }, {
            label: 'Front End Projects',
            projects: frontEndRows
        }, {
            label: 'Data Visualization Projects',
            projects: dataVizRows
        }, {
            label: 'Back End Projects',
            projects: backEndRows
        }];

    }]);