;(function(){
  angular.module('frontPageApp')
  .component('regularLessonsHome',{
    bindings: {

    },
    controller: 'regularLessonsHomeCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/regularlessonshome.html'
  })
  .controller('regularLessonsHomeCtrl', regularLessonsHomeCtrl);

  regularLessonsHomeCtrl.$inject = ['$location', '$anchorScroll', 'regularContentService'];

  function regularLessonsHomeCtrl($location, $anchorScroll, regularContentService){
    var vm = this;
    vm.getAllLevels = getAllLevels;
    vm.goToLesson = goToLesson;
    vm.levels = [];
    vm.lessons = [];
  //  vm.toggleButtonText = toggleButtonText;
    vm.getLessonsInLevel = getLessonsInLevel;
    init();

    function init(){
      regularContentService.getRegularLevels()
      .then(function(successdata){
          vm.levels = successdata.data.objects;
        }, function(error){
          console.log(error)
      });

      regularContentService.getRegularLessons()
      .then(function(successdata){
          vm.lessons = successdata.data.objects;
        }, function(error){
          console.log(error)
      });
    };

    function getAllLevels(){
      return vm.levels;
    };


    function getLessonsInLevel(level){
      var lit = [];
      vm.lessons.forEach(function(item, index){
        if(inArray(item.lessonId, level.lessonCollection.split(','))){
          lit.push(item);
        }
      });
      return lit;
    }

    function inArray(target, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i] == target) {
          return true;
        }
      }
      return false;
    }

    function goToLesson(id){
      $location.hash("level-" + id);
      $anchorScroll();
    };
  };
})();
