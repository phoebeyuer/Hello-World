function main() {

(function() {
	console.log('我是main函数，开始执行');
	document.body.parentNode.style.overflowY = "hidden";
	$("body").parent().css("overflow-y","hidden");

	var tempZIndex = 6;
	var temp = -1;
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

	$('.nav .master-choose a').click(function() {
		$('#master .master-pic .master-cover').css('left','80px');
		$('#master .master-pic .master-cover').animate({left: '710px'},1800);

	})

	$('#aboutChoose ul li').click(function(){
		$(this).addClass('now');
		$(this).siblings().removeClass('now');
		var chooseIndex = $(this).attr('index');
		$('#about .about-info-box div').eq(chooseIndex).css('opacity','1');
		$('#about .about-info-box div').eq(chooseIndex).css('z-index','5');
		$('#about .about-info-box div').eq(chooseIndex).siblings().css('opacity','0');
		$('#about .about-info-box div').eq(chooseIndex).siblings().css('z-index','1');
		$('#about .about-choose').css('opacity','1');
	})


	$('#workChoose1 ul li').click(function(){
		$(this).addClass('now');
		$(this).siblings().removeClass('now');
		var chooseIndex = $(this).attr('index');
		$('#works .works-item-box').eq(chooseIndex).css('opacity','1');
		$('#works .works-item-box').eq(chooseIndex).css('z-index','5');
		$('#works .works-item-box').eq(chooseIndex).siblings().css('opacity','0');
		$('#works .works-item-box').eq(chooseIndex).siblings().css('z-index','1');
		$('#works #workChoose1').css('opacity','1');
	})

	$('#masterChoose ul li').click(function(){
		$(this).addClass('now');
		$(this).siblings().removeClass('now');
		var chooseIndex = $(this).attr('index');
		$('#master .master-box').eq(chooseIndex).css('opacity','1');
		$('#master .master-box').eq(chooseIndex).siblings().css('opacity','0');
		$('#master #masterChoose').css('opacity','1');
	})

	$(window).resize(function () {          //当浏览器大小变化时
    	var position = $('.navbar #topBar li').filter('.active').attr('mark');
    	var tempindex = $('.navbar #topBar li').filter('.active').index();
    	temp = tempindex;
    	console.log(position);
    	var targetPosition = $(position);
    	$('html,body').animate({
              scrollTop: targetPosition.offset().top
            }, 10);
    	return false;
	});

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

	$('#topBar li a').click(function() {
		var aIndex = $(this).attr('index');
		$('.right-nav ul li a').attr('class','page-scroll');
		$('.right-nav ul li a').eq(aIndex).addClass('now');

	})

	$('.right-nav ul li a').click(function(){
		$('.right-nav ul li a').attr('class','page-scroll');
		$(this).addClass('now');
	})
	$(window).on('mousewheel', function(e){
		var delta = e.deltaY;
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
		if(delta == 1) {
			if(temp === 0) {
				return;
			}
			temp--;
			$('.right-nav ul li a').attr('class','page-scroll');
			$('.right-nav ul li a').eq(temp).addClass('now');
			console.log(temp);
			$('html,body').animate({
				scrollTop: $(tempClass[temp]).offset().top
			},900);
			return false;
		}
		if(delta == -1) {
			if(temp === 5) {
				return;
			}
			$('.right-nav ul li a').attr('class','page-scroll');
			$('.right-nav ul li a').eq(temp + 1).addClass('now');
			temp++;
			$('html,body').animate({
				scrollTop: $(tempClass[temp]).offset().top
			},900);
			if(temp == 2) {
				$('#master .master-pic .master-cover').css('left','80px');
				$('#master .master-pic .master-cover').animate({left: '710px'},1800);
			}
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

$(window).ready(function(){
	console.log('ready正在加载');
})

$(window).on("load",function(){
	console.log("所有页面已加载完");
	$('#loadAction').css('display','none');
	$('.right-nav').css('opacity','1');
	$('.navbar .container').css('opacity',1);
});