$(document).ready(function() {
    
    let count = 0;

    setInterval(function() {
        count++;

        $(".train").css("transition", "all 1s ease 0s");
        $(".train").css("transform", "translateX(-" + (25 * count) + "%)");

        if (count === 3) {
            setTimeout(function() {
                $(".train").css("transition", "none");
              
                $(".train").css("transform", "translateX(0%)");
               
                count = 0;
            }, 1000);
        }

    }, 4500);

    $('.tab-button').on('click', function() {
    
    let $section = $(this).closest('.content-section');
    // closet: 부모 쪽으로 올라가면서 '.content-section'를 탐색해라
    // -> 섹션 전체 선택
    
    let targetId = $(this).data('tab');
    // 클릭한 버튼의 데이터값 가져옴

    $section.find('.tab-button').removeClass('active');
    $section.find('.tab-content').removeClass('active');

    $(this).addClass('active');
    $section.find('#' + targetId).addClass('active');
    // #+찾은데이터값
});


});

