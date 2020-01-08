$(function () {
  $('a').on('click', function (e) {
    e.preventDefault();
  })

  $(window).on('scroll', function () {
    if ($(this).scrollTop() != 0)
      $('.toTop').css({
        transition: '1.2s',
        transform: 'scale(1)'
      })
    else
      $('.toTop').css({
        transition: '.4s',
        transform: 'scale(0)'
      })
  })

  $('#viewMore').on('click', function () {
    $('.more').slideToggle(500);
  })


  $('.menu-btn').on('click', function () {
    $(this).toggleClass('menu-btn-active');
    $('.nav-menu').toggleClass('nav-menu-active');
  })


  $('.toTop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 550);
  })

  $('.arrow').on('click', function () {
    $('body,html').animate({
      scrollTop: $('#about').offset().top
    }, 600)
  })

  $('.button-outline[filter]').on('click', function () {
    $('.works-items').css({
      display: 'inline-block'
    })
    if ($(this).attr('filter') == 'all') {
      $('.works-items').css({
        display: 'flex'
      })
      if ($(this).attr('val') == 'off') {
        $('.button-outline[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button-outline[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.filter > img').show(270);
      }
    } else
      if ($(this).attr('val') == 'off') {
        $('.button-outline[filter]').attr('val', 'off');
        $(this).attr('val', 'on');
        $('.button-outline[filter]').removeClass('focused');
        $(this).addClass('focused');
        $('.works-items-image').css({
          width: '85%'
        })
        $('.filter > img').hide(270);
        var filter = $(this).attr('filter');
        $('.filter > img[filter = ' + filter + ']').show(270);
      }
  })

  $('.menu-link[href^="#"]').on('click', function () {
    var target = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 500)
  })

});