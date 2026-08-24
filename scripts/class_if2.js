/* class_if2.js */
// css 속성을 1~2개 일회성으로 사용 시
// 객체.style.속성 = '값';
// css 2개 이상의 속성을 반복 사용으로 사용 시
// css 파일에서 별도의 클래스 준비 -> 불러오기
// 객체.classList.함수('적용할 클래스명')
// 함수 종류 : add, remove, toggle, replace

const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id')
console.log(pTag, btn1, userIdInput);

btn1.addEventListener('click', ()=>{
    // 아이디 입력 안하고 버튼 클릭 시 -> 아이디 입력 오류 출력
    // 아이디 입력하고 버튼 클릭 시 -> 결과 없음
    // 조건식) 아이디(입력값)를 입력했는가? 참/거짓
    console.log(userIdInput.value); // 값 테스트
    console.log(Boolean(userIdInput.value)); // 논리 테스트
    if(userIdInput.value == ''){ // 조건이 참일 때 실행결과
        pTag.classList.add('error');
        pTag.innerHTML = '<em>아이디</em>를 입력하세요.';
    }else{
        pTag.classList.add('error');
        pTag.innerHTML = '<em>로그인</em> 성공하셨습니다.';
    }
    // if(userIdInput.value != ''){
    // if(Boolean(userIdInput.value)){
    //     pTag.classList.remove('error');
    //     pTag.innerHTML = '<em>로그인</em> 성공하셨습니다.';
    // } 위와 별개로 움직임
    // pTag.classList.add('error');
    // pTag.textContent = '<em>로그인</em>이 실패했습니다.';
    // pTag.innerHTML = '<em>로그인</em>이 실패했습니다.';
    // pTag.classList.toggle('error'); // 사용하는 목적에 따라서 적절히 활용되게 해야함
})