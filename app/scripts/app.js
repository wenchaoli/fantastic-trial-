'use strict';

/**
 * @ngdoc overview
 * @name uitestApp
 * @description
 * # uitestApp
 *
 * Main module of the application.
 */
angular
  .module('uitestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/trial',{
        templateUrl:'views/trial.html',
        controller:'TrialCtrl',
        controllerAs:'trial'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
