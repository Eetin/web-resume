"use strict";angular.module("resumeApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl as main"}).state("projects",{url:"/projects/",templateUrl:"views/projects.html",controller:"ProjectsCtrl as projects"}).state("contact",{url:"/contact",templateUrl:"views/contact.html"}),b.otherwise("/")}]),angular.module("resumeApp").service("portfolio",function(){var a=[{type:"frontEnd",recent:!1,name:"Pomodoro Timer",technologies:["HTML","CSS","JavaScript","Bootstrap","jQuery"],imageUrl:"images/pomodoro-timer.bbbe1a4d.png",sourceUrl:"http://codepen.io/Eetin/pen/vGZXoK",url:"http://codepen.io/Eetin/full/vGZXoK/"},{type:"frontEnd",recent:!1,name:"Wikipedia Search",technologies:["HTML","CSS","JavaScript","Bootstrap","jQuery","Wikipedia API"],imageUrl:"images/wikipedia-search.d6364db4.png",sourceUrl:"http://codepen.io/Eetin/pen/xVRJWN",url:"http://codepen.io/Eetin/full/xVRJWN/"},{type:"frontEnd",recent:!1,name:"Tic Tac Toe",technologies:["HTML","CSS","JavaScript","Bootstrap","jQuery"],imageUrl:"images/tic-tac-toe.5cf1dc3a.png",sourceUrl:"http://codepen.io/Eetin/pen/qZjjrV",url:"http://codepen.io/Eetin/full/qZjjrV/"},{type:"frontEnd",recent:!1,name:"Simon Game",technologies:["HTML","CSS","JavaScript","Bootstrap","jQuery"],imageUrl:"images/simon-game.4987c3e8.png",sourceUrl:"http://codepen.io/Eetin/pen/PNJpwL",url:"http://codepen.io/Eetin/full/PNJpwL/"},{type:"frontEnd",recent:!1,name:"Leaderboard",technologies:["HTML","SCSS","JavaScript","Bootstrap","Axios","React","Redux"],imageUrl:"images/leaderboard.f24e0cba.png",sourceUrl:"http://codepen.io/Eetin/pen/XdENBa/",url:"http://codepen.io/Eetin/full/XdENBa/"},{type:"frontEnd",recent:!0,name:"Game of Life",technologies:["HTML","SCSS","JavaScript","React","Pixi"],imageUrl:"images/game-of-life.5eb7466e.png",sourceUrl:"http://codepen.io/Eetin/pen/aNaQeL",url:"http://codepen.io/Eetin/full/aNaQeL/"},{type:"froneEnd",recent:!0,name:"Roguelike",technologies:["HTML","SCSS","JavaScript","Bootstrap","React","Redux"],imageUrl:"images/roguelike.8fa8ba74.png",sourceUrl:"https://codepen.io/Eetin/pen/vKGJox",url:"https://codepen.io/Eetin/full/vKGJox/"},{type:"dataViz",recent:!1,name:"GDP Chart",technologies:["HTML","SCSS","D3.js"],imageUrl:"images/gdp-chart.9f9cbcd6.png",sourceUrl:"https://github.com/Eetin/gdp-chart",url:"https://eetin.github.io/gdp-chart/"},{type:"dataViz",recent:!1,name:"Cyclist Scatterplot",technologies:["HTML","SCSS","Bootstrap","D3.js"],imageUrl:"images/cyclist-scatterplot.4c52c9ca.png",sourceUrl:"https://github.com/Eetin/cyclist-scatterplot",url:"https://eetin.github.io/cyclist-scatterplot/"},{type:"dataViz",recent:!1,name:"Heat Map",technologies:["HTML","SCSS","Bootstrap","D3.js"],imageUrl:"images/heat-map.9cd0d7a3.png",sourceUrl:"https://github.com/Eetin/heatmap",url:"https://eetin.github.io/heatmap/"},{type:"dataViz",recent:!1,name:"National Contiguity",technologies:["HTML","SCSS","D3.js"],imageUrl:"images/national-contiguity.ce6e9691.png",sourceUrl:"https://github.com/Eetin/national-contiguity-graph",url:"https://eetin.github.io/national-contiguity-graph/"},{type:"backEnd",recent:!1,name:"Timestamp Microservice",technologies:["Node.js","Express.js","HTML"],imageUrl:"images/timestamp-microservice.6dd06f80.png",sourceUrl:"https://github.com/Eetin/timestamp/tree/master",url:"https://basejump-timestamp.herokuapp.com/"},{type:"backEnd",recent:!1,name:"Request Header Parser",technologies:["Node.js","Express.js"],imageUrl:"images/request-header-parser.62b38598.png",sourceUrl:"https://github.com/Eetin/request-header-parser",url:"https://basejump-request-header-parser.herokuapp.com/"},{type:"backEnd",recent:!1,name:"URL Shortener",technologies:["Node.js","Express.js","MongoDB","Mongoose","HTML"],imageUrl:"images/url-shortener.20b2c928.png",sourceUrl:"https://github.com/Eetin/url-shortener",url:"https://basejump-urlshortener.herokuapp.com/"},{type:"backEnd",recent:!1,name:"Image Search",technologies:["Node.js","Express.js","MongoDB","Mongoose","HTML"],imageUrl:"images/image-search.136e3b21.png",sourceUrl:"https://github.com/Eetin/image-search",url:"https://basejump-imagesearch.herokuapp.com/"},{type:"backEnd",recent:!1,name:"File Metadata",technologies:["Node.js","Express.js","Multer","HTML","CSS","jQuery","Bootstrap"],imageUrl:"images/file-metadata.9084cb39.png",sourceUrl:"https://github.com/Eetin/file-metadata",url:"https://basejump-filemetadata.herokuapp.com/"},{type:"fullStack",recent:!0,name:"Voting App",technologies:["HTML","SCSS","Bootstrap","Font Awesome","React","Node.js","Express.js","MongoDB","Mongoose","passport","jwt"],imageUrl:"images/voting-app.46a29ba5.png",sourceUrl:"https://github.com/Eetin/voting-app",url:"https://dynamic-voting-app.herokuapp.com/"}],b=[{name:"Front-End JavaScript Frameworks: AngularJS",completionDate:"October 28, 2016",url:"https://www.coursera.org/account/accomplishments/certificate/G7RN572QAJFW",institution:"The Hong Kong University of Science and Technology",provider:"Coursera"},{name:"Front-End Web UI Frameworks and Tools",completionDate:"October 14, 2016",url:"https://www.coursera.org/account/accomplishments/certificate/LHCTLXHVZRSE",institution:"The Hong Kong University of Science and Technology",provider:"Coursera"},{name:"HTML, CSS and JavaScript",completionDate:"October 4, 2016",url:"https://www.coursera.org/account/accomplishments/certificate/LVPYUE4GNVKA",institution:"The Hong Kong University of Science and Technology",provider:"Coursera"}];this.getPortfolio=function(){return a},this.getCertificates=function(){return b}}),angular.module("resumeApp").controller("MainCtrl",["portfolio",function(a){this.skills={primary:["HTML","CSS","JavaScript","Bootstrap","AngularJS","React","Node.js","Express.js","MongoDB (Mongoose)"],secondary:["Java","Python","C#","Unity3D"]},this.portfolio=a.getPortfolio(),this.certificates=a.getCertificates()}]),angular.module("resumeApp").controller("ProjectsCtrl",["portfolio",function(a){var b,c=a.getPortfolio().filter(function(a){return"fullStack"===a.type}),d=a.getPortfolio().filter(function(a){return"frontEnd"===a.type}),e=a.getPortfolio().filter(function(a){return"backEnd"===a.type});for(this.fullStackRows=[],b=0;b<c.length;b+=3)this.fullStackRows.push(c.slice(b,b+3));for(console.log(this.fullStackRows),this.frontEndRows=[],b=0;b<d.length;b+=3)this.frontEndRows.push(d.slice(b,b+3));for(this.backEndRows=[],b=0;b<e.length;b+=3)this.backEndRows.push(e.slice(b,b+3))}]),angular.module("resumeApp").run(["$templateCache",function(a){a.put("views/contact.html",'<div class="content"> <div class="row contact-row"> <ul class="list-group col-sm-6 col-sm-offset-3"> <li class="list-group-item"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="mailto:p17dmitry@gmail.com" target="_blank"><i class="fa fa-envelope"></i> email</a> </li> <li class="list-group-item"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://twitter.com/Eetin" target="_blank"><i class="fa fa-twitter"></i> Twitter</a> </li> <li class="list-group-item"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://www.facebook.com/p17dmitry" target="_blank"><i class="fa fa-facebook-official"></i> Facebook</a> </li> <li class="list-group-item"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://github.com/Eetin" target="_blank"><i class="fa fa-github"></i> Github</a> </li> <li class="list-group-item"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://www.linkedin.com/in/eetin" target="_blank"><i class="fa fa-linkedin"></i> Linkedin</a> </li> <li class="list-group-item"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="http://www.freecodecamp.com/eetin" target="_blank"><i class="fa fa-free-code-camp"></i> freeCodeCamp</a> </li> </ul> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <div class="container"> <h1>Dmitry Lebedev</h1> <p class="lead"> <img class="avatar img-responsive" src="images/ava.e88b03bc.jpg" alt="Dmitry Lebedev"> </p> <p>Full Stack Web Developer</p> </div> </div> <div class="container"> <div class="row marketing"> <h2>About me</h2> <p> My name is Dmitry. I\'m self taught web developer. I have completed web development, computer science, artificial intelligence, software engineering, data science, game development and other courses on <a target="_blank" href="http://www.freecodecamp.com">freeCodeCamp</a>, <a target="_blank" href="http://www.coursera.org">Coursera</a>, <a target="_blank" href="http://www.edx.org">edX</a>, and <a target="_blank" href="http://www.udacity.com">Udacity</a>. </p> <p> Also I have some familiarity with Unity3d game engine. </p> <p> I code in JavaScript and Java. I also have basic knowledge of Python and C#. </p> </div> <div class="row marketing"> <h2>Verified Certificates</h2> <ul class="list-group"> <li class="list-group-item" ng-repeat="cert in main.certificates"> <a ng-href="{{cert.url}}"> {{cert.name}} by {{cert.institution}} on {{cert.provider}}. Certificate earned on {{cert.completionDate}} </a> </li> </ul> <p>Now I\'m working on <a href="https://www.coursera.org/learn/hybrid-mobile-development">Multiplatform Mobile App Development with Web Technologies</a> course.</p> <p>Other courses I successfully finished without verification can be found <a ng-href="https://degreed.com/eetin/index/1#/collection?type=Course">here</a></p> </div> <div class="row marketing"> <div class="col-sm-6"> <h3>Primary Skills</h3> <ul> <li ng-repeat="primary in main.skills.primary"> {{primary}} </li> </ul> </div> <div class="col-sm-6"> <h3>Secondary Skills</h3> <ul> <li ng-repeat="secondary in main.skills.secondary"> {{secondary}} </li> </ul> </div> </div> <div class="row marketing"> <h2>Recent Projects</h2> <div class="col-md-4 project" ng-repeat="recent in main.portfolio | filter:{recent: true}"> <h3 class="text-center project-name">{{recent.name}}</h3> <img class="img-responsive" ng-src="{{recent.imageUrl}}" alt="{{recent.name}}"> <ul class="list-inline technologies-long"> <li class="tech" ng-repeat="tech in recent.technologies">{{tech}}</li> </ul> <div class="text-center"> <div class="btn-group" role="group"> <a class="btn btn-primary" target="_blank" ng-href="{{recent.url}}">View</a> <a class="btn btn-success" target="_blank" ng-href="{{recent.sourceUrl}}">View Source</a> </div> </div> </div> <h3 class="col-xs-12 text-center">See all my <a ui-sref="projects">projects</a></h3> </div> <div class="row marketing"> <h2>Contact me</h2> <div class="row contact-button-row"> </div> <div class="row"> <div class="col-sm-4"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="mailto:p17dmitry@gmail.com" target="_blank"><i class="fa fa-envelope"></i> email</a> </div> <div class="col-sm-4"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://twitter.com/Eetin" target="_blank"><i class="fa fa-twitter"></i> Twitter</a> </div> <div class="col-sm-4"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://www.facebook.com/p17dmitry" target="_blank"><i class="fa fa-facebook-official"></i> Facebook</a> </div> </div> <div class="row contact-button-row"> <div class="col-sm-4"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://github.com/Eetin" target="_blank"><i class="fa fa-github"></i> Github</a> </div> <div class="col-sm-4"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="https://www.linkedin.com/in/eetin" target="_blank"><i class="fa fa-linkedin"></i> Linkedin</a> </div> <div class="col-sm-4"> <a class="btn btn-primary btn-lg btn-block contact-btn" href="http://www.freecodecamp.com/eetin" target="_blank"><i class="fa fa-free-code-camp"></i> freeCodeCamp</a> </div> </div> </div> </div> '),a.put("views/projects.html",'<div class="container"> <h2 class="text-center">Full Stack Projects</h2> <div class="row project-row" ng-repeat="projectRow in projects.fullStackRows"> <div class="col-md-4 project" ng-repeat="project in projectRow"> <h3 class="text-center project-name">{{project.name}}</h3> <img class="img-responsive" ng-src="{{project.imageUrl}}" alt="{{project.name}}"> <div class="text-center"> <ul class="list-inline technologies"> <li class="tech" ng-repeat="tech in project.technologies">{{tech}}</li> </ul> </div> <div class="text-center"> <div class="btn-group" role="group"> <a class="btn btn-primary" target="_blank" ng-href="{{project.url}}">View</a> <a class="btn btn-success" target="_blank" ng-href="{{project.sourceUrl}}">View Source</a> </div> </div> </div> </div> <h2 class="text-center">Front End Projects</h2> <div class="row project-row" ng-repeat="projectRow in projects.frontEndRows"> <div class="col-md-4 project" ng-repeat="project in projectRow"> <h3 class="text-center project-name">{{project.name}}</h3> <img class="img-responsive" ng-src="{{project.imageUrl}}" alt="{{project.name}}"> <div class="text-center"> <ul class="list-inline technologies"> <li class="tech" ng-repeat="tech in project.technologies">{{tech}}</li> </ul> </div> <div class="text-center"> <div class="btn-group" role="group"> <a class="btn btn-primary" target="_blank" ng-href="{{project.url}}">View</a> <a class="btn btn-success" target="_blank" ng-href="{{project.sourceUrl}}">View Source</a> </div> </div> </div> </div> <h2 class="text-center">Back End Projects</h2> <div class="row project-row" ng-repeat="projectRow in projects.backEndRows"> <div class="col-md-4 project" ng-repeat="project in projectRow"> <h3 class="text-center project-name">{{project.name}}</h3> <img class="img-responsive" ng-src="{{project.imageUrl}}" alt="{{project.name}}"> <div class="text-center"> <ul class="list-inline technologies"> <li class="tech" ng-repeat="tech in project.technologies">{{tech}}</li> </ul> </div> <div class="text-center"> <div class="btn-group" role="group"> <a class="btn btn-primary" target="_blank" ng-href="{{project.url}}">View</a> <a class="btn btn-success" target="_blank" ng-href="{{project.sourceUrl}}">View Source</a> </div> </div> </div> </div> </div>')}]);