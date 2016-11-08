'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
    .controller('MainCtrl', ['portfolio', 'skills', 'attending', function(portfolio, skills, attending) {

        this.skills = skills.getSkills();
        this.portfolio = portfolio.getPortfolio();
        this.certificates = portfolio.getCertificates();
        this.workshops = {};
        this.workshops.finished = attending.workshops.filter(function(workshop) { return workshop.finished; });
        this.workshops.future = attending.workshops.filter(function(workshop) { return !workshop.finished; });

    }]);