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
			finished: true
		}];

	});