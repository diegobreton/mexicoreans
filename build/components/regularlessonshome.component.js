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

  regularLessonsHomeCtrl.$inject = ['$location', '$anchorScroll'];

  function regularLessonsHomeCtrl($location, $anchorScroll){
    var vm = this;
    vm.getAllLevels = getAllLevels;
    vm.goToLesson = goToLesson;
    vm.levels = [];

    init();

    function init(){
      vm.levels =  [{
        imgSrc: "https://www.ethos3.com/wp-content/uploads/2015/12/corporate-presentation-training-ethos3.jpg",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper libero eget tempus efficitur. In imperdiet arcu odio, eu laoreet libero congue non. Sed quis vehicula nisi, a tempor dolor.",
        lessonCollection: [{
          title: 'Hola & Adios',
          target: 'https://google.com'
          },
          {
          title: '¿Cómo estás?',
          target: 'https://yahoo.com'
        }]
      },
      {
        imgSrc: "http://img.freepik.com/free-vector/business-presentation_23-2147511785.jpg?size=338&ext=jpg",
        summary: "Donec sed mollis sem, et faucibus dolor. Vivamus feugiat tortor non mauris feugiat, ac cursus nibh sollicitudin. Ut a est tempor, aliquet odio quis, gravida lorem. Cras id neque accumsan massa rutrum ullamcorper. Praesent ac ex turpis. Etiam hendrerit turpis id placerat interdum.",
        lessonCollection: [{
          title: 'Hola & Adios',
          target: 'https://google.com'
        }]
      }];
    };

    function getAllLevels(){
      return vm.levels;
    };
    function goToLesson(id){
      $location.hash("level-" + id);
      $anchorScroll();
    };
  };
})();
