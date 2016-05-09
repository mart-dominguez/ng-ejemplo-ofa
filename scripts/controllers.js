 angular.module('appEjemplo', ['ui.bootstrap'])
.controller("homeController",['$scope','$location',
			function($scope,agendaService,$location){
				$scope.agenda=agendaService.getAgenda();
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					agendaService.definirPropietario($scope.nombrePropietario);
					$location.path('/tarea');
				}
	}]).controller("categoriasController",['$scope','$location',
			function($scope,agendaService,$location){
				$scope.agenda=agendaService.getAgenda();
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					agendaService.definirPropietario($scope.nombrePropietario);
					$location.path('/tarea');
				}
	}]).controller("productosControlller",['$scope','$location',
			function($scope,agendaService,$location){
				$scope.agenda=agendaService.getAgenda();
				$scope.titulo ="Gestion de tareas";				
				$scope.crearPropietario=function(){
					agendaService.definirPropietario($scope.nombrePropietario);
					$location.path('/tarea');
				}
	}])