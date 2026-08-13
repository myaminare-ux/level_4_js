/* function.js */
// 1. 내장 함수
// alert('이 사이트는 포토폴리오용 사이트입니다.');
// const q1 = prompt('1+1=?');
// alert('사용자가 입력한 답은'+q1+'입니다.'); // 사용자가 입력한 답은 ? 입니다.
// print(); // 변수 필요 없음
const printBtn = document.querySelector('#print_btn');
// v1. 사용자 정의 함수를 이벤트 함수 내에서 호출한 방식 (2개 이상 반복일 경우)
// printBtn.addEventListener('click', printFunc);

// v2. 이벤트 함수(addEventListener()) 내에서 직접 사용자 함수를 만드는 방식 (반복 안 될때)
// 이벤트의 객체가 정해진 상태로 하기 때문에 내부 내장 함수에는 함수명을 따로 작성 안 함.
// printBtn.addEventListener('click', function(){ print(); });

// v3. 내장 함수에 함수명이 안들어가는데 function 키워드를 써야하는지 의문으로 생긴 새로운 함수
// 화살표 함수 ()=>{} (2번 이상 반복되지 않을 때)
printBtn.addEventListener('click', ()=>{ print(); });

const num1 = Math.random(); // 0과 1 사이에 랜덤한 숫자 생성
const num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1);
console.log(num2);

// 변수 생성 = 함수1(함수2()); -> 함수2부터 처리 > 함수1 처리 > 변수 대입
// const num3 = Number(prompt('NCS 시험 전수는? 0~100점 사이로 숫자만 입력해주세요.'));
// console.log(num3);
// console.log(typeof(num3)); // 데이터 타입 확인 함수

// 2. 사용자 정의 함수
// 함수만 단독으로 쓸 때
function printFunc(){print();}

// 3. 함수 스코프, 변수 범위
let b = 20; // 전역
let c = 30; // 전역

function test(){
    let a = 10; // 함수 내부에서 선언된 지역 변수
    return console.log(a+b); // ok
}
test();
// console.log(a); // error
console.log(b+c); // ok

// 4. 함수의 매개변수
// 반복되는 함수 내에 달라지는 매개값이 있을 때 사용
// 동화 : 헨젤과 그레텔이 집을 찾아오는 반복 방법
function story1(boy='헨젤', girl='그레텔', mapData){ // 함수 생성(매개 변수 생성)
    // 매개 변수에 원하는 값을 적으면 그게 기본값이 됨
    let person = [boy, girl];
    let result = person[0]+'과(와) '+person[1]+'이 '+mapData+'을(를) 따라 집을 찾아갔습니다.';
    // 헨젤과(와) 그레텔이 조약돌을 이용해 집을 찾아갔습니다.
    return console.log(result);
}
story1('봄','여름','조약돌'); // 함수 호출(매개변수 값 대입)
// 빵 부스러기를 3번째에 넣고 싶으면 정의되지 않음(undefined) 적기 -> 이름은 기본값이 있으니 헨젤과 그레텔로 나오고, 집 가는 방법(3번째)에 빵 부스러기가 나옴
story1(undefined, undefined, '빵 부스러기'); // 함수 호출(매개변수 값 대입)

// 동화2. story2 함수 생성, 매개 변수 달라지는 데이터 기준으로 추가 생성(이름은 자유)
// 나무꾼은 금도끼를 잃어버렸습니다.
// 나무꾼은 은도끼를 잃어버렸습니다.
function story2(main='나무꾼', tool='금', result='잃어버렸'){
    let person2 = main;
    // let axe = ['금도끼', '은도끼'];
    let result2 = main+'은(는) '+tool+'도끼를 '+result+'습니다.';
    return console.log(result2);
}
story2(); // 매개변수 아무것도 안 적었을 때 모두 기본값
story2('으닝', undefined, undefined); // 뒤의 매개변수 정의 안되서 기본값, 앞 문자만 매개변수 대입
story2('으닝'); // 앞 매개변수 문자대입, 뒤 매개변수 안 적어서 기본값 처리
story2('초이', '황금', '찾았');

// 카페 키오스크
// 아이스 아메리카노 1잔 주문 완료
// function 간편 버전 => 주로 이벤트 내에서 사용 가능
// ''+변수+'' 간편 버전 -> `문자${변수}` 템플릿 문자열
function cafeKiosk(menu, number=1){
    const order = `${menu} ${number}잔 주문 완료`;
    return console.log(order);
}
cafeKiosk('아이스 아메리카노');
cafeKiosk('바닐라 라떼',2);

// ICE, HOT, 메뉴, 메뉴 개수까지 선택 가능한 함수 만들기
// 출력 예) ICE 카페라떼 2잔 주문 완료
// 출력 예) HOT 카페라떼 1잔 주문 완료
function cafeKiosk2(tem, me, number=1){
    const temperature = ['ICE', 'HOT'];
    const menu = ['아이스 아메리카노', '카페라떼', '녹차라떼', '초코라떼'];
    const orderMenu = `${temperature[tem]} ${menu[me]} ${number}잔 주문 완료`;
    return console.log(orderMenu); // 위에 것이 전부 실행되고 함수를 종료
}
cafeKiosk2(0, 0, 1);
cafeKiosk2(1, 2, 3);

// 5. 함수 리턴
// 함수 내부 실행 데이터를 사용자가 원하는 방식으로 출력되게 만드는 키워드
function japangi(drink, num=1){
    const order = `${drink} ${num}개 주문 완료`;
    return order; // order 변수에 저장된 값만 함수 외부로 반환(종료) // 아래는 없는 데이터나 마찬가지로 치부
    return; // 리턴 뒤에 아무것도 안 적으면 함수만 강제 종료 
    return console.log('잔액이 부족합니다.'); // 라톤 뒤 콘솔 실행하고 함수 종료 // 함수 내에서 return을 만나는 순간 함수 외부로 강제로 나가게 되어 있음
    console.log(order); // 리턴 아래 써있는 명령은 절대 실행 안 됨
}
japangi('생수'); // 함수 내부 리턴에서 출력 함수가 정해졌을 때 데이터만 전달 방식
console.log(japangi('사이다')); // 함수 내부 리턴에서 출력 함수가 정해지지 않고 데이터만 반환했을 때 함수 밖에서 출력 함수를 정하는 방식
printBtn.textContent = japangi('콜라');