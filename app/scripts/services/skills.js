'use strict';

/**
 * @ngdoc service
 * @name resumeApp.skills
 * @description
 * # skills
 * Service in the resumeApp.
 */
angular.module('resumeApp')
    .service('skills', function() {

        var skills = {
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
            ],
            additional: [
                'Git',
                'Gulp',
                'Webpack',
                'Yeoman'
            ]
        };

        this.getSkills = function() {
            return skills;
        };
        
    });