'use strict';
// Angular Init
var app = angular.module('app', [
	'eduCallejero'
]);

app.controller('appController', ['$scope','$http','eduCallejeroDataFactory', function ($scope,$http,eduCallejeroDataFactory) {
	$scope.options={
			showProvinceSelect:false,
			showBtnCancel:false,
			urlDataSource:''
	};
}])

