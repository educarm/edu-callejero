'use strict';

angular.module('eduCallejeroDirectives')
.directive('eduCallejero', function() {
	return {
		restrict: 'AE',		
		templateUrl: 'directives/edu-callejero.tpl.html',
		replace: true,
		 transclude: true,
		scope: {
		    options:'=options',
			direccion: '=result'
		},
		controller: function($scope, $element,$timeout,eduCallejeroDataFactory) {
			if (!$scope.hasOwnProperty('options')) {
                throw new Error('options are required!');
            }

			$scope.deslocal=function(){
				if ($scope.hasOwnProperty('valormuni')){						
					return false;
				}
				return true;		
			};
			
			$scope.showProvinceSelect=false;
			$scope.showBtnCancel=false;
			$scope.mostrarseleccion=false;
			$scope.mostrartabla=false;
			$scope.municipios=[];
			$scope.direccion={};
			
			var uri='/normaliza/services/datosservice/municipios/:cpro';
			var urilocalidad='/normaliza/services/datosservice/upoblacional/:cpro/:cmun';
			var urivias='/normaliza/services/datosservice/vias';
			var uriprovincia='/normaliza/services/datosservice/provincias';

			if ($scope.options.hasOwnProperty('showBtnCancel')){
				$scope.showBtnCancel=$scope.options.showBtnCancel;
			}
			
			if ($scope.options.hasOwnProperty('urlDataSource')){
				uri=$scope.options.urlDataSource+uri;
				urilocalidad=$scope.options.urlDataSource+urilocalidad;
				urivias=$scope.options.urlDataSource+urivias;
				uriprovincia=$scope.options.urlDataSource+uriprovincia;
			}
			if ($scope.options.hasOwnProperty('showProvinceSelect')){
				if ($scope.options.showProvinceSelect){
					$scope.showProvinceSelect=true;
					$scope.apiprovincia=eduCallejeroDataFactory(uriprovincia,'');
					$scope.apiprovincia.getAll(function (data){
						$scope.provincias=data;
					});
				} else {
					$scope.valorprov={'cpro':'30', 'dpro':'Murcia'};
					$scope.api=eduCallejeroDataFactory(uri,'');
					$scope.api.getAll($scope.valorprov,function (data){						
						$scope.municipios=data;
					});	
				}
			} else {
				$scope.valorprov={'cpro':'30', 'dpro':'Murcia'};
				$scope.api=eduCallejeroDataFactory(uri,'');
				$scope.api.getAll($scope.valorprov,function (data){						
					$scope.municipios=data;
				});	
			};

			$scope.formData={};			
			
			$scope.localidades=[];			
			$scope.apilocalidad=eduCallejeroDataFactory(urilocalidad,'');
			$scope.valor={};
			$scope.codigo = function(){	
				if ($scope.hasOwnProperty('valormuni')){
					$scope.valor.cpro=$scope.valormuni.cpro;
					$scope.valor.cmun=$scope.valormuni.cmun;
					$scope.apilocalidad.getAll($scope.valor, function (data){
						$scope.localidades=data;
					});
				};
				}
			$scope.cargamunicipios = function(){				
				$scope.api=eduCallejeroDataFactory(uri,'');
				$scope.api.getAll($scope.valorprov,function (data){						
					$scope.municipios=data;
				});	
				
			}
			$scope.onClickSearch=function(){
				$scope.options.showOverlayLoadingGrid=true;
					$scope.mostrarseleccion=false;
					if (!$scope.hasOwnProperty('valormuni') || !$scope.hasOwnProperty('indicio')){
						alert ('El municipio y la vía son obligatorios');   
						$scope.options.showOverlayLoadingGrid=false;
					}
					else {
						if($scope.hasOwnProperty ('valorlocal')){
		          		    $scope.formData.cun=$scope.valorlocal.cun;
		        		}				
						if($scope.hasOwnProperty ('cpostal') ){									
							$scope.formData.cpos=$scope.cpostal;
							
		        		}
		       		 	$scope.formData.cmun=$scope.valormuni.cmun;
		       		 	$scope.formData.indicio=$scope.indicio;
		       		 	$scope.formData.cpro=$scope.valorprov.cpro;	
		       		 	
		       		   	$scope.apivias=eduCallejeroDataFactory(urivias,'');
		       		   	$scope.apivias.getAll($scope.formData, function (data){
							$scope.vias=data;
							if ($scope.hasOwnProperty('vias')){
								if ($scope.vias!=""){
		      		   				$scope.mostrartabla=true;
								}
							}
							$scope.options.showOverlayLoadingGrid=false;
		       		   	});
		       		   	
					};
			};
			
			$scope.onRowClick=function(via){     
		    	$scope.direccion=this.via;    	
			   	$scope.mostrarseleccion=true;
			   	$scope.mostrartabla=false;
			 };
			 $scope.onClickReset=function(){
					if($scope.hasOwnProperty ('valormuni') || $scope.hasOwnProperty('valorlocal'))
						$scope.valormuni="";
						$scope.valorlocal="";
						$scope.valorprov="";
						$scope.mostrartabla=false;
			 };
			 
			 $scope.onClickCancel=function(){			 
			 
				 if ($scope.options.hasOwnProperty('oncancel') && typeof $scope.options.oncancel == 'function'){
					 $scope.options.oncancel();
					}
				 
			 }
		}
	}
});