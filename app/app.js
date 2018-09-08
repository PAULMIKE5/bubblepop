import 'normalize.css';
import './styles/app.scss';
import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import router from './routing';
import AppController from './controllers/controller.js';


export default angular.module('app', [ngRoute, ngAnimate])
	.controller('AppController', AppController)
	.config(router)
	.run(function ($location, $rootScope) {
		'ngInject';
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			if (current.hasOwnProperty('$$route')) {
				$rootScope.title = current.$$route.title;
			}
		});
	});