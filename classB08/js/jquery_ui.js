$(function(){
	// href="#" 처리
	$(document).on('click', 'a[href="#"]' , function(e){
		e.preventDefault();
	})
	//메인 헤더 스크롤 이벤트
	if( $('.main').length ){
		$(window).on('scroll', function(){
			if($(window).scrollTop() === 0){
				$(".header").removeClass("down");
			}else{
				$(".header").addClass("down");
			}
		})

	}
	//네비 열기
	

	//네비 닫기


	//메인 베너 슬라이드
	  

	//베스트 아이템 슬라이드
		

})