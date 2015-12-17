$(document).ready(function() {
  // listens to when user change dropdown menu
  $("#coloursDropdown").change(function() {
    // change the src of image to the user selected value
    $("#braceletImg").attr("src", "img/" + $(this).val() + ".png");
  });

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
      console.log($(this).css("background-image").indexOf("submitted.png"));
      if ($(this).css("background-image").indexOf("submitted.png") == -1) {
        $(this).css("background-image", "url(./img/preorder.png)");
      };
    });

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


  /* feature icons animation, for all icons */
  // mouse in to fade text in
  $('#features a').mouseover(function(){
    $(this).siblings('p').fadeIn('slow')
  });

  // mouse out to fade text out
  $('#features a').mouseout(function(){
    $(this).siblings('p').fadeOut('fast');
  });
});