$(document).ready(function(){
    $(window).scroll(function(){
    	var mq = window.matchMedia( "(min-width: 600px)" );
        var y = $(document).scrollTop();
        var menu=$(".menu");
        var menu1=$(".menu1");
        var mainnav=$(".mainnav");
        var mainnavbar=$(".mainnavbar");
        var img1=$(".img1");
        var img2=$(".img2")
        $('.parallax1').css({
        	'transform': 'translate(0px, '+ y/2 +'%)'
        });
        if (mq.matches) {

       if(y>600){
       	menu.addClass("fixed");
       	mainnav.css({
       		'margin-top':'10px'
       	});
       	mainnavbar.css({
       		'margin-top':'10px'
       	});
       	img1.addClass("img2");
       }
       else{
       	menu.removeClass("fixed");
       	mainnav.css({
       		'margin-top':'70px'
       	});
       	mainnavbar.css({
       		'margin-top':'70px'
       	});
       	img1.removeClass("img2");
       }
   	   }
   	   else{
   	   	if(y>600){
       	menu1.addClass("fixed");
       		mainnav.css({
       		'margin-top':'10px'
       	});
       	mainnavbar.css({
       		'margin-top':'10px'
       	});

       }
       else{
       	menu1.removeClass("fixed");
       	mainnav.css({
       		'margin-top':'70px'
       	});
       	mainnavbar.css({
       		'margin-top':'70px'
       	});
       }
   	   }
    });
});