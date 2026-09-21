// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//1.---------------------------변수
const $viewBtn = $('#view_mode_btn');
let modeCount = 1; // 1 == 라이트 모드, 0 == 다크 모드

console.log($viewBtn.children('img'));
//2.---------------------------함수
//3.---------------------------이벤트
$viewBtn.on('click', function(){
    // 메인 클래스 on/off 적용하기
    $('main').toggleClass('darkmode');

    // 조건문 값 준비
    // !true == false , !"" == true
    modeCount = !modeCount; // 모드 값 변경
    console.log(modeCount); // 모드 값 테스트

    // 삼항조건연산자 활용
    // 조건 ? 참일 때 결과 : 거짓일 때 결과;
    modeCount == 0 ? // modeCount가 0과 같으면?(0 == 다크모드)
        $viewBtn.children('img').attr('src','https://cdn-icons-png.flaticon.com/128/17406/17406104.png')
        : $viewBtn.children('img').attr('src','https://cdn-icons-png.flaticon.com/128/439/439842.png');

    // 다크모드 진행 시 달/해 이미지 변경
    // $viewBtn.children('img').attr('src','https://cdn-icons-png.flaticon.com/128/17406/17406104.png');
})

// -------------- 자주하는 질문
const $q = $('.qa .question');

$q.on('click', function(){
    // nextSiblings, previouSiblings
    // 활성화 클래스 전부 제거 -> 클릭 대상에만 적용
    $q.removeClass('active');
    $(this).toggleClass('active');

    // 전부 숨기고 -> 누른 대상 형제만 보이기
    // $q.next().hide();
    // $(this).next().show();

    // 나오고 들어갈 때 애니메이션 주기
    $q.next().stop().slideUp(200);
    $(this).next().stop().slideDown(300);
})