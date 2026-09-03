// index.js
// Q. 어벤져스 DB 1개 li에 삽입하기
// 기존 태그 선택 querySelector()
// 기존 태그 복제 cloneNode()
// 새로운 태그 생성 createElement()
// 생성한 대상을 붙여넣기 appendChild()
const movieWrap1 = document.querySelector('.movie_wrap1'); // 선택 ul 대상

// Q. 어벤져스 DB 1개 li에 삽입하기
// const movieLi = document.createElement('li'); // li 생성 : 없었던 li를 생성했기 때문에 콘솔에는 li만 뜨고 안에는 아무것도 없음
// movieLi.textContent = '어벤져스';
// movieLi.textContent = movieDB[0].title;
// movieLi.textContent += movieDB[0].date; //+= 복합 대입 : 기존값에 대해서 대입
// movieLi.textContent = movieDB[0].date; // = 대입 : 기존값을 제거하고 대입(기본뜻)
// movieWrap1.appendChild(movieLi); // li 붙여넣기(li 안에 있는 내용을 쓰고 붙여넣기 하기)

// Q2. 영화 DB 1~9개 모두 출력하기
for(let i=0; i<9; i++){
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${movieDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${movieDB[i].date}</p>`;
    movieLi.innerHTML += `<a href="#"><img src="${movieDB[i].poster}" alt="${movieDB[i].title}"></a>`;
    movieWrap1.appendChild(movieLi);
}

// Q3. 애니메이션 영화 DB 1~10개 모두 출력하기
const movieWrap2 = document.querySelector('.movie_wrap2');
for(let i=0; i<10; i++){
    const movieLi2 = document.createElement('li');
    movieLi2.innerHTML = `<h3>${movie2DB[i].title}</h3>`;
    movieLi2.innerHTML += `<p>${movie2DB[i].genre}</p>`;
    movieLi2.innerHTML += `<a href="#"><img src="${movie2DB[i].poster}" alt="${movie2DB[i].title}"></a>`;
    movieLi2.innerHTML += `<p>${movie2DB[i].director}</p>`;
    movieWrap2.appendChild(movieLi2);
}