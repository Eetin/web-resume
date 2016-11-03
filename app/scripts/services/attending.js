'use strict';

/**
 * @ngdoc service
 * @name resumeApp.attending
 * @description
 * # attending
 * Service in the resumeApp.
 */
angular.module('resumeApp')
	.service('attending', function() {

		var workshops = [{
			name: 'Learn to Build Awesome Apps with Angular 2',
			date: 'November 7th & 8th, 2016',
			url: 'https://frontendmasters.com/workshops/angular-2-stable/'
		}, {
			name: 'Reactive Angular 2',
			date: 'November 9th, 2016',
			url: 'https://frontendmasters.com/workshops/reactive-angular-2-stable/'
		}, {
			name: 'Secure Authentication for Web Applications & APIs',
			date: 'November 10th, 2016',
			url: 'https://frontendmasters.com/workshops/secure-auth/'
		}, {
			name: 'Full Stack for Front-End Engineers',
			date: 'November 11th, 2016',
			url: 'https://frontendmasters.com/workshops/full-stack/'
		}, {
			name: 'Electron',
			date: 'November 15th, 2016',
			url: 'https://frontendmasters.com/workshops/electron/'
		}, {
			name: 'Complete Introduction to React (feat. Redux & React Router v4)',
			date: 'December 1st & 2nd, 2016',
			url: 'https://frontendmasters.com/workshops/intro-react-2/'
		}];

		this.getWorkshops = function() {
			return workshops;
		};

	});