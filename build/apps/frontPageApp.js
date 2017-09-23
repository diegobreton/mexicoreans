(function(){
  angular.module('frontPageApp',['ui.router']);

  angular.module('frontPageApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          component: 'homePage'
        })
        .state('lessons', {
          abstract:true,
          url: '/lessons',
          template: '<ui-view/>'
        })
        .state('lessons.regular', {
          url: '/regular',
          component: 'regularLessonsHome'
        });
    });

    angular.module('frontPageApp')
      .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
      }]);
})();
