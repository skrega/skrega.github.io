
$(function(){
	//slider start
	var rev = $('.slider__items');
	rev.on('init', function(event, slick, currentSlide) {
 	var cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
	prev.addClass('slick-sprev');
	next.addClass('slick-snext');
	cur.removeClass('slick-snext').removeClass('slick-sprev');
	slick.$prev = prev;
	slick.$next = next;
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  	console.log('beforeChange');
  	var cur = $(slick.$slides[nextSlide]);
	console.log(slick.$prev, slick.$next);
	slick.$prev.removeClass('slick-sprev');
	slick.$next.removeClass('slick-snext');
	next = cur.next(),
		prev = cur.prev();
		prev.prev();
		prev.next();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');
		slick.$prev = prev;
		slick.$next = next;
		cur.removeClass('slick-next').removeClass('slick-sprev');
	});

	rev.slick({
		speed: 1000,
		arrows: true,
		dots: true,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-arrow.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/slider-arrow.png" alt=""></button>',
		infinite: true,
		centerMode: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		swipe: true,
		customPaging: function(slider, i) {
			return '';
		},
		
	});

	

	//slider end
	//fullpage.js start

	var doFullpage = document.documentElement.clientWidth;
	if (doFullpage > 1024) {
		$('#fullpage').fullpage({
			
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
			easing: 'easeInOutCubic'
		
		});
	}

	//fullpage.js end



	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.modal-menu').toggleClass('show');
	})


	//mojs start

	var timelineOpen = new mojs.Timeline({ speed: 1.5 });
	var timelineClose = new mojs.Timeline({ speed: 2 });
	
	var _strokeWidth;
	var RADIUS = 15;
	var hamburger = document.querySelector("#hamburger-one");
	var hamburger2 = document.querySelector("#hamburger-two");
	var hamburger3 = document.querySelector("#hamburger-three");
	var hamburger4 = document.querySelector("#hamburger-fourth");
	

	
	var burst1 = new mojs.Burst({
	parent: hamburger,
	  x: "50%",
	  y: "50%",
	  angle: { 0: 90 },
	  radius: { 30: 45 },
	  count: 3,
	  children: {
		shape: "circle",
		radius: RADIUS,
		scale: { 1: 0 },
		fill: ["#F80BFD", "#F80BFD", "#F80BFD"],
		duration: 2000,
		easing: "quad.out",
		
	  }
	});
	
	var burst2 = new mojs.Burst({
	parent: hamburger,
	  x: "50%",
	  y: "50%",
	  angle: { 0: 90 },
	  radius: { 30: 45 },
	  count: 3,
	  children: {
		shape: "circle",
		radius: RADIUS,
		scale: { 0: 1 },
		strokeWidth: { 1: 3 },
		opacity: { 1: 0 },
		fill: "transparent",
		stroke: ["#F80BFD", "#F80BFD", "#F80BFD"],
		duration: 2000,
		easing: "quad.out"
	  }
	});
	var burst3 = new mojs.Burst({
		parent: hamburger2,
		x: "50%",
		y: "50%",
		angle: { 0: 90 },
		radius: { 30: 45 },
		count: 3,
		children: {
		  shape: "circle",
		  radius: RADIUS,
		  scale: { 1: 0 },
		  fill: ["#F80BFD", "#F80BFD", "#F80BFD"],
		  duration: 2000,
		  easing: "quad.out",
		  
		}
	  });
	  var burst4 = new mojs.Burst({
		parent: hamburger2,
		x: "50%",
		y: "50%",
		angle: { 0: 90 },
		radius: { 30: 45 },
		count: 3,
		children: {
		  shape: "circle",
		  radius: RADIUS,
		  scale: { 0: 1 },
		  strokeWidth: { 1: 3 },
		  opacity: { 1: 0 },
		  fill: "transparent",
		  stroke: ["#F80BFD", "#F80BFD", "#F80BFD"],
		  duration: 2000,
		  easing: "quad.out"
		}
	  });
	var burst5 = new mojs.Burst({
	parent: hamburger3,
	x: "50%",
	y: "50%",
	angle: { 0: 90 },
	radius: { 30: 45 },
	count: 3,
	children: {
		shape: "circle",
		radius: RADIUS,
		scale: { 1: 0 },
		fill: ["#F80BFD", "#F80BFD", "#F80BFD"],
		duration: 2000,
		easing: "quad.out",
		
	}
	});
	var burst6 = new mojs.Burst({
	parent: hamburger3,
	x: "50%",
	y: "50%",
	angle: { 0: 90 },
	radius: { 30: 45 },
	count: 3,
	children: {
		shape: "circle",
		radius: RADIUS,
		scale: { 0: 1 },
		strokeWidth: { 1: 3 },
		opacity: { 1: 0 },
		fill: "transparent",
		stroke: ["#F80BFD", "#F80BFD", "#F80BFD"],
		duration: 2000,
		easing: "quad.out"
	}
	});
	var burst7 = new mojs.Burst({
		parent: hamburger4,
		x: "50%",
		y: "50%",
		angle: { 0: 90 },
		radius: { 30: 45 },
		count: 3,
		children: {
			shape: "circle",
			radius: RADIUS,
			scale: { 1: 0 },
			fill: ["#F80BFD", "#F80BFD", "#F80BFD"],
			duration: 2000,
			easing: "quad.out",
			
		}
	});
		var burst8 = new mojs.Burst({
		parent: hamburger4,
		x: "50%",
		y: "50%",
		angle: { 0: 90 },
		radius: { 30: 45 },
		count: 3,
		children: {
			shape: "circle",
			radius: RADIUS,
			scale: { 0: 1 },
			strokeWidth: { 1: 3 },
			opacity: { 1: 0 },
			fill: "transparent",
			stroke: ["#F80BFD", "#F80BFD", "#F80BFD"],
			duration: 2000,
			easing: "quad.out"
		}
	});

	
	// OPEN
	var openBackground = new mojs.Shape({
		fill: "#111820",
		scale: { 0: 0},
		backwardEasing: "ease.out",
		duration: 2000
	});
	
	burst1.el.style.zIndex = 2;
	burst3.el.style.zIndex = 2;
	burst5.el.style.zIndex = 2;
	burst7.el.style.zIndex = 2;
	
	
	
	timelineOpen.add(burst1, burst2);
	timelineOpen.add(burst3, burst4);
	timelineOpen.add(burst5, burst6);
	timelineOpen.add(burst7, burst8);
	
	timelineClose.add(openBackground);
	
	//click on the hamburger
	hamburger.addEventListener("click", function(e) {
		timelineOpen.play();	
		burst1.replay();
		burst2.replay();
	});
	hamburger2.addEventListener("click", function(e) {
		timelineOpen.play();	
		burst3.replay();
		burst4.replay();
	});
	hamburger3.addEventListener("click", function(e) {
		timelineOpen.play();	
		burst5.replay();
		burst6.replay();
	});
	hamburger4.addEventListener("click", function(e) {
		timelineOpen.play();	
		burst7.replay();
		burst8.replay();
	});

	

	
	//mojs end

});

$(function(){
	//slider item-page start
	$('.items').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrow: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-arrow.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="images/slider-arrow.png" alt=""></button>',
		fade: true,
  		cssEase: 'linear'
	});
	//slider item-page end
});

