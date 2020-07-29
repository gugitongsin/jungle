$(function(){
    // 키보드 입력 이벤트
    $('input').on('keypress', function(e){
        // enter 키 입력 처리
        if(e.keyCode === 13 && $(this).val().length){ 
            console.log("asdf")
            var _val = $(this).val();
            var _class = $(this).attr("class");
            $(this).val(""); // 입력된 value 삭제

            $('.chat_wrap .inner').append(`
                <div class="item ${_class}">
                    <div class="box">
                        <p class="msg">${_val}</p>
                        <span class="time">${currentTimefn()}</span>
                    </div>
                </div>
            `)

            setTimeout(function(){
                $('.chat_wrap .inner .item').last().addClass('on')
                var _h = $('.chat_wrap .inner .item').height();
                var _l = $('.chat_wrap .inner .item').length;
                var _mt = $('.chat_wrap .inner .item').last().css('margin-top');
                _mt = parseInt(_mt , 10);
                //$('.chat_wrap .inner').scrollTop( _h * _l + _mt * (_l - 1));
                $('.chat_wrap .inner').stop(true).animate({
                    scrollTop : _h * _l + _mt * (_l - 1)
                }, 500)
            },10); 
        }
    })
})

//현재시간을 알아내고 값을 반환하는 함수
function currentTimefn(){
    var _date = new Date();
    var _hh = _date.getHours();
    var _mm = _date.getMinutes();
    var _apm;

    if(_hh > 12){
        _apm = "오후";
        _hh = _hh - 12;
    }else{
        _apm = "오전";
    }
    if(_hh < 10) _hh = "0" + _hh;
    if(_mm < 10) _mm = "0" + _mm;

    return _apm + " " + _hh + ":" + _mm;
}

currentTimefn();
