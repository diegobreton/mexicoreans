;(function(){
  'use strict';

  angular.module('frontPageApp')
    .service('regularContentService', regularContentServiceCtrl);

  regularContentServiceCtrl.$inject = ['$http'];

  function regularContentServiceCtrl($http){
    var simpleLog = function(){
      console.log('simple');
    }

    return {
      simpleLog: this.simpleLog
    }
  }

})();
