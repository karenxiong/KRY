$(document).ready(function() {
  // listens to when user change dropdown menu
  $("#coloursDropdown").change(function() {
    // change the src of image to the user selected value
    $("#braceletImg").attr("src", "img/" + $(this).val() + ".png");
  });

  //preorder button changes

  $(".preorder").click(function() {
    $(this).css("background-image", "url(./img/submitted.png)");
  });

  $(".preorder").hover(
    function() {
      if ($(this).css("background-image").indexOf("submitted.png") == -1) {
        $(this).css("background-image", "url(./img/preorder_hover.png)");
      };
    },
    function() {
      if ($(this).css("background-image").indexOf("submitted.png") == -1) {
        $(this).css("background-image", "url(./img/preorder.png)");
      };
    });

  /* Email Submit Alert & rollovers */
  $("#emailSubmit").click(function() {
    alert("Thanks for your message! We'll get back to you as soon as we can.");
  });

  $("#emailSubmit").hover(
    function() {$(this).attr("src", "img/send2.png");}, 
    function() {$(this).attr("src", "img/send.png");}
  );

  
  /* Scrolling Effects */

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

  /* Scroll Up Arrow */

  $('.arrowUp').click(function() {
    navClicked = true; // set tracker

    //remove all highlights in navigation
    $('#navigation a').removeClass('active');

    //scrolls to the corresponding section
    $('html, body').animate({ 
      scrollTop: $("#home").offset().top + 'px' }, 1000, 'linear');

    //enable the scroll function listener when all animations are done
    $(":animated").promise().done(function() {
      setTimeout(function() {navClicked = false;}, 1000);
    });
  });

  //keeps track of where the user is scrolling to and updates highlights on navbar
    $(document).scroll(function() {
      // only check scrolling if the navigation animations are done
      if (!navClicked) {
        //remove all highlights in navigation
        $('#navigation a').removeClass('active');

        $('#navigation a.' + $('section:hover').attr('id')).addClass('active')
      };
    });

    // arrow scroll down effect
  $('.arrow').click(function(){
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

  /* feature icons animation, for all icons */
  // mouse in to fade text in
  $('#features a').mouseover(function(){
    $(this).siblings('h5, p, hr').fadeIn('slow')
  });

  // mouse out to fade text out
  $('#features a').mouseout(function(){
    $(this).siblings('h5, p, hr').fadeOut('fast');
  });

  /* how it works animation, for all */
    $('#howitworks a').mouseover(function(){
    $(this).siblings('p').fadeIn('fast')
  });

  // mouse out to fade text out
  $('#howitworks a').mouseout(function(){
    $(this).siblings('p').fadeOut('fast');
  });

  // listens to when user change dropdown menu
  $("#listingtype").change(function() {
    // change the src of image to the user selected value
    $("#pre-order h2").html($(this).val());
  });

});