/* index.js */
// 1. 데스크탑 네비 복제 -> 모바일 네비 위치에 붙여넣기
// 변수 생성 -> 복제 대상 정하고 복제 -> 붙여넣기 대상 정하고 붙여넣기
const full_nav = document.querySelector('.full_nav .menu'); // 복제 대상
const m_nav = document.querySelector('#m_nav'); // 붙여넣기 위치

console.log(full_nav, m_nav);
const cloneMenu = full_nav.cloneNode(true); // 복제 실행
m_nav.appendChild(cloneMenu); // 붙여넣기 적용

// 2. 모바일 메뉴(햄버거) 클릭 시 모바일 배경 + 모바일 메뉴 출력하기
const m_nav_btn = document.querySelector('#m_nav_btn'); // 클릭 대상
const m_nav_bg = document.querySelector('.m_nav_bg'); // 나오는 제일 바깥쪽 부모 대상
console.log(m_nav_btn, m_nav_bg);

// 안보인다 0 컴퓨터가 이해하는 언어로 초기값 설정
let menu_visible = 0; // 안보이는 초기값(상태 변수) 설정

m_nav_btn.addEventListener('click', ()=>{
    // 기존 css에서 어떤 속성으로 숨겨져 있었는지에 따라 반대되는 값 작성하기
    // 기존 display:none; -> 변경 display:block or flex;
    // 기존 opaacity:0; -> 변경 opaacity:1;
    // m_nav_bg.style.right = '0';
    // m_nav_bg.style.opacity = '1';
    // 클릭 이벤트의 동작이 1개다 == (위 명령어로 끝)
    // 클릭 이벤트의 동작이 2개 이상이다 == (조건에 따른 함수 실행으로 코드 업그레이드)
    // 보인다 or 안 보인다 라는 뜻은 조건으로 불가능 -> 컴퓨터가 이해하는 언어 0, 1로 변경해야 함
    menu_visible = !menu_visible; // 클릭 이벤트가 실행될 때마다 상태 변수값 반전
    console.log(menu_visible); // 반전되는 값 확인
    // 메뉴의 보이는 상태(menu_visible)가 0(안 보이는) 값이면 어떻게 할 것인가?
    // 안 보인다(참) -> right:0;, opacity:1;
    // 보인다(거짓) -> right:-100;, opacity:0;
    menu_visible == 0 ? (()=>{
        // 안 보인다(참) -> right:0;, opacity:1;
        m_nav_bg.style.right = '0';
        m_nav_bg.style.opacity = '1';
    })() : (()=>{
        // 보인다(거짓) -> right:-100;, opacity:0;
        m_nav_bg.style.right = '-100';
        m_nav_bg.style.opacity = '0';
    })();
});