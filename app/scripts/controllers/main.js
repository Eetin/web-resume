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
        this.workshops = attending.getWorkshops();

    }]);