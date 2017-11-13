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
        })
        .state('lessons.viewlesson', {
          //url: '/?lessonId&lessonCode',
          url: '/:lessonCode',
          params:{
            lessonId: null
          },
          component:'regularLesson',
          resolve: {
              lessonCode: function($transition$){
              console.log($transition$.params());
              return $transition$.params().lessonCode;
            },
              lessonId: function($transition$){
                console.log($transition$.params());
                return $transition$.params().lessonId;
                //return '190'
             },
          }
        });
    });

    angular.module('frontPageApp')
      .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
      }]);
})();
