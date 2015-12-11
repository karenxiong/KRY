$(document).ready(function() {
  	// navigation highlighting effect

  	$('section').mouseenter(function() {
  		$('#navigation a').removeClass('active');
    	$('#navigation a[href="#'+$(this).attr('id')+'"]').addClass('active');
  	});

	$('#navigation a').click(function() {
   		$(this).addClass('active').siblings('#navigation a').removeClass('active');
    	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top + 'px' }, 1000, 'linear');    
  	});

  	$(document).scroll(function() {
    	$('#navigation a[href="#'+$('section:hover').attr('id')+'"]').addClass('active').siblings('#navigation a').removeClass('active');
  	});

  	// arrow scroll down effect

 	$('.arrow').click(function(){
        var nextSection = $(this).closest('section').next('section');
        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 2000);
    });

});