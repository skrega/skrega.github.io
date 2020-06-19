
$(function(){

	$('.menu-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.modal-menu').toggleClass('show');
	})
	
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: '2',
		loop: true,
		coverflowEffect: {
		  rotate: 0,
		  stretch: 0,
		  depth: 500,
		  modifier: 1,
		  slideShadows : false,
		},
		pagination: {
		  el: '.swiper-pagination',
		  	clickable: true,
		},
		
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1150: {
			  slidesPerView: 2,
			  spaceBetween: 20
			},
			// 320: {
			// 	slidesPerView: 0,
			// 	cleanStyles: true
			// },
			
		}
		
	  })
	

	//slick slider

	$('.slider-team').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next">next</button>'
	});

	//slick slider
	//fullpage.js start

	var doFullpage = document.documentElement.clientWidth;
	if (doFullpage > 1024) {
		$('#fullpage').fullpage({
			
			anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
			easing: 'easeInOutCubic',
			resetSliders: true,
			scrollOverflow: true
		
		});
	}

	//fullpage.js end



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


