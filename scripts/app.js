 angular.module('appEjemplo', ['ui.bootstrap']);
 [ 'ngRoute' ]).config(
	function($routeProvider) {
	$routeProvider
		.when('/home', {
			controller : 'homeController',
			templateUrl : 'templates/home.html'
		})
		.when('/categorias', {
			controller : 'categoriasController',
			templateUrl : 'templates/categorias.html'
		})
		.when('/productos', {
			controller : 'productosControlller',
			templateUrl : 'templates/productos.html'
		}).
		otherwise({
			  redirectTo: 'home'
		});
});