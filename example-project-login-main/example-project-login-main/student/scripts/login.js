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
// 기존 회원 아이디, 비밀번호, 로그인 버튼 변수
const userId = document.querySelector('#user-id');
const usrePw = document.querySelector('#user-pw');
const mamberLoginBtn = document.querySelector('#member-login');
const pwVisibleBtn = document.querySelector('#member-pw-visible');

// 비회원 - 주문자명, 주문번호, 비회용 주문비밀번호, 주문조회 버튼 변수
const nonUserId = document.querySelector('#non-user-id');
const nonUserOrder = document.querySelector('#non-user-order');
const nonUserPw = document.querySelector('#non-user-pw');
const nonMemberLogin = document.querySelector('#non-member-login');
const nonPwVisbleBtn = document.querySelector('#non-member-pw-visible');

console.log(userId, mamberLoginBtn, nonUserId, nonUserPw, nonMemberLogin, nonUserOrder, pwVisibleBtn, nonPwVisbleBtn);

/* mamberLoginBtn.addEventListener('click',()=>{
    btnClick(userId, '아이디')
    btnClick(usrePw, '비밀번호')
}) */

/* nonMemberLogin.addEventListener('click',()=>{
    btnClick(nonUserId, '주문자명')
    btnClick(nonUserOrder, '주문번호')
    btnClick(nonUserPw, '비회원 주문 비밀번호')
}) */

function btnClick(dom, str){
    if(dom.value == ''){alert(`${str}를(을) 입력하세요`);}
}

// 기존 회원) 논리 연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트 + 함수
mamberLoginBtn.addEventListener('click',()=>{
    // 목표1) 아이디, 비밀번호 중 하나라도 안 적으면 'OOO을 입력하세요'
    // 블록{} 안에는 참이어야 들어갈 수 있음 거짓이라면 {} 밖으로 나감
    // if(userId.value == '' && usrePw.value == ''){}
    if(userId.value == '' || usrePw.value == ''){
        if(userId.value == '' && usrePw.value == ''){
            alert('아이디와 비밀번호를 입력하세요');
        }else if(userId.value == ''){ // else 뒤에 if를 붙이면 두번째 조건식 만들기 가능(한 세트 기준으로 else 하나만 쓸 수 있음)
        // 하나의 조건 세트에서 두번째 조건식이 필요할 때(2개 이상 작성 가능)
            alert('아이디를 입력하세요'); // 첫번째 조건으로 잡았으므로 둘 다 안 적으면 아이디 입력 창이 출력됨
        }else{ // 조건 세트 안에 거짓을 처리할 때(마지막에 한번만 작성 가능)
            alert('비밀번호를 입력하세요');
        }
    }
    // 목표2) 아이디, 비밀번호를 모두 적으면 'OOO님 환영면니다'
    // 반전 -> 빈 문자열이 아니면 참
    /* if(userId.value != '' && usrePw.value != ''){
        alert(`${userId.value}님 환영합니다`);
    } */
    // 삼항조건 ? 참 : 거짓; // 조건식 1개로 처리하는 if-else를 간편하게 쓰고 싶을 때
    userId.value != '' && usrePw.value != '' ?
        alert(`${userId.value}님 환영합니다`) : undefined;
})

// 비회원 이벤트-함수
// 목표1) 주문자명, 주문번호 비회원 주문비번을 모두 썼을 때 "OOO님 주문은 배송중입니다." 
nonMemberLogin.addEventListener('click',()=>{
    // 목표2) 주문자명, 주문번호, 비회용 주문 비번 중 하나라도 안 썼을 때 상황
    if(nonUserId.value == '' || nonUserOrder.value == '' || nonUserPw.value == ''){
        if(nonUserId.value == '' && nonUserOrder.value == '' && nonUserPw.value == ''){
            alert('주문자명, 주문번호, 주문비밀번호를 입력하세요');
        }else if(nonUserId.value == ''){
            alert('주문자명을 입력하세요');
        }else if(nonUserOrder.value == ''){
            alert('주문번호를 입력하세요');
        }else{
            alert('비회원 주문 비밀번호를 입력하세요');
        }
    }
    /* if(nonUserId.value != '' && nonUserOrder.value != '' && nonUserPw.value != ''){
        alert(`${nonUserId.value}님 주문은 배송중입니다`);
    } */
    nonUserId.value != '' && nonUserOrder.value != '' && nonUserPw.value != '' ? alert(`${nonUserId.value}님 주문은 배송중입니다`) : undefined;
})

// 기존 회원) 눈 아이콘 클릭 시 비밀번호 보이기 / 다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; // 비번 숨김 상태(●●●●●●) 초기값
pwVisibleBtn.addEventListener('click',()=>{
    pwVisibleStatus == 0 ? usrePw.type = 'text' : usrePw.type = 'password';
    pwVisibleStatus = !pwVisibleStatus;
})

// 비회원)
let nonPwVisibleStatus = 0; // 초기 숨긴 상태
nonPwVisbleBtn.addEventListener('click',()=>{
    nonPwVisibleStatus == 0? nonUserPw.type = 'text' : nonUserPw.type = 'password';
    nonPwVisibleStatus = !nonPwVisibleStatus;
})