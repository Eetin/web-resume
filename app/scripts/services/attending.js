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

		this.workshops = [{
			name: 'Learn to Build Awesome Apps with Angular 2',
			date: 'November 7th & 8th, 2016',
			url: 'https://frontendmasters.com/workshops/angular-2-stable/',
			finished: true
		}, {
			name: 'Reactive Angular 2',
			date: 'November 9th, 2016',
			url: 'https://frontendmasters.com/workshops/reactive-angular-2-stable/',
			finished: false
		}, {
			name: 'Secure Authentication for Web Applications & APIs',
			date: 'November 10th, 2016',
			url: 'https://frontendmasters.com/workshops/secure-auth/',
			finished: false
		}, {
			name: 'Full Stack for Front-End Engineers',
			date: 'November 11th, 2016',
			url: 'https://frontendmasters.com/workshops/full-stack/',
			finished: false
		}, {
			name: 'Electron',
			date: 'November 15th, 2016',
			url: 'https://frontendmasters.com/workshops/electron/',
			finished: false
		}, {
			name: 'Complete Introduction to React (feat. Redux & React Router v4)',
			date: 'December 1st & 2nd, 2016',
			url: 'https://frontendmasters.com/workshops/intro-react-2/',
			finished: false
		}];

	});