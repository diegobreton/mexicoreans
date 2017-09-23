;(function(){
  angular.module('frontPageApp')
  .component('homePage',{
    bindings: {

    },
    controller: 'homePageCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/homepage.html'
  })
  .controller('homePageCtrl', homePageCtrl);

  homePageCtrl.$inject = [];

  function homePageCtrl(){
    var vm = this;

    init();

    function init(){
    };
  };
})();
