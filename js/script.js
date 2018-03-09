// Slider

$(document).ready(function(){
    $('.slider').slick({
        prevArrow: $('.icon-left-open'),
        nextArrow: $('.icon-right-open'),
    });
  });

// Toggle hamburger menu
$('.icon').click(function() {
    $('.nav').toggleClass('open-hamburger');
    $('.icon').toggleClass('active-ham-menu');
});

// Testimonials
$('.testimonial').first().addClass('active-testimonial');
$('.right, .left').click(function() {
    var $this = $(this),
    currActive = $('.testimonials').find('.active-testimonial'),
    position = $('.testimonials').children().index(currActive),
    positionNumber = $('.testimonial').length;

    if ($this.hasClass('right')) {
        if(position < positionNumber) {
            $('.active-testimonial').removeClass('active-testimonial').next().addClass('active-testimonial');
        } else {
            $('.testimonial').removeClass('active-testimonial').first().addClass('active-testimonial');
        }
    } else {
        if (position === 1) {
            $('.testimonial').removeClass('active-testimonial').last().addClass('active-testimonial');
        } else {
            $('.active-testimonial').removeClass('active-testimonial').prev().addClass('active-testimonial');
        }
        
    }
    
});

// GALLERY
  //Open gallery
var gallery = $('.gallery-cta');
    $(gallery).click(function(e) {
        var modalToggle = e.target.closest('.gallery-img');
        var imgLink = $(modalToggle).find('img').attr('src');

        $('.img-modal').find('img').attr('src', imgLink);
        $('.gallery-modal').addClass('modal-toggle');
    });

// close gallery
$('.close-btn').click(function() {
    $('.gallery-modal').removeClass('modal-toggle');
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) { 
        $('.gallery-modal').removeClass('modal-toggle');
   }
});

