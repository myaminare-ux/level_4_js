/* db.js */
const itemName = ['토마토', '가지', '배추', '버섯'];
const itemPriceOriginal = [2000, 1000, 5000, 6000];
const movieDb = [{ // 영화를 배열로 만들고 그 안에 객체로 속성:값을 나누기 위해 중괄호 사용
    poster:'https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/030001/30001323/30001323_320.jpg',
    name:'오디세이', // movieDb[0].name
    age:15,
    reservation_rate:'65.5%',
    genre:['액션', '어드벤처', '드라마'],
}, {
    poster:'https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/030001/30001192/30001192_320.jpg',
    name:'스파이더맨', // movieDb[1].name
    age:12,
    reservation_rate:'20.9%',
    genre:['액션', '어드벤처', '판타지'],
}];