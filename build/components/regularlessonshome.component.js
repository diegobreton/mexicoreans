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

  regularLessonsHomeCtrl.$inject = ['$location', '$anchorScroll', '$http', 'regularContentService'];

  function regularLessonsHomeCtrl($location, $anchorScroll, $http, regularContentService){
    var vm = this;
    vm.getAllLevels = getAllLevels;
    vm.goToLesson = goToLesson;
    vm.levels = [];

    init();

    function init(){
      $http.get('http://localhost:2424/api/level/').then(function(successdata){
        vm.levels = successdata.data.objects;
      }, function(error){

      });
    };

    function splitIntoLevels(data){
      var levels = [];
      var objects = data.data.objects;

      for(var i in objects){
        var levelToTest = objects[i].level;
        if(!inArray(levelToTest, levels)){
          levels.push(levelToTest)
        }
      }
      vm.levels = levels;
    }
    function getAllLevels(){
      return vm.levels;
    };

    function inArray(target, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i] === target) {
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
