// 웹 디자인 개발 기능사
// 자바스크립트 ver

// 네비게이션
// const popup = document.querySelector('#popup');
// console.log(popup);
// popup.style.display = 'none';

// const nav = document.querySelectorAll('nav > ul > li');
// const sub = document.querySelectorAll('nav > ul > li > ul');
// const subLi = document.querySelectorAll('nav > ul > li > ul > li');
// console.log(sub, nav);
// for(let s of sub){ // 서브 모두 숨기기(초기값)
//     s.style.height = '0';
//     s.style.overflow = 'hidden';
//     s.style.transition = 'height 0.4s';
// }

// // li에 개별로 색 부여/제거
// for(let sl of subLi){
//     sl.addEventListener('mouseover', ()=>{
//         sl.children[0].style.backgroundColor = 'pink';
//     })
//     sl.addEventListener('mouseout', ()=>{
//         sl.children[0].style.background = 'none';
//     })
// }

// for(let n of nav){ // 메인 메뉴
//     n.addEventListener('mouseover', ()=>{
//         n.style.backgroundColor = 'yellow';
//         console.log(n.children[1]); // 서브 ul 출력 확인
//         n.children[1].style.height = '200px';
//     })
//     n.addEventListener('mouseout', ()=>{
//         n.style.background = 'none'; // color는 색을 부여하는 거기 때문에 제거하는 none은 색이 아니므로 background에 none을 해야함
//         n.children[1].style.height = '0';
//     })
// }

// // 공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기기
// const notice = document.querySelector('.notice li:nth-child(1)');
// const close = popup.querySelector('.close');
// console.log(notice, close);
// notice.addEventListener('click', ()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '999'; // css 파일에 입력해도 ok
// });
// close.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// });

// // 공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tabTitle = document.querySelectorAll('.notice_gallery .title a');
// const tabContent = document.querySelectorAll('.notice_gallery .contents > *');
// console.log(tabTitle, tabContent);
// tabTitle.forEach((t, i)=>{
//     t.addEventListener('click',()=>{
//         for(let reset of tabContent) reset.style.display = 'none';
//         tabContent[i].style.display = 'flex';
//         for(let reset of tabTitle) reset.classList.remove('active');
//         t.classList.add('active');
//     });
// })

// // 히어로 배너 상<->하 슬라이드 구조(swiper X)
// const heroWrap = document.querySelector('.hero_wrapper');
// const heroSlide = document.querySelectorAll('.hero_slide'); // 모든 슬라이드 개수 세기 용
// console.log(heroWrap);
// // heroWrap.style.transform = 'translateY(-600px)'; // test

// let count = 0; // 초기값 0으로 시작해서 heroSlide의 개수만큼 증가
// heroWrap.style.transition = 'transform 0.6s';

// const slideTimer = setInterval(()=>{
//     count++; // 3초마다 1증가
//     // if(count > 2){count = 0} // 카운트가 3이 되었을 때 카운트에 0에 대입해서 다시 300을 곱하게 반복
//     if(count > heroSlide.length-1){count = 0} // 슬라이드의 개수에 따라
//     // console.log(count*300);
//     heroWrap.style.transform = `translateY(-${count*300}px)`;
// },3000)



// 제이쿼리 ver
console.log(typeof $); //function ==> 제이쿼리가 잘 연결되었는지 타입 확인용 (필수 X)

// 자바스크립트에서는 THML 작업 시 변수 저장 작업 필수!
// 제이쿼리는 변수 구조가 워낙 짧아 2~3번 이상 자주 반복하는 변수만 지정하고 그 외는 일회성으로 사용 가능

//const popup = document.querySelector('#popup');, popup.style.display = 'none'; 와 뜻이 같은 제이쿼리
$('#popup').hide();

// 자바스크립트와 제이쿼리 변수가 헷갈리면 제이쿼리 변수명 앞에 $ 써서 구분하기
const $nav = $('nav > ul > li');
const $sub = $('nav > ul > li > ul');
// sub.hide(); // 제이쿼리는 대상이 2개 이상이어도 for 없이 한 번에 다수 처리가 가능하다

// 자바스크립트에서 css 사용법 : 객체.style.속성 = '값';
// 제이쿼리 css 사용법 : 객체.css('속성','값');
// $sub.css('height', '0') // css() 함수 2개 이상 연결 = 체이닝
    // .css('overflow', 'hidden')
    // .css('transition', 'heught 0.4s');

$sub.slideUp();

// 제이쿼리 사용 시 화살표 함수 사용 권장하지 않음. 일반 함수 위주로 사용
$nav.on('mouseover', function(){
    // $(this) == 현재 마우스 오버한 대상
    $(this).css('background-color', 'aqua');
    $(this).children('ul').stop().slideDown();
})
$nav.on('mouseout', function(){
    // $(this) == 현재 마우스 오버한 대상
    $(this).css('background-color', 'aqua');
    $(this).children('ul').stop().slideUp();
})
$nav.on('mouseout', function(){
    // $(this) == 현재 마우스 오버한 대상
    $(this).css('background', 'none');
})

const $notice = $('.notice li:nth-child(1)');

$notice.on('click', function(){
    $('#popup').show();
})
$('#popup .close').on('click', function(){
    $('#popup').hide();
})

// 탭 제목 활성화
$('.notice_gallery .title a').on('click', function(){
    $('.notice_gallery .title a').removeClass('active');
    $(this).addClass('active');

    let $i = $(this).index(); // 현재 클릭 한 인덱스 변수 저장

    $('.notice_gallery .contents > *').hide(); // 모든 내용 숨기기
    // $('.notice_gallery .contents > *').eq(i).show();
    $('.notice_gallery .contents > *').eq($i).css('display', 'flex');
    // eq == 몇번째 인덱스에 해당하는 요소인지 세는 제이쿼리 함수
})

// 제이쿼리 ver 슬라이드
let count = 0; // 초기값 0으로 시작해서 heroSlide의 개수만큼 증가

const slideTimer = setInterval(function(){
    count++;
    if(count > 2){count = 0}
    // $('.hero_wrapper').css('transform', 'translateY(-'+(count*300)+'px)');
    // $('.hero_wrapper').css('transform', 'translateY(-'+(count*300)+'px)');
    // 기존 js, css 에서 주로 다루는 transition 0.4s + transform 애니메이션 묶음 전용 제이쿼리 함수
    $('.hero_wrapper').animate({
        top:-(count*300)+'px',
    },400)
},3000)