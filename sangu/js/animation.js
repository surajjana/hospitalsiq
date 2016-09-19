(function() {
	
	var animatingSvg = Snap('#animated-bot'),
		botFace = animatingSvg.select('#botface'),
		botMouth = animatingSvg.select('#botmouth'),
		talkBox = animatingSvg.select('#talkbox'),
		botText = animatingSvg.select('#hello');


	initLoading();	

	function initLoading() {

        animateStar();

        window.setInterval(animateStar,4000);
        animateStars();

        window.setInterval(animateStars,4000);
		animateFace();
		

	}

   /* Star animation js */ function animateStar(){

      document.getElementById("star_one").classList.add("path");
        setTimeout(function(){
          animateFill("star_one");
        }, 1000);
           document.getElementById("star_two").classList.add("path");
           setTimeout(function(){
          animateFill("star_two");
        }, 1500);
              document.getElementById("star_three").classList.add("path");
              setTimeout(function(){
          animateFill("star_three");
        }, 2000);
                 document.getElementById("star_four").classList.add("path");
                 setTimeout(function(){
          animateFill("star_four");
        }, 2500);
                    document.getElementById("star_five").classList.add("path");
                    setTimeout(function(){
          animateFill("star_five");
        }, 3000);


        animateNotFill("star_one");
        animateNotFill("star_two");
        animateNotFill("star_three");
        animateNotFill("star_four");
        animateNotFill("star_five");

        //document.getElementById(id).classList.remove("fillpath");
    }

     function animateStars(){

      document.getElementById("star_ones").classList.add("path");
        setTimeout(function(){
          animateFill("star_ones");
        }, 1000);
           document.getElementById("star_twos").classList.add("path");
           setTimeout(function(){
          animateFill("star_twos");
        }, 1500);
              document.getElementById("star_threes").classList.add("path");
              setTimeout(function(){
          animateFill("star_threes");
        }, 2000);
                 document.getElementById("star_fours").classList.add("path");
                 setTimeout(function(){
          animateFill("star_fours");
        }, 2500);
                    document.getElementById("star_fives").classList.add("path");
                    setTimeout(function(){
          animateFill("star_fives");
        }, 3000);


        animateNotFill("star_ones");
        animateNotFill("star_twos");
        animateNotFill("star_threes");
        animateNotFill("star_fours");
        animateNotFill("star_fives");

        //document.getElementById(id).classList.remove("fillpath");
    }

    function animateFill(id)
    {

    		document.getElementById(id).classList.remove("path");
    	document.getElementById(id).classList.add("fillpath");

    }

    function animateNotFill(id)
    {

      //document.getElementById(id).classList.remove("path");
      document.getElementById(id).classList.remove("fillpath");

    }

    /* bot animation js */
  
	function animateFace(){
		document.getElementById('botface').style.display = "block";
		botFace.addClass('animated fadeIn');
		//document.getElementById('botface').style.animation = '2s';
		setTimeout(function(){
			document.getElementById('botmouth').style.display = "block";
			botMouth.addClass(' bounce');
		}, 1000);

		setTimeout(function(){
			document.getElementById('talkbox').style.display = "block";
			talkBox.addClass('animated fadeIn');
		}, 2000);

		setTimeout(function(){
			document.getElementById('hello').style.display = "block";
			botText.addClass('animated fadeIn infinite');
		},2000);
	}



})();
