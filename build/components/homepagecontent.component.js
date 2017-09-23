;(function(){
  angular.module('frontPageApp')
  .component('homePageContent',{
    bindings: {

    },
    controller: 'homePageContentCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/homepagecontent.html'
  })
  .controller('homePageContentCtrl', homePageContentCtrl);

  homePageContentCtrl.$inject = [];

  function homePageContentCtrl(){
    var vm = this;
    init();

    function init(){
    };
  };
})();
