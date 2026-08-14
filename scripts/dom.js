/* dom.js */

// 복습) 함수, 매개변수, 리턴
// 더하기, 빼기 계산기
function calcFunc(n1, n2, oper='+'){ // 연산자 기호는 문자로 취급
    let num1 = n1; // 원래 10 있던 자리 -> 매개 변수 대입하면 함수를 부를 때 원하는 값을 쓰면 그 값으로 계산함
    let num2 = n2;
    // 삼항 조건 = 조건 ? 참 : 거짓
    return oper == '+' ? num1+num2 : num1-num2; // = 한번 쓰면 대입, == 두번 쓰면 같냐 아니냐(전달되는 연산자는 콘솔로 실행한 캘크뻔의 매개변수)
    // 리턴만 쓰면 밑의 내용이 전부 없는 것이 되어버림
    let total = num1 + num2;
    return total; // 함수를 부를 때 토탈 값을 실행해주겠다.
}
console.log(calcFunc(3, 5));
console.log(calcFunc(3, 5, '-'));

// 할인율 계산기 (사용자가 입력하는 가격은 다르고, 할인은 고정)
// 계산법) 
// (100 - 5) / 100 = 0.95
// 판매가 * 0.95 = 할인 판매가
// 판매가 * 0.95 = 5% 할인가
// 판매가 * 0.9 = 10% 할인가
// 판매가 * 0.8 = 20% 할인가
// 판매가 * 0.5 = 50% 할인가
function discountFunc(price){
    const discount5 = (price * 0.95).toLocaleString('ko-kr');
    const discount10 = (price * 0.9).toLocaleString('ko-kr');
    const discount20 = (price * 0.8).toLocaleString('ko-kr');
    const discount30 = (price * 0.7).toLocaleString('ko-kr');
    const discount40 = (price * 0.6).toLocaleString('ko-kr');
    const discount50 = (price * 0.5).toLocaleString('ko-kr');
    return `사용자 입력가격 : ${price.toLocaleString('ko-kr')}원 기준
        5% 할인가 : ${discount5}원,
        10% 할인가 : ${discount10}원,
        20% 할인가 : ${discount20}원,
        30% 할인가 : ${discount30}원,
        40% 할인가 : ${discount40}원,
        50% 할인가 : ${discount50}원,`
}
console.log(discountFunc(54000));

// 1. 익명함수
const btn1 = document.querySelector('#btn1');
// 버튼 클릭 시 버튼 색상 변경(일회성)
// 이벤트 함수 내에 이름없이 만드는 일회성 함수
/* btn1.addEventListener('click', function(){
    btn1.style.color = 'red';
}) */
btn1.addEventListener('click', ()=>{ // 화살표 함수
    btn1.style.color = 'red';
})

// 일반 반복 함수 (생성된 위치 위/아래 어디든 호출 가능)
func1() // ok -> 위에서도 사용할 수 있기 때문에 어디서 덮어썼는지 등을 알기 어려워서 난이도가 상승함
function func1(){
    return console.log('일반 함수 테스트');
}
func1() // ok

// 이벤트 밖에서 사용하는 익명성수의 또다른 예
// 변수 안에서 익명함수 생성
// func2();
const func2 = function(){
    return console.log('일반 함수 테스트');
} // 이 함수 기준으로 아래만 호출 가능
func2();

const func3 = ()=>{
    return console.log('일반 함수 테스트');
}
func3();

// 2. 콜백함수 (함수 안 또다른 함수 호출)
function orderCoffee(callback){
    return console.log('SNS 이벤트 무료 커피 나왔습니다.');
}
function sns(){
    return console.log('SNS 후기 업로드 완료');
}
orderCoffee(sns); // sns는 orderCoffe의 조건으로 들어가야 함

// 3. data-* 속성 (data는 고정이고 * 부분에는 무엇이든 들어올 수 있음)
const cart_buy_div = document.querySelector('.cart_buy');
// HTML data-* 속성은 자바스크립트에서 dataset.* 로 읽을 수 있음
let dataResult = cart_buy_div.dataset.name;
console.log(`dataResult 값은 ${dataResult}`);

// 3-1. 수량 증감 data-* 속성 활용
const countNumSpan = document.querySelector('.count_num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
console.log(countNumSpan.dataset.count); // 변수명.데이터셋.데이터이름

// 위 span 변수에 초기값 1 대입
countNumSpan.textContent = countNumSpan.dataset.count; // 1이 저장된 이름을 작성하기

// +를 클릭하면 span 값이 1씩 증가(익명함수 활용)
plusBtn.addEventListener('click', ()=>{
    console.log(typeof(countNumSpan.dataset.count)); // 문자로 인식, 계산 불가
    let currentNum = Number(countNumSpan.dataset.count); // 문자를 숫자로 변환해서 저장
    console.log(currentNum, typeof(currentNum)); // 숫자로 변경된 점 확인
    // 심항 조건 연산자 활용 (수량이 20 이하일 때만 증가)
    currentNum < 20 ? (()=>{
        let plusTotal = ++currentNum; // 숫자로 변환한 변수를 1 증가해서 담은 증가 변수
        countNumSpan.dataset.count = plusTotal; // 증가된 변수를 해당 data 속성에 업데이트
        countNumSpan.textContent = plusTotal; // 증가된 변수를 사용자가 보는 화면에 출력
    })() : alert('최대 주문 수량입니다.');
})

// -를 클릭하면 span 값이 1씩 감소(익명함수 활용)
minusBtn.addEventListener('click', ()=>{
    let currentNum = Number(countNumSpan.dataset.count);
    console.log(currentNum, typeof(currentNum));
    // 심항 조건 연산자 활용 (수량이 1 이상일 때만 감소)
    currentNum > 1 ? (()=>{
        let minusTotal = --currentNum;
        countNumSpan.dataset.count = minusTotal;
        // countNumSpan.textContent = countNumSpan.dataset.count; -> 이것도 가능. 이미 업데이트를 해서 적용이 됨.
        countNumSpan.textContent = minusTotal;
    })() : alert('최소 주문 수량입니다.');
})

// 변수 목적 정리
// countNumSpan : 수량 표시되는 span 태그
// plusBtn : + 버튼 변수
// currentNum : countNumSpan의 data 속성을 숫자로 변환한 변수