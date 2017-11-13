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
;;(function(){
  'use strict';

  angular.module('frontPageApp')
    .factory('regularContentService', regularContentServiceCtrl);

  regularContentServiceCtrl.$inject = ['$http'];

  function regularContentServiceCtrl($http){
    var vm = this;
    vm.foundLevels;
    vm.foundLessons;
    vm.foundLesson;

    var getRegularLevels = function(){
      vm.foundLevels = $http.get('http://localhost:2424/api/level/');
      return vm.foundLevels;
    }

    var getRegularLessons = function(){
      vm.foundLessons = $http.get('http://localhost:2424/api/lesson/');
      return vm.foundLessons;
    }

    var getRegularLesson = function(id){
      vm.foundLesson = $http.get('http://localhost:2424/api/lesson/' + id);
      return vm.foundLesson;
    }

    return {
      getRegularLevels: getRegularLevels,
      getRegularLessons: getRegularLessons,
      getRegularLesson: getRegularLesson
    }
  }

})();
;;(function(){
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
;;(function(){
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
;;(function(){
  angular.module('frontPageApp')
  .component('homePageCarrousel',{
    bindings: {

    },
    controller: 'homePageCarrouselCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/homePageCarrousel.html'
  })
  .controller('homePageCarrouselCtrl', homePageCarrouselCtrl);

  homePageCarrouselCtrl.$inject = [];

  function homePageCarrouselCtrl(){
    var vm = this;

    vm.ImageCollection = getImageCollection();


    init();

    function init(){
    };

    function getImageCollection(){
      ///TODO develop and endpoint to fetch image objects
      return [{
        target: "https://google.com",
        sourceFile: "http://www.compoundchem.com/wp-content/uploads/2016/06/Chemunicate-Banner-Site.png",
        captionTitle: "",
        caption:""
      },
      {
        target: "https://youtube.com",
        sourceFile: "https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi",
        captionTitle:"",
        caption:""
      },
      {
        target: "https://google.com",
        sourceFile: "https://spark.adobe.com/images/landing/examples/valentine-sale-etsy-banner.jpg",
        captionTitle:"",
        caption:""
      }];
    };
  };
})();
;;(function(){
  angular.module('frontPageApp')
  .component('homePageContent',{
    bindings: {

    },
    controller: 'homePageContentCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/homepagecontent.html'
  })
  .controller('homePageContentCtrl', homePageContentCtrl);

  homePageContentCtrl.$inject = [];

  function homePageContentCtrl(){
    var vm = this;
    init();

    function init(){
    };
  };
})();
;;(function(){
  angular.module('frontPageApp')
  .component('homePage',{
    bindings: {

    },
    controller: 'homePageCtrl',
    controllerAs: 'vm',
    templateUrl: './templates/homepage.html'
  })
  .controller('homePageCtrl', homePageCtrl);

  homePageCtrl.$inject = [];

  function homePageCtrl(){
    var vm = this;

    init();

    function init(){
    };
  };
})();
;;(function(){
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
;;(function(){
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
;;$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
;;function scrollToTop() {
  var $mybuttons = $('.go-to-top-btn');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$mybuttons.fadeIn();
		} else {
			$mybuttons.fadeOut();
		}
	});
  $('body,html').animate({
  	scrollTop: 0
  }, 600);
};
;;function toggleButtonText(sender){
  sender.text = (sender.text === "보기") ? "닫기" : "보기";
}
