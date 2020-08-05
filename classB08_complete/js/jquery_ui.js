$(function(){
	//메인 헤더 스크롤 이벤트
	if($(".main").length){
		$(window).scroll(function(){
			if($(window).scrollTop() == 0){
				$(".header").removeClass("down");
			}else{
				$(".header").addClass("down");
			};
		});
	}

	//네비 열기
	$('.btn_nav').on('click', function(){
		$('.navi_area').addClass('on');
	})

	//네비 닫기
	$('.btn_nav').on('click', function(){
		$('.navi_area').removeClass('on');
	})

	//메인 베너 슬라이드
	$('.section.visual > ul').bxSlider({
		slideWidth: 1080,
		slideMargin : 209,
		minSlides : 1,
		maxSlides :2 ,
		moveSlides: 1,
		onSliderLoad : function(){
			slide_resize();
		}
	})

	$(window).on('resize', function(){
		slide_resize();
	})

	function slide_resize(){
		var main_slide_width = ( $('.visual').width() - $('.visual .bx-wrapper ul > li').width() ) / 2;
		$('.visual .bx-wrapper ul').css({
			'margin-left' : main_slide_width
		})
	}

	//베스트 아이템 슬라이드
	$('.section.market .slide_area ul').bxSlider({
		mode : 'fade',
		controls : false,
		auto: true,
		pause : 3000
	});

})