;(function(){
  'use strict';

  angular.module('frontPageApp')
    .factory('regularContentService', regularContentServiceCtrl);

  regularContentServiceCtrl.$inject = ['$http'];

  function regularContentServiceCtrl($http){
    var vm = this;
    vm.foundLevels;
    vm.foundLessons;
    vm.foundLesson;

    var getRegularLevels = function(){
      vm.foundLevels = $http.get('http://localhost:2424/api/level/');
      return vm.foundLevels;
    }

    var getRegularLessons = function(){
      vm.foundLessons = $http.get('http://localhost:2424/api/lesson/');
      return vm.foundLessons;
    }

    var getRegularLesson = function(id){
      vm.foundLesson = $http.get('http://localhost:2424/api/lesson/' + id);
      return vm.foundLesson;
    }

    return {
      getRegularLevels: getRegularLevels,
      getRegularLessons: getRegularLessons,
      getRegularLesson: getRegularLesson
    }
  }

})();
