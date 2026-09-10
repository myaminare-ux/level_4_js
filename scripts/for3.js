// for3.js
// for~in
// 2개 이상의 인덱스로 이루어진 배열, 객체, DOM 요소 순회하는 반복문
const flower = ['장미', '민들레', '수선화', '나팔꽃'];

// for(let 초기변수 in 변수에 대입할 대상){반복처리} == 변수에 대입할 대상 인덱스를 초기변수에 저장한다
for(let f in flower){
    console.log(f); // 인덱스 출력 0, 1, 2, 3
    console.log(flower[f]); // for~in이 추출한 인덱스를 활용해서 배열값 출력
}

// 객체 인덱스 추출하기
const birthday = [{
    date:'1월',
    flower:'장미',
},{
    date:'2월',
    flower:'민들레',
}];
// 위 변수 활용 - 인덱스 추출, 1월 2월, 장미, 민들레
for(let b in birthday){
    // console.log(b);
    console.log(birthday[b].date);
    console.log(birthday[b].flower);
}

console.log('---------------------------------------');

// 로그인 오류 검증 반복문 + 조건문 (버튼 클릭 시 수행)
const loginBtn = document.querySelector('#login_btn');
const inFrm = document.querySelector('#inFrm'); // 폼 태그(안쪽 검사 input들 잡기 위한 부모 대상)

// 로그인 버튼 클릭 시 수행 함수
loginBtn.addEventListener('click',()=>{
    const valFrm = {
        id:inFrm.user_id.value, // 속성:폼 태그.아이디input의 id.input의 입력값 
        pw:inFrm.user_pw.value, // 속성:폼 태그.비번input의 id.input의 입력값
    }
    console.log(valFrm); // 위 변수 출력 확인
    console.log(valFrm.id); // 개별 속성 출력 확인 v1(기본)
    console.log(valFrm['id']); // 객체 속성 출력 문법 v2(for~in과 함께할 때 주로 사용)
    
    for(let v in valFrm){
        console.log(v); // id, pw 속성명 출력
        console.log(valFrm[v]); // 속성이 가지고 있는 실제 값 출력
        if(valFrm[v] === ''){
            document.querySelector('#login_msg').textContent = '깂을 입력하세요';
        }
    }
    
}) // 클릭 이벤트 종료

console.log('---------------------------------------');

// for~of
// for(let 초기변수생성 of 대입할변수대상){반복처리할명령}
const animals = ['강아지', '고양이', '앵무새', '금붕어', '돌고래'];

for(let a in animals){console.log(a);} // index 출력 확인
for(let a of animals){console.log(a);} // object 출력 확인

const list = document.querySelector('.list'); // ul 변수
for(let a of animals){
    const li = document.createElement('li');
    li.textContent = a;
    li.style.borderBottom = '2px solid #222';
    li.style.padding = '4px 6px';
    list.appendChild(li);
} // animals 반복 종료

const animalsLi = document.querySelectorAll('.list li');
for(let i of animalsLi){
    console.log(i); // 생성 li 출력 확인
    i.addEventListener('mouseover',()=>{
        i.style.borderColor = 'red';
    })
}

console.log('---------------------------------------');

// forEach
const tabTitle = document.querySelectorAll('.tab_title a');
const tabContents = document.querySelectorAll('.tab_contents > li > ul');

// 특정 객체의 index만 사용할 때는 for~in
// 특정 객체의 object만 사용할 때는 for~of
// 특정 객체의 index와 object 모두 사용할 때는 forEach
// 객체.forEach((객체매개변수, 인덱스매개변수, 배열매개변수)=>{})
// 매개변수명은 자유롭게 설정 가능
tabTitle.forEach((o, i, a)=>{
    console.log(o, i, a);
    o.addEventListener('click',()=>{
        // for(let reset of tabTitle){reset.classList.remove('active');} // 초기화 목적 == 전체 제목 클래스 비활성화
        resetFunc(tabTitle);
        o.classList.add('active'); // 초기화 후에 active를 주어라 == 클릭한 제목만 활성화 클래스 적용
        console.log(i); // 클릭 인덱스 테스트
        // for(let r of tabContents){r.classList.remove('active');}
        resetFunc(tabContents);
        tabContents[i].classList.add('active');
    })
})

function resetFunc(target){
    for(let reset of target){reset.classList.remove('active');}
    return
}