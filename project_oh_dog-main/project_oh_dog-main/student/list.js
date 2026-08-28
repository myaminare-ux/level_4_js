// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
// smll1 마우스 이벤트(오버 또는 클릭) 시 큰이미지가 big 1로 변경
// smll2 마우스 이벤트(오버 또는 클릭) 시 큰이미지가 big 2로 변경
// 1.---------------------------변수
const smallThum = document.querySelectorAll('.small_thum img');
const bigThum = document.querySelector('.big_thum img');

console.log(smallThum, bigThum);
// 2.---------------------------함수
function thumFunc(target1, target2){
    return target1.src = target2.src
}
// 3.---------------------------이벤트
// 3-1
smallThum[0].addEventListener('mouseover',()=>{
    thumFunc(bigThum, smallThum[0])
})
smallThum[1].addEventListener('mouseover',()=>{
    thumFunc(bigThum, smallThum[1])
})
// 3-2
/* smallThum[0].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[0].src;
})
smallThum[1].addEventListener('mouseover',()=>{
    bigThum.src = smallThum[1].src;
}) */

// -------------------------------------------- 상품 옵션에 따른 주문 정보 + 가격 8/28
// 목표1) 색상 선택 시 선택한 정보를 data-* 속성에 대입하고 대입한 값 확인하기
// 선택한 DOM 대상이 select-option 태그라면 사용해야 할 문법(아래)
// DOM.options[DOM.selectedIndex].text // 사용자가 선택(입력)한 문자
// DOM.options[DOM.selectedIndex].value // 사용자가 선택한 문자의 값
const colorSelect = document.querySelector('select[id=color]');
const optResult = document.querySelector('.opt_result'); // 주문 옵션 선택 시 출력
const sizeSelect = document.querySelector('select[id=size]');
console.log(colorSelect, optResult, sizeSelect);


// optResult.style.display = 'none';
showHideFunc(optResult);
// 주문 옵션 숨기기 / 보이기 함수
function showHideFunc(target, visible='none'){
    return target.style.display = visible;
}

// 옵션 선택 시 호출 함수
function optResultFunc(dom, dataValue){
    if(dom.selectedIndex > 0){
        let changeOpt = dom.options[dom.selectedIndex].text;
        dom.dataset.dataValue = changeOpt;
        showHideFunc(optResult, 'flex');
        return optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}, 사이즈 : ${sizeSelect.dataset.size}`;
    }
}

// (위) 함수 호출 이용한 이벤트 함수
sizeSelect.addEventListener('change',()=>{ optResultFunc(sizeSelect, 'size') })
colorSelect.addEventListener('change',()=>{ optResultFunc(colorSelect, 'color') })

// select 태그 변수 이벤트를 제작 시 사용해야하는 이벤트 종류 : change
/* colorSelect.addEventListener('change', ()=>{
    if(colorSelect.selectedIndex > 0){ // 첫번째(0) 안내문을 제외한 조건
        // console.log('change 변경 확인');
        let changeOpt = colorSelect.options[colorSelect.selectedIndex].text; // 선택 옵션 변수 저장
        // console.log(changeOpt); // 위 변수 test
        
        // data-* 속성에 사용자가 선택한 정보 저장하기
        // dom.dataset.속성명; // 읽기
        // dom.dataset.속성명 = 값; // 수정, 삭제(삭제는 빈무자''로 표시해서 데이터를 없애는 것)
        colorSelect.dataset.color = changeOpt;
        // console.log(colorSelect.dataset.color); // 위 명령 test(읽기)
        
        // 선택 색상 옵션이 opt_result의 result 자식 "색상 :" 자리에 삽입하기 
        showHideFunc(optResult, 'flex');
        optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}`;
    }
})

// 사이즈 옵션 선택 시 주문 옵션에 출력하기
sizeSelect.addEventListener('change', ()=>{
    if(sizeSelect.selectedIndex > 0){ // 안내문은 제외
        let changeOpt = sizeSelect.options[sizeSelect.selectedIndex].text;
        sizeSelect.dataset.size = changeOpt;
        // console.log(sizeSelect.dataset.size);
        showHideFunc(optResult, 'flex');
        optResult.children[0].textContent = `사이즈 : ${sizeSelect.dataset.size}`;
    }
}) */