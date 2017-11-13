;(function(){
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
