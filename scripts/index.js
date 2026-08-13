/* index.js */
// 1. 변수
let itemPrice = 24600; // 가격을 적을 때 숫자로 할 거면 콤마 넣지 말기 (콤마 넣을 거면 문자로 변경)
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1');
let replaceData = itemPrice.toLocaleString('ko-kr'); // 데이터 종류 변경 변수 (가격에 콤마를 넣어 숫자를 쉽게 읽고 싶은 경우) 대입 자리에 변경하고 싶은 변수명 작성 -> string 숫자, locale 지역 => 숫자를 문자로 변경 () 안에는 국가 고유 화페 단위를 써야함
// ------------------------------------- 연습 (웹은행 150만원 입금)
let bankDeposit = 1500000;
const result2p = document.querySelector('.result2');
let depositData = bankDeposit.toLocaleString('fi-fi'); // 필란드(fi-fi)

// 출력 테스트
console.log(itemPrice, titleBig, result1p, replaceData);
console.log(bankDeposit, result2p, depositData);

// 실행 결과
result1p.textContent = replaceData+'원';
result2p.textContent = depositData+'원';

// -----------------------------------------
// 2. 배열(변수)
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li');

console.log(list1Li);
console.log(money[0].toLocaleString('ko-kr')); // 3개의 변수값 중에 몇 번째 값을 보고 싶냐 쓰고 싶을때 
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[0].textContent = money[0]+'원';
list1Li[1].textContent = money[1]+'원';
list1Li[2].textContent = money[2]+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0];

// ----------------------------------------- 연습
const study1 = document.querySelectorAll('.study dt');
const study2 = document.querySelectorAll('.study dd');

console.log(study1, study2);

study1[0].textContent = itemName[0];
study2[0].textContent = itemPriceOriginal[0];
study1[1].textContent = itemName[1];
study2[1].textContent = itemPriceOriginal[1];

// ------------------------------------------- 배열 정리
let plate = ['계란', '스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국'];

plate[1] = '연어';

console.log(plate[0]); // 계란
console.log(plate[6]); // 콩나물국
console.log(plate[3]); // 김치
console.log(plate[1]); // 스테이크 -> 연어

// ---------------------------------------------
// 3. 객체
const movie = { // 객체 변수 == 줄여서 객체
    name:'스파이더맨',
    price:12000,
}
console.log(movie.name); // 객체.속성
console.log(movie.price);
// --------------------------------------------- 객체+cgv DB 연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img'); // document는 body 기준으로 삼았을 때 -> cgv를 쓰면 cgv를 기준으로 삼았을 때 => .img를 붙이지 않아도 바로 img 태그로 이동
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate, cgvGenre);

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre; // 그냥 genre만 써도 나오는 이유는 genre를 먼저 객체로 잡았기 때문

// ----------------------------------------------- 객체 연습
const dessertTray = {
    top:['파랑마카롱', '분홍마카롱', '초록마카롱', '노랑마카롱'],
    middle:['슈크림', '머핀', '에그타르트'],
    bottom:['방울토마토', '청포도', '오렌지'],
}

console.log(dessertTray);

dessertTray.bottom[2] = '망고';

console.log(dessertTray.top[3]); // 노란마카롱
console.log(dessertTray.middle[0]); // 슈크림
console.log(dessertTray.bottom[1]); // 청포도
console.log(dessertTray.bottom[2]); // 오렌지 -> 망고

// --------------------------------------------------- 증감 연산자
let num = 1;
console.log(num); // 1 (변수가 처음 대입된 값 테스트)

// console 이전 위치에 있어야 적용됨
num++; // 1 증가
console.log(num); // 2 (위 연산 후 실행 테스트)

num--; // 1 감소
console.log(num); // 1

// --------------------------------------------------- 증감 연산자-2개의 변수 활용
let number1 = 10;
let number2;

console.log(number1, number2); // 초기값 테스트

number2 = ++number1; // number1을 1 증가해서 number2에 보내라
console.log(number1, number2); // 대입 받는 애 뿐만 아니라 스스로도 같이 영향을 받음

number2 = number1++;
// 증감 연산자를 변수 뒤에 붙이면 기존 변수값(number1)을 대입(=)을 만나 number2로 먼저 보내고 ++로 number1을 나중에 증가시킨다.(후처리)
console.log(number1, number2); 