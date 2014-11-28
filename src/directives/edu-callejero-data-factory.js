angular.module('edu-callejero.service', ['ngResource'])
.factory('eduCallejeroDataFactory', [ '$resource', function ( $resource) {
    return function (url,resource) {
    	return $resource(url+'/'+ resource +'/:id', {}, {
    		getAll: {method:'GET', params:{}, headers:{'Access-Control-Allow-Credentials': true}, isArray:true},
    		get: {method:'GET', params:{}, headers:{'Access-Control-Allow-Credentials': true}, isArray:false},
    		insert: {method:'POST', params:{}, headers:{'Access-Control-Allow-Credentials': true}, isArray:false},
    		update: {method:'PUT', params:{}, headers:{'Access-Control-Allow-Credentials': true}, isArray:false},
    		remove: {method:'DELETE', params:{}, headers:{'Access-Control-Allow-Credentials': true}, isArray:false}
    	});        
    };
}]);
