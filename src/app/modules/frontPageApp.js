;(function(){
  angular.module('frontPageApp', ['ui.router']);

  angular.module('frontPageApp')
    .config(appConfigurationFunction);

    appConfigurationFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfigurationFunction($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url: '/home',
          component: 'homePage'
        })
        .state('lessons', {
          abstract: true,
          url: '/lessons',
          template: '<ui-view/>'
        })
        .state('lessons.regular', {
          url: '/regular',
          component: 'regularLessonsHome'
        })
        .state('lessons.viewlesson', {
          //url: '/?lessonId&lessonCode',
          //url: '/:lessonCode',
          url: '/:lessonId',
          params:{
            //lessonId: null
            lessonCode: null
          },
          component:'regularLesson',
          resolve: {
            //   lessonCode: function($transition$){
            //   //console.log($transition$.params());
            //   return $transition$.params().lessonCode;
            // },
              lessonId: function($transition$){
                //console.log($transition$.params());
                return $transition$.params().lessonId;
             },
          }
        });
    }

    angular.module('frontPageApp')
      .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
      }]);
})();
