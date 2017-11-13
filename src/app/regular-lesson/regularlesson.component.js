;(function(){
  angular.module('frontPageApp')
  .component('regularLesson',{
    bindings: {
      lessonId: '@',
    //  lessonCode : '@'
    },
    controller: 'regularLessonCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/regularLesson.html'
  })
  .controller('regularLessonCtrl', regularLessonCtrl);

  regularLessonCtrl.$inject = ['$location', '$sce', 'regularContentService'];

  function regularLessonCtrl($location, $sce, regularContentService){
    var vm = this;
    vm.lesson = null;
    vm.parseLessonBody = parseLessonBody;
    vm.$onInit = init;

    function init(){
      //console.log(vm.lessonCode);
      //console.log(vm.lessonId);
      regularContentService.getRegularLesson(vm.lessonId)
        .then(function(successdata){
          vm.lesson = successdata.data;
        }, function(error){
          console.log(error);
         });
    };
    function getLessonFromId(id){
    };

    function parseLessonBody(){
      return  (vm.lesson != null) ? $sce.trustAsHtml(vm.lesson.body) : '';
      //return 'hola';
    }
  };
})();
