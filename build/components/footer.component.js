;(function(){
  angular.module('frontPageApp')
  .component('siteFooter',{
    bindings: {

    },
    controller: 'siteFooterCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/footer.html'
  })
  .controller('siteFooterCtrl', siteFooterCtrl);

  siteFooterCtrl.$inject = [];

  function siteFooterCtrl(){
    var vm = this;
  }
})();
