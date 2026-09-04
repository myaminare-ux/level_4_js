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

// --------------------------------------------------- 26 / 09 / 04
// 무비차트 + swiper
// swiper-slide를 생성해서 swiper-wrapper에 붙여넣기
// 스와이퍼, 스와이퍼 랩퍼를 하나로 변수로 잡을지, 각각 하나씩 잡을지 생각해야 함
// swiper 플러그인 함수 연결은 swiper에게 최종 연결해야 함
const chart_swiper = document.querySelector('.chart_swiper'); // 스와이퍼의 두번쨰 클래스로 같이 잡은 경우

// 플러그인 연결
const chart_swiper_func = new Swiper(chart_swiper,{
    slidesPerView:2,
    spaceBetween:10,
}); // 당장 하면 오류 걸리므로 먼저 주석 걸기 = 최종 연결되는 부분

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div'); // 생성
    chart_slide.classList.add('swiper-slide'); // 새로 만든 태그에 클래스 생성 시 클래스 리스트로 붙여야 함 = 클래스 연결

    chart_slide.innerHTML = `<p class="num">${movieDB[i].id}위</p>`;
    chart_slide.innerHTML += `<h3>${movieDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">평점 ${movieDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="story">${movieDB[i].summary}</p>`;
    chart_slide.style.backgroundImage = `url(${movieDB[i].poster})`; // 이미지를 슬라이드의 백그라운드로 넣기 위해 스타일.백그라운드이미지 = 경로; 작성

    chart_swiper.children[0].appendChild(chart_slide); // 스와이퍼의 0번째 자식(스와이퍼 랩퍼)으로 슬라이드를 붙여넣기
}

// Q2-1. 애니메이션 + swiper
const anime_swiper = document.querySelector('.anime_swiper');

for(let i=0; i<6; i++){
    const anime_slide = document.createElement('div');
    anime_slide.classList.add('swiper-slide');
    anime_slide.innerHTML = `<p class="num">${movie2DB[i].id}</p>`;
    anime_slide.innerHTML += `<h3>${movie2DB[i].title}</h3>`;
    anime_slide.innerHTML += `<p class="rating">${movie2DB[i].rating}</p>`;
    anime_slide.innerHTML += `<p class="genre">${movie2DB[i].genre}</p>`;
    anime_slide.style.backgroundImage = `url(${movie2DB[i].poster})`;
    anime_swiper.children[0].appendChild(anime_slide);
}

const anime_swiper_func = new Swiper(anime_swiper,{
    slidesPerView:3,
    spaceBetween:10,
});