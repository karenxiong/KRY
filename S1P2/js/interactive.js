$(document).ready(function() {
  
  // ======== INTERACTIVE CANVAS ========
  $(".button1").click(function() {
    $(".button1").fadeOut(1000, function() {
      $(".canvaschase").fadeIn(0, function() {
        // ========= MAN IMGS =========
        var man = new Image();
        man.src = "img/man-stop.png";
        var man1 = new Image();
        man1.src = "img/man1.png";
        var man2 = new Image();
        man2.src = "img/man2.png";
        var man3 = new Image();
        man3.src = "img/man3.png";
        var man4 = new Image();
        man4.src = "img/man4.png";
        var man5 = new Image();
        man5.src = "img/man5.png";

        // ========= WOMAN IMGS =========
        var woman = new Image();
        woman.src = "img/woman-stop.png";
        var woman1 = new Image();
        woman1.src = "img/woman1.png";
        var woman2 = new Image();
        woman2.src = "img/woman2.png";
        var woman3 = new Image();
        woman3.src = "img/woman3.png";
        var woman4 = new Image();
        woman4.src = "img/woman4.png";
        var woman5 = new Image();
        woman5.src = "img/woman5.png";

        // ========= CANVAS SET UP =========
        var canvas = document.getElementById("chase");
        canvas.width = 600;
        canvas.height = 600;
        var context = canvas.getContext("2d");

        var x = 0;
        var y = 150;
        var remain;

        var xMan = -200;
        var yMan = 150;
        var remainMan;

        var rightKeyIsDown = false;
        //var opacity = 0;
        var chaseOpacity = 1;


        // ========= WALK IMGS =========
        var manbehind = new Image();
        manbehind.src = "img/manbehind.png";
        
        var womanfront = new Image();
        womanfront.src = "img/womanfront.png";
        
        var heartpink = new Image();
        heartpink.src = "img/heartpink.png";
        
        // ========= WALK CANVAS SET UP =========
        var canvas = document.getElementById("walk");
        canvas.width = 800;
        canvas.height = 600;
        var context = canvas.getContext("2d");

        var walkOpacity = 0.5;
        var xBehind = 0;
        var v = 1;
        var count = 0;
    

        requestAnimationFrame(chaseScenario);

        // ========= WOMAN WALKING MAN CHASING =========

        function chaseScenario() {
          
          context.clearRect(0, 0, canvas.width, canvas.height);

          //the man is walking
          xMan = xMan + 1.4;
          remainMan = (xMan + 200) % 50;
          if (remainMan < 10) {
            context.drawImage(man1, xMan, yMan);
          } else if (remainMan < 20) {
            context.drawImage(man2, xMan, yMan);
          } else if (remainMan < 30) {
            context.drawImage(man3, xMan, yMan);
          } else if (remainMan < 40) {
            context.drawImage(man4, xMan, yMan);
          } else if (remainMan >= 40) {
            context.drawImage(man5, xMan, yMan);
          } else {
            context.drawImage(man, xMan, yMan);
          }

          //the woman stops or is walking
          if (rightKeyIsDown) {
            x = x + 1.5;
            remain = x % 50;
            if (remain < 10) {
              context.drawImage(woman1, x, y);
            } else if (remain < 20 ) {
              context.drawImage(woman2, x, y);
            } else if (remain < 30 ) {
              context.drawImage(woman3, x, y);
            } else if (remain < 40 ) {
              context.drawImage(woman4, x, y);
            } else if (remain >= 40 ) {
              context.drawImage(woman5, x, y);
            }
          } else {
            context.drawImage(woman, x, y);
          }

          
          // so as the man reaches the girl.. if not still loop walking cycles
          if (xMan + 60 > x) {
            if (chaseOpacity > 0) {
              context.globalAlpha = chaseOpacity;
              chaseOpacity -= 0.02;
              xMan = x - 60;
              requestAnimationFrame(chaseScenario);
              document.body.onkeydown = function(event) {
                if (event.keyCode == 39) {
                  console.log("pushed right");
                  rightKeyIsDown = false;
                }
              }
            } else {
              context.clearRect(0, 0, canvas.width, canvas.height);
              $(".scenario").fadeOut(1000);
              $(".chase-fail").fadeIn(1000);
              $(".button2").fadeIn(1000, function() {
                $(".button2").click(function() {
                  $(".chase-fail").fadeOut(500);
                  $(".button2").fadeOut(500, function() {
                    $(".canvaswalk").fadeIn(0, function() {
                      requestAnimationFrame(walkAnimation);
                    });
                  });
                });
              });

            }
          } else if (x > canvas.width) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.clearRect(0, 0, canvas.width, canvas.height);
            $(".scenario").fadeOut(1000);
            $(".chase-success").fadeIn(1000);
            $(".button2").fadeIn(1000, function() {
              $(".button2").click(function() {
                $(".chase-success").fadeOut(500);
                $(".button2").fadeOut(500, function() {
                  $(".canvaswalk").fadeIn(0, function() {
                    requestAnimationFrame(walkAnimation);
                  });
                });
              });
            }); 
          } else {
            requestAnimationFrame(chaseScenario);
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


        // =========== A NEW CANVAS!! ============

        function walkAnimation() {
      
          context.clearRect(0, 0, canvas.width, canvas.height);

          if (walkOpacity < 1) {
            context.globalAlpha = walkOpacity;
            walkOpacity += 0.003;
            v -= 0.008;
            xBehind += v;
          //  requestAnimationFrame(walkAnimation);
          }

          context.drawImage(manbehind, xBehind, 50);
          context.drawImage(womanfront, 350, 50);

          
          requestAnimationFrame(walkAnimation);

          if (count < 80) {
            count ++;
          } else if (count < 150) {
            $(".heartpink").animate({opacity: '1'}, 500)
            $(".heartpink img").animate({width: '110px'}, 300)
            $(".heartpink img").animate({width: '100px'}, 500)
            count ++;
          } else if (count < 250){
            $(".braceletbutton").animate({opacity: '1'}, 1000);
            count ++;
          } else {
            $(".braceletbutton-text").animate({opacity: '1'}, 1000);
          } 
        };


      });
    });
  });

});