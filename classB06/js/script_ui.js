$(function(){
    //첫 화면 셋팅 버튼
    $(".btn_setting").on('click', function(){
        $(this).parent().hide();
        loadDataFn();
    })
    
    var completeData;   //json 데이터 담는 변수

    function loadDataFn(){
        $.ajax({
            url: "js/data.json",
            dataType: "json",
            success: function(result){
                completeData = result.seatInfo;
                settingSeatFn();
            }
        })
    }

    var selectArray = [];

    function settingSeatFn(){

        $(".section.reservation").slideDown();

        //목록 누적을 막기위한 초기화
        $(".section.reservation > ol > li").remove();

        $('.txt_info_number').text('');
        $('.txt_info_total').text(0);

        //파싱 작업
        for(var i = 0; i < completeData.length ; i++){
            $(".section.reservation > ol").append(` 
                <li class="unit">
                    <button data-price="${completeData[i].price}" ${completeData[i].reserve}>${completeData[i].name}</button>
                </li>
            `)
        }

        
        //좌석버튼 클릭이벤트
        $(".section.reservation .unit > button").click(function(){
            $(this).toggleClass('select');

            if($(this).hasClass('select')){
                selectArray.push($(this).parent().index());
            }else{
                var removeIndex = selectArray.indexOf($(this).parent().index());
                selectArray.splice(removeIndex, 1);
            }

            var name = "";
            var price = 0;

            for(var i =0;i<selectArray.length; i++){
                name += $('.section.reservation > ol > li').eq(selectArray[i]).find('button').text()+" ";
                price += $('.section.reservation > ol > li').eq(selectArray[i]).find('button').data('price');
            }

            $('.txt_info_number').text(name);
            $('.txt_info_total, .txt_price > strong').text(price);
        })

        //완료버튼 클릭이벤트
        $('.btn_submit').on('click', function(){
            if(selectArray.length > 0) {
                $('.section.reservation').hide();
                $('.section.complete').show();
                $('.txt_number').text(name);
                $('.txt_price > strong').text(price);
            }
            else{
                alert("자리를 선택해주세요!")
            }
        })

        //초기화버튼 클릭이벤트
        $('.btn_reset').on('click', function(){
            $('.section.complete').slideUp();
            $('.box_intro').slideDown();
        })
    }
})