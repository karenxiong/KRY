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

      //enable the scroll function listener when scroll animation is done
      setTimeout(function() {navClicked = false;}, 1100);
  	});

	   //keeps track of where the user is scrolling to and updates highlights on navbar
  	// $(document).scroll(function() {
  	// 	// only check scrolling if the navigation animations are done
  	// 	if (!navClicked) {
	  // 		//remove all highlights in navigation
	  // 		$('#navigation a').removeClass('active');

	  //   	$('#navigation a.' + $('section:hover').attr('id')).addClass('active')
	  //   };
  	// });

  // arrow scroll down effect
 	$('.arrow').click(function(){
        var nextSection = $(this).closest('section').next('section');
        navClicked = true;

        $('html, body').animate({
            scrollTop: $(nextSection).offset().top
        }, 1000);

        $('.aboutus').addClass('active');
      //enable the scroll function listener when scroll animation is done
    	setTimeout(function() {navClicked = false;}, 1100);
  });

  /* feature icons animation, for all icons */
  // mouse in to fade text in
  $('#features a').mouseover(function(){
    $(this).siblings('p').fadeIn('slow')
  });

  // mouse out to fade text out
  $('#features a').mouseout(function(){
    $(this).siblings('p').fadeOut('fast');
  });

  // interaction

  $(".button1").click(function() {
    $(".button1").fadeOut(1000, function() {
      $(".canvas").fadeIn(0, function() {
        // ========= MAN IMGS =========
        var man = new Image();
        man.src = "img/man.png";

        // ========= WOMAN IMGS =========
        var woman = new Image();
        woman.src = "img/woman.png";

        var woman1 = new Image();
        woman1.src = "img/woman1.png";

        var woman2 = new Image();
        woman2.src = "img/woman2.png";

        // ========= CANVAS SET UP =========
        var canvas = document.getElementById("chase");
        canvas.width = 700;
        canvas.height = 450;
        var context = canvas.getContext("2d");

        var x = 50;
        var y = 50;
        var remain;

        var xMan = -200;
        var yMan = 10;
        var remainMan;

        var rightKeyIsDown = false;
        //var opacity = 0;
        var opacity = 1;

        requestAnimationFrame(onAnimationFrame);

        // ========= WOMAN WALKING MAN CHASING =========

        function onAnimationFrame() {
          
          context.clearRect(0, 0, canvas.width, canvas.height);

          //the man is walking
          xMan = xMan + 1.4;
          remainMan = xMan % 20;
          if (remain < 10) {
            context.drawImage(man, xMan, yMan, 140, 400);
          } else if (remain >= 10) {
            context.drawImage(man, xMan, yMan, 140, 400);
          } else {
            context.drawImage(man, xMan, yMan, 140, 400);
          }

          //the woman stops or is walking
          if (rightKeyIsDown) {
            x = x + 1.5;
            remain = x % 20;
            console.log (x);
            console.log (remain);
            if (remain < 10) {
              context.drawImage(woman1, x, y, 160, 360);
            } else if (remain >= 10 ) {
              context.drawImage(woman2, x, y, 160, 360);
            }
          } else {
            context.drawImage(woman, x, y, 160, 360);
          }

          
          // so as the man reaches the girl.. if not still loop walking cycles
          if (xMan + 110 > x) {
            if (opacity > 0) {
              context.globalAlpha = opacity;
              opacity -= 0.02;
              xMan = x - 110;
              requestAnimationFrame(onAnimationFrame);
              document.body.onkeydown = function(event) {
                if (event.keyCode == 39) {
                  console.log("pushed right");
                  rightKeyIsDown = false;
                }
              }
            } else {
              context.globalAlpha = 1;
              context.fillStyle = "red";
              context.font = "30px Helvetica";
              //context.fillText("wow now save yourself :)", 170, 220);
              $(".button2").animate({opacity: '1'}, 1000);

              //click and scroll down???

            }

          } else if (xMan > canvas.width) {
            context.clearRect(0, 0, canvas.width, canvas.height);
          } else {
            requestAnimationFrame(onAnimationFrame);
          }
        };

        // ========= WOMAN WALKING KEY =========
        document.body.onkeyup = function(event) {
          if (event.keyCode == 39) {
            rightKeyIsDown = false;
          }
        };
        document.body.onkeydown = function(event) {
          if (event.keyCode == 39) {
            console.log("pushed right");
            rightKeyIsDown = true;
          }
        };
      });
    });
  });


  // ======= THE BRACELET APPEARS =======
  $(window).scroll(function() {
    // only check scrolling if the navigation animations are done
    if (!navClicked) {
      //remove all highlights in navigation
      $('#navigation a').removeClass('active');

      $('#navigation a.' + $('section:hover').attr('id')).addClass('active')
    };

    if($(window).scrollTop() > 200) {
      $(".front-woman").animate({top: '0', opacity: '0.5'}, 2000);
    };
    if($(window).scrollTop() > 500) {
      $(".back-man").animate({top: '-10px', opacity: '0.5', left: '200'}, 4000);
      $(".back-man img").animate({width: '450px'}, 4000);
    };
    if($(window).scrollTop() > 600) {
      $(".bracelet").animate({top: '300', opacity: '1'}, 2000);
    };

    if($(window).scrollTop() > 900) {

      $(".realheart").animate({opacity: '1'}, 2000, function() {
        $(".realheart img").animate({width: '120px'}, 300, function() {
          $(".realheart img").animate({width: '100px'}, 300, function() {
            $(".realheart img").animate({width: '120px'}, 300, function() {
              $(".bling").animate({opacity: '1'}, 300, function() {
                $(".bling").animate({opacity: '0'}, 300, function() {
                  $(".bling").animate({opacity: '1'}, 300, function() {
                    $(".bling").animate({opacity: '0'}, 300, function() {
                      $(".bling").animate({opacity: '1'}, 300)
                    });
                  });
                });
              });
            });
          });
        });
      });
    //hhhhearrrrrtbeat done!
    };
  });


});