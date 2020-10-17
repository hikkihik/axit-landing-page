$(document).ready(function () {
  $(window).scroll(() => { 
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  });
  
  // Tab
  $('.feature-one__nav-tabs .nav-tabs__item').on('click', event => {
    event.preventDefault();
    $(event.currentTarget).addClass('nav-tabs-active').siblings().removeClass('nav-tabs-active');
    $($(event.currentTarget).attr('href')).addClass('tab-active').siblings().removeClass('tab-active');
  });
});
