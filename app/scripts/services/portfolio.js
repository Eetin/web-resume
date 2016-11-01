'use strict';

/**
 * @ngdoc service
 * @name resumeApp.portfolio
 * @description
 * # portfolio
 * Service in the resumeApp.
 */
angular.module('resumeApp')
    .service('portfolio', function() {

        var portfolio = [{
            type: 'frontEnd',
            recent: false,
            name: 'Pomodoro Timer',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
            imageUrl: 'images/pomodoro-timer.png',
            sourceUrl: 'http://codepen.io/Eetin/pen/vGZXoK',
            url: 'http://codepen.io/Eetin/full/vGZXoK/'
        }, {
            type: 'frontEnd',
            recent: false,
            name: 'Wikipedia Search',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Wikipedia API'],
            imageUrl: 'images/wikipedia-search.png',
            sourceUrl: 'http://codepen.io/Eetin/pen/xVRJWN',
            url: 'http://codepen.io/Eetin/full/xVRJWN/'
        }, {
            type: 'frontEnd',
            recent: false,
            name: 'Tic Tac Toe',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
            imageUrl: 'images/tic-tac-toe.png',
            sourceUrl: 'http://codepen.io/Eetin/pen/qZjjrV',
            url: 'http://codepen.io/Eetin/full/qZjjrV/'
        }, {
            type: 'frontEnd',
            recent: false,
            name: 'Simon Game',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
            imageUrl: 'images/simon-game.png',
            sourceUrl: 'http://codepen.io/Eetin/pen/PNJpwL',
            url: 'http://codepen.io/Eetin/full/PNJpwL/'
        }, {
            type: 'frontEnd',
            recent: false,
            name: 'Leaderboard',
            technologies: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'Axios', 'React', 'Redux'],
            imageUrl: 'images/leaderboard.png',
            sourceUrl: 'http://codepen.io/Eetin/pen/XdENBa/',
            url: 'http://codepen.io/Eetin/full/XdENBa/'
        }, {
            type: 'frontEnd',
            recent: true,
            name: 'Game of Life',
            technologies: ['HTML', 'SCSS', 'JavaScript', 'React', 'Pixi'],
            imageUrl: 'images/game-of-life.png',
            sourceUrl: 'http://codepen.io/Eetin/pen/aNaQeL',
            url: 'http://codepen.io/Eetin/full/aNaQeL/'
        }, {
            type: 'froneEnd',
            recent: true,
            name: 'Roguelike',
            technologies: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap', 'React', 'Redux'],
            imageUrl: 'images/roguelike.png',
            sourceUrl: 'https://codepen.io/Eetin/pen/vKGJox',
            url: 'https://codepen.io/Eetin/full/vKGJox/'
        }, {
            type: 'dataViz',
            recent: false,
            name: 'GDP Chart',
            technologies: ['HTML', 'SCSS', 'D3.js'],
            imageUrl: 'images/gdp-chart.png',
            sourceUrl: 'https://github.com/Eetin/gdp-chart',
            url: 'https://eetin.github.io/gdp-chart/'
        }, {
            type: 'dataViz',
            recent: false,
            name: 'Cyclist Scatterplot',
            technologies: ['HTML', 'SCSS', 'Bootstrap', 'D3.js'],
            imageUrl: 'images/cyclist-scatterplot.png',
            sourceUrl: 'https://github.com/Eetin/cyclist-scatterplot',
            url: 'https://eetin.github.io/cyclist-scatterplot/'
        }, {
            type: 'dataViz',
            recent: false,
            name: 'Heat Map',
            technologies: ['HTML', 'SCSS', 'Bootstrap', 'D3.js'],
            imageUrl: 'images/heat-map.png',
            sourceUrl: 'https://github.com/Eetin/heatmap',
            url: 'https://eetin.github.io/heatmap/'
        }, {
            type: 'dataViz',
            recent: false,
            name: 'National Contiguity',
            technologies: ['HTML', 'SCSS', 'D3.js'],
            imageUrl: 'images/national-contiguity.png',
            sourceUrl: 'https://github.com/Eetin/national-contiguity-graph',
            url: 'https://eetin.github.io/national-contiguity-graph/'
        }, {
            type: 'backEnd',
            recent: false,
            name: 'Timestamp Microservice',
            technologies: ['Node.js', 'Express.js', 'HTML'],
            imageUrl: 'images/timestamp-microservice.png',
            sourceUrl: 'https://github.com/Eetin/timestamp/tree/master',
            url: 'https://basejump-timestamp.herokuapp.com/'
        }, {
            type: 'backEnd',
            recent: false,
            name: 'Request Header Parser',
            technologies: ['Node.js', 'Express.js'],
            imageUrl: 'images/request-header-parser.png',
            sourceUrl: 'https://github.com/Eetin/request-header-parser',
            url: 'https://basejump-request-header-parser.herokuapp.com/'
        }, {
            type: 'backEnd',
            recent: false,
            name: 'URL Shortener',
            technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'HTML'],
            imageUrl: 'images/url-shortener.png',
            sourceUrl: 'https://github.com/Eetin/url-shortener',
            url: 'https://basejump-urlshortener.herokuapp.com/'
        }, {
            type: 'backEnd',
            recent: false,
            name: 'Image Search',
            technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'HTML'],
            imageUrl: 'images/image-search.png',
            sourceUrl: 'https://github.com/Eetin/image-search',
            url: 'https://basejump-imagesearch.herokuapp.com/'
        }, {
            type: 'backEnd',
            recent: false,
            name: 'File Metadata',
            technologies: ['Node.js', 'Express.js', 'Multer', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
            imageUrl: 'images/file-metadata.png',
            sourceUrl: 'https://github.com/Eetin/file-metadata',
            url: 'https://basejump-filemetadata.herokuapp.com/'
        }, {
            type: 'fullStack',
            recent: true,
            name: 'Voting App',
            technologies: ['HTML', 'SCSS', 'Bootstrap', 'Font Awesome', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'passport', 'jwt'],
            imageUrl: 'images/voting-app.png',
            sourceUrl: 'https://github.com/Eetin/voting-app',
            url: 'https://dynamic-voting-app.herokuapp.com/'
        }];

        var certificates = [{
            name: 'Front-End JavaScript Frameworks: AngularJS',
            completionDate: 'October 28, 2016',
            url: 'https://www.coursera.org/account/accomplishments/certificate/G7RN572QAJFW',
            institution: 'The Hong Kong University of Science and Technology',
            provider: 'Coursera'
        }, {
            name: 'Front-End Web UI Frameworks and Tools',
            completionDate: 'October 14, 2016',
            url: 'https://www.coursera.org/account/accomplishments/certificate/LHCTLXHVZRSE',
            institution: 'The Hong Kong University of Science and Technology',
            provider: 'Coursera'
        }, {
            name: 'HTML, CSS and JavaScript',
            completionDate: 'October 4, 2016',
            url: 'https://www.coursera.org/account/accomplishments/certificate/LVPYUE4GNVKA',
            institution: 'The Hong Kong University of Science and Technology',
            provider: 'Coursera'
        }];

        this.getPortfolio = function() {
            return portfolio;
        };

        this.getCertificates = function() {
            return certificates;
        };

    });