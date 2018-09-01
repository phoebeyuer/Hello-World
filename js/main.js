function main() {

(function() {
	document.body.parentNode.style.overflowY = "hidden";
	$("body").parent().css("overflow-y","hidden");
	var tempZIndex = 6;
		$('#contact .circle-box span').click(function(e) {
			if($(this).hasClass('current')){
				return
			}
			$(this).attr('class','current');
			$(this).siblings().attr('class','');
			tempZIndex++;
			var tempIndex = $(this).index();
			$('#contact ul li').eq(tempIndex).siblings().css('opacity',"0");
			$('#contact ul li').eq(tempIndex).css('opacity',"1");

		})

	var temp = -1;
	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var tempA = ['#page-top','#about','#master','#works','#experience','#contact'];
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            for(var i=0; i < tempA.length; i++) {
          		if (this.hash == tempA[i]) {
          			temp = i;
          		}
          	}
            return false;
          }
        }
      });

	$(window).on('mousewheel', function(e){
		if(temp == -1) {
			temp = $('.navbar-nav li').filter('.active').index();
		}
		var delta = e.deltaY;
		var tempClass = ['#page-top','#about','#master','#works','#experience','#contact'];
		console.log(temp);
		console.log(Math.ceil($(tempClass[temp]).offset().top));
		console.log(Math.ceil($(document).scrollTop()));
		var offset1 = Math.ceil($(tempClass[temp]).offset().top);
		var offset2 = Math.ceil($(document).scrollTop());
		if(offset1 < offset2-20 || offset1 > offset1+20) {
			return;
		}
		temp = $('.navbar-nav li').filter('.active').index();
		if(delta == 1) {
			if(temp === 0) {
				return;
			}
			temp--;
			$('html,body').animate({
				scrollTop: $(tempClass[temp]).offset().top
			},900);
			return false;
		}
		if(delta == -1) {
			if(temp === 5) {
				return;
			}
			temp++;
			$('html,body').animate({
				scrollTop: $(tempClass[temp]).offset().top
			},900);
			return false;
		}
	});

	$(document).keydown(function(event){  
		if(temp == -1) {
			temp = $('.navbar-nav li').filter('.active').index();
		}
		var tempClass = ['#page-top','#about','#master','#works','#experience','#contact'];
		var offset1 = Math.ceil($(tempClass[temp]).offset().top);
		var offset2 = Math.ceil($(document).scrollTop());
		if(offset1 < offset2-20 || offset1 > offset1+20) {
			return;
		}
		temp = $('.navbar-nav li').filter('.active').index();
		if(event.keyCode == 38) {
			if(temp === 0) {
				return;
			}
			temp--;
			$('html,body').animate({
				scrollTop: $(tempClass[temp]).offset().top
			},900);
			return false;
		}
		if(event.keyCode == 40) {
			if(temp === 5) {
				return;
			}
			temp++;
			$('html,body').animate({
				scrollTop: $(tempClass[temp]).offset().top
			},900);
			return false;
		}

      });  

}());
}

main();