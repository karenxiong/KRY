$(document).ready(function() {
	//variable used to keep track of if the navbar has been clicked
	var navClicked = false;
  	
  	//monitor when the mouse enters a section to highlight navbar
  	$('section').mouseenter(function() {
  		//remove all highlights in navigation
  		$('#navigation li').removeClass('active');

  		//highlights the current section's name in navbar 
    	$('#navigation a[href="#'+$(this).attr('id')+'"]').addClass('active');
  	});

  	//monitor when user clicks on the navbar
	$('#navigation a').click(function() {
		navClicked = true; // set tracker
  		//remove all highlights in navigation
  		$('#navigation a').removeClass('active');

  		//highlights the clicked navbar item
   		$(this).addClass('active');

   		//scrolls to the corresponding section
    	$('html, body').animate({ 
    		scrollTop: $("#" + $(this).html().replace(/ /g,'').toLowerCase()).offset().top + 'px' }, 1000, 'linear');

    	//enable the scroll function listener when all animations are done
    	$(":animated").promise().done(function() {
    		setTimeout(function() {navClicked = false;}, 500);
		});
  	});

	//keeps track of where the user is scrolling to and updates highlights on navbar
  	$(document).scroll(function() {
  		// only check scrolling if the navigation animations are done
  		if (!navClicked) {
  			console.log("???")
	  		//remove all highlights in navigation
	  		$('#navigation a').removeClass('active');

	    	$('#navigation a.' + $('section:hover').attr('id')).addClass('active')
	    };
  	});

  	// arrow scroll down effect
 	$('.arrow').click(function(){
 		console.log("wow");
        var nextSection = $(this).closest('section').next('section');
        navClicked = true;

        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 1000);

        $('.aboutus').addClass('active');
        //enable the scroll function listener when all animations are done
    	$(":animated").promise().done(function() {
    		setTimeout(function() {navClicked = false;}, 500);
		});
    });

// feature icons animation

  // heart icon
  $('.ficon1').mouseover(function(){
    $('.ftext1').show();
    $('.ficon1').mouseout(function(){
      $('.ftext1').hide();
    });
  });

  $('.ficon2').mouseover(function(){
    $('.ftext2').show();
    $('.ficon2').mouseout(function(){
      $('.ftext2').hide();
    });
  });

  $('.ficon3').mouseover(function(){
    $('.ftext3').show();
    $('.ficon3').mouseout(function(){
      $('.ftext3').hide();
    });
  });

  $('.ficon4').mouseover(function(){
    $('.ftext4').show();
    $('.ficon4').mouseout(function(){
      $('.ftext4').hide();
    });
  });

  $('.ficon5').mouseover(function(){
    $('.ftext5').show();
    $('.ficon5').mouseout(function(){
      $('.ftext5').hide();
    });
  });

});