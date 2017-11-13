;(function(){
  angular.module('frontPageApp')
  .component('regularLesson',{
    bindings: {
      lessonId: '@',
      lessonCode : '@'
    },
    controller: 'regularLessonCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/regularLesson.html'
  })
  .controller('regularLessonCtrl', regularLessonCtrl);

  regularLessonCtrl.$inject = ['$location'];

  function regularLessonCtrl($location){
    var vm = this;
    vm.$onInit = init;

    function init(){
      console.log(vm.lessonCode);
      console.log(vm.lessonId);
    };
    function getLessonFromId(id){
    };
    function goToLesson(id){
      $location.hash("level-" + id);
      $anchorScroll();
    };
  };
})();
