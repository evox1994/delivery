$(document).ready(function(){

	$(document).on('click','.radio-btn',function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$(document).on('click','.mobile-btn',function(){
		if ( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$('.mobile-menu').removeClass('active');
			$('body').removeClass('no-scroll');
		} else {
			$(this).addClass('active');
			$('.mobile-menu').addClass('active');
			$('body').addClass('no-scroll');
		}
	});

	$('.fancybox-gal').fancybox({loop: true});
	$('.fancybox').fancybox({touch: false});
	$('input[type="tel"]').inputmask('+7 (999) 999-99-99');

	$(document).on('click','.close-btn',function(){
		$('.mobile-btn').removeClass('active');
		$('.mobile-menu').removeClass('active');
		$('body').removeClass('no-scroll');
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	/*$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.policy-text .radio-btn').hasClass('active') ) {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).parents('form').find('.policy-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});*/

	$('form').on('submit',function(){
		var valid = true;

		if ( $(this).find('.policy-text .radio-btn').length ){
			if ( $(this).find('.policy-text .radio-btn').hasClass('active') ){
				$(this).find('input').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
				$(this).find('textarea').each(function(){
					if(!$(this).val().length) { 
						event.preventDefault();
						valid = false;
						$(this).addClass("error"); 
					} else { 
						$(this).removeClass("error"); 
					}
				});
			} else {
				$(this).find('.policy-text .radio-btn').addClass('error');
				event.preventDefault();
				return false;
			}
		} else {
			$(this).find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
			$(this).find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault();
					valid = false;
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				}
			});
		}

		if (!valid) {
			event.preventDefault();
			return false;
		}
	});

	function footerYear(){
		var date = new Date();
		var year = date.getFullYear();
		$('#footer-year').text(year);
	}
	footerYear();

	$(document).on('click','.b-menu-nav .nav ul li a',function(){
		var el = $(this).attr('href');
		var mh = $('.b-menu-nav').outerHeight();
		var des = $(el).offset().top - mh;
		$('body,html').animate({scrollTop: des}, 800);
		return false;
	});

	function menuActive(){
		if ( $('.b-menu-nav').length ){
			var mh = $('.b-menu-nav').outerHeight();
			var st = $(window).scrollTop();
			var hw = $(window).outerHeight()/2;
			$('.b-menu-nav ul li').each(function(){
				var el = $(this).find('a').attr('href');
				var el_pos = $(el).offset().top - mh - hw;
				if ( $(this).next('li').length ){
					var next_el = $(this).next('li').find('a').attr('href');
					var next_el_pos = $(next_el).offset().top - mh - hw;
					if ( st < next_el_pos ){
						if ( st > el_pos ){
							$(this).parents('ul').find('li').removeClass('active');
							$(this).addClass('active');
							return false;
						}
					}
				} else {
					if ( st > el_pos ){
						$(this).parents('ul').find('li').removeClass('active');
						$(this).addClass('active');
						return false;
					}
				}
			});
		}
	}
	menuActive();

	$(window).on('scroll',function(){
		menuActive();
	});

	$(window).resize(function(){
		menuActive();
	});

});