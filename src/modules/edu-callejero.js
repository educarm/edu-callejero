// Main eduCallejero Module

//Declare app level module which depends on filters, and services
var eduCallejeroDirectives = angular.module('eduCallejeroDirectives', []);
var eduCallejeroTpl=angular.module('edu-callejero.tpl',[]);
// initialization of services into the main module
angular.module('eduCallejero', ['eduCallejeroDirectives','edu-callejero.service','edu-callejero.tpl','ngResource','ui.bootstrap']);