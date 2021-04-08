$(function() {
    $('.load-more').on('click', function() {
        const btn = $(this);
        const loader = btn.find('span');
        $.ajax({
            url: '../data.html',
            type: 'GET',
            beforeSend: function() {
                btn.attr('disabled', true);
                loader.addClass('d-inline-block');
            },
            success: function(responce) {
                setTimeout(function() {
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                    $('.after-posts').before(responce);
                }, 1000);
            },
            error: function() {
                alert('Error');
                btn.attr('disabled', true);
            }
        });
    });
});

$(document).ready(function() {
      $('.slick-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});

$(document).ready(function() {
  $('.slick-slider2').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
/*
$(document).ready(function() {
  $('.slick-slider-4').slick({
    arrows: true,
    slidesToShow: 3.4,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
*/

$(document).ready(function() {
  $('.slick-slider-4').slick({
    centerMode: true,
    slidesToShow: 3,
    centerPadding: '120px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });
});
