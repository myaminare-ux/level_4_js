/* student/login_js */
// 목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
// 1. 비회원(비활성화) 내용 초반 숨기기
// 2. 각 탭 제목 클릭 시
// 3. 기존회원 클릭 -> 기존회원 내용 보이기 / 비회원 내용 숨기기
// 3. 비회원 클릭 -> 기존회원 내용 숨기기 / 비회원 내용 보이기
const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTanContent = document.querySelectorAll('#login-frm .contents > ul');

console.log(loginTabTitle, loginTanContent);
loginTanContent[1].classList.add('display-hide'); // 초기 숨기기

// 비회원 주문 조회 클릭 시(초기 모습과 반대되는 상황 먼저 테스트)
loginTabTitle[0].addEventListener('click',()=>{ loginTabFunc(0); })
loginTabTitle[1].addEventListener('click',()=>{ loginTabFunc(1); })
// loginTabTitle[0].addEventListener('click',()=>{
    //0(숨기기), 1(보이기) == X
    // 0, 1(모두 숨기기), 1(보이기) == O -> 처음에는 다 숨기고 나중에 보고 싶은 것만 보이기
    // loginTanContent[0].classList.add('display-hide'); // 모두 숨기기
    // loginTanContent[1].classList.add('display-hide'); // 모두 숨기기
    // loginTanContent[0].classList.remove('display-hide'); // 클릭 대상과 일치하는 대상만 보이기
// })

// 반복 함수 별도 생성(함수 안에 달라지는 건 매개 변수로 미리 지정)
function loginTabFunc (index){
    loginTanContent[0].classList.add('display-hide'); // 모두 숨기기
    loginTanContent[1].classList.add('display-hide'); // 모두 숨기기
    loginTanContent[index].classList.remove('display-hide'); // 클릭 대상과 일치하는 대상만 보이기
    loginTabTitle[0].classList.remove('active'); // 모두 비활성화
    loginTabTitle[1].classList.remove('active'); // 모두 비활성화
    loginTabTitle[index].classList.add('active'); // 클릭한 대상만 활성화
    // return
}

// 목표2) 기존회원 -아이디 입력 안하고 기존 회원 로그인 버튼 클릭 시 '아이디를 입력하세요' 경고창 출력
const userId = document.querySelector('#user-id');
const usrePw = document.querySelector('#user-pw');
const mamberLoginBtn = document.querySelector('#member-login');
const nonUserId = document.querySelector('#non-user-id');
const nonUserOrder = document.querySelector('#non-user-order');
const nonUserPw = document.querySelector('#non-user-pw');
const nonMemberLogin = document.querySelector('#non-member-login');

console.log(userId,mamberLoginBtn, nonUserId, nonUserPw, nonMemberLogin);

mamberLoginBtn.addEventListener('click',()=>{
    btnClick(userId, '아이디')
    btnClick(usrePw, '비밀번호')
})

nonMemberLogin.addEventListener('click',()=>{
    btnClick(nonUserId, '주문자명')
    btnClick(nonUserOrder, '주문번호')
    btnClick(nonUserPw, '비회원 주문 비밀번호')
})

function btnClick(dom, str){
    if(dom.value == ''){alert(`${str}를(을) 입력하세요`);}
}