    $(".slide-group").slick({
autoplay: true, // 자동재생
autoplaySpeed: 3000, // 간격시간
dots: true, // 동그라미버튼
speed: 600, // 바뀌는시간(생략가능)
slidesToShow: 1, // 보여질슬라이드수(생략가능)
slidesToScroll: 1, // 이동슬라이드수(생략가능)
pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
cssEase: 'linear', // 속도함수(생략가능)
draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
fade: false, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
arrows: true, // 좌우화살표 사용여부(생략가능)
prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.article1 .plpa').on('click',function(){
    // .hasClass() : 클래스 유무 판단 (결과는 true 또는 false)
    var $ibutton = $(this).find('i')
    if ($ibutton.hasClass('fa-pause')) {
        $('.slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
}   else {
        $('.slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})


// .index() : 선택자의 인덱스번호를 알아냄 
$(function(){
    $('.cs_board .tabmenu > li').on('click',function(){
        $(this).addClass('active')
        .siblings().removeClass('active')
        // console.log( $(this).index() ) <- .eq안에 넣는다
        // 변수선언 var 변수명;
        // 변수에 값 저장하기 : 변수명 =값
        var num = $(this).index()
        console.log(num)
        $(this).parent().next().children()
        .eq(num).addClass('active')
        .siblings().removeClass('active')
    })
})

var ww=$(window).width()
console.log(ww)

if(ww>1024) {
    $('#nav .depth1 > li').hover(
        function(){
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
} else {
    $('#nav .depth1 > li').on('click',function(){
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    })
}

$('#header .open').on('click',function(){
    $(this).next().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
    $(this).next().next().css({
        display:'block'
    })
})

$('#header .close').on('click',function(){
    $(this).prev().css({
        display:'none'
    })
    $(this).css({
        display:'none'
    })
    $(this).prev().prev().css({
        display:'block'
    })
})