;(function(){
  angular.module('frontPageApp')
  .component('siteHeader',{
    bindings: {

    },
    controller: 'siteHeaderCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/header.html'
  })
  .controller('siteHeaderCtrl', siteHeaderCtrl);

  siteHeaderCtrl.$inject = [];

  function siteHeaderCtrl(){
    var vm = this;
    vm.LessonTypes = getAllLessonTypes();

    init();

    function init(){
    };

    function getAllLessonTypes(){
      return [{
        title: '일반 강의',
        target: 'lessons.regular'
      },
      {
        title: '1분 레슨',
        target: 'lessons.regular'
      },
      {
        title: 'Q & A',
        target: 'lessons.regular'
      },
      {
        title: '대화',
        target: 'lessons.regular'
      }];
    }
  };
})();
