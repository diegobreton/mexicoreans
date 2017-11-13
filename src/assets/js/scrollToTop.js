;function scrollToTop() {
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
