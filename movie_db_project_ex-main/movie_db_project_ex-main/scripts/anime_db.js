// 영화 애니메이션 DB
// 마루밑 아리에티, 체인소맨 레제편, 하울의 움직이는 성, 귀멸의 칼날 무한성편, 벼랑 위의 포뇨, 센과 치히로의 행방불명, 스즈메의 문단속, 그대들은 어떻게 살것인가, 더 퍼스트 슬램덩크, 너의 이름은
const movie2DB = [
    {
        id: 1,
        title: '마루밑 아리에티',
        date: '2010-09-09',
        poster: 'poster_anime/poster_arrietty.jpg',
        genre: ['애니메이션', '판타지', '모험'],
        director: '요네바야시 히로마사',
        rating: 8.16,
        cast: ['시다 미라이', '카미키 류노스케'],
        summary: '인간의 눈을 피해 마루 밑에서 필요한 물건을 슬쩍 가져오며 살아가는 10cm 소인 소녀 아리에티와 인간 소년 쇼우의 비밀스러운 우정을 그린 이야기.'
    },
    {
        id: 2,
        title: '체인소맨 레제편',
        date: '2025-10-24',
        poster: 'poster_anime/poster_chainsawmanreze.jpg',
        genre: ['애니메이션', '액션', '다크 판타지'],
        director: '나카소노 요시하라',
        rating: 9.10,
        cast: ['토야 키쿠노스케', '우에다 레이나', '파일루즈 아이'],
        summary: '비 내리는 날 신비로운 분위기의 소녀 레제를 만나 특별한 감정을 느끼게 된 덴지에게 찾아온 잔혹하고 애절한 운명의 이야기.'
    },
    {
        id: 3,
        title: '하울의 움직이는 성',
        date: '2004-12-23',
        poster: 'poster_anime/poster_howlsmovingcastle.jpg',
        genre: ['애니메이션', '판타지', '로맨스'],
        director: '미야자키 하야오',
        rating: 9.35,
        cast: ['바이쇼 치에코', '기무라 타쿠야'],
        summary: '마녀의 저주로 90세 할머니가 된 소녀 소피가 마법사 하울의 움직이는 성에 머물게 되면서 벌어지는 신비롭고 감동적인 모험과 사랑.'
    },
    {
        id: 4,
        title: '귀멸의 칼날 무한성편',
        date: '2025-08-15',
        poster: 'poster_anime/poster_kimetsuinfinitycastle.jpg',
        genre: ['애니메이션', '액션', '판타지'],
        director: '소토자키 하루오',
        rating: 9.50,
        cast: ['화에 나츠키', '키토 아카리', '시모노 히로', '마츠오카 요시츠구'],
        summary: '혈귀들의 본거지인 무한성으로 뛰어든 귀살대 대원들과 최종 흑막 키부츠지 무잔, 그리고 상현 혈귀들 간의 사투를 그린 최후의 결전.'
    },
    {
        id: 5,
        title: '벼랑 위의 포뇨',
        date: '2008-12-17',
        poster: 'poster_anime/poster_ponyo.jpg',
        genre: ['애니메이션', '모험', '가족', '판타지'],
        director: '미야자키 하야오',
        rating: 8.24,
        cast: ['나라 유리아', '도이 히로키'],
        summary: '인간이 되고 싶은 호기심 많은 물고기 소녀 포뇨와 벼랑 위 집에 사는 5살 소년 소스케의 동화 같은 만남과 우정을 그린 작품.'
    },
    {
        id: 6,
        title: '센과 치히로의 행방불명',
        date: '2002-06-28',
        poster: 'poster_anime/poster_spiritedaway.jpg',
        genre: ['애니메이션', '판타지', '모험'],
        director: '미야자키 하야오',
        rating: 9.39,
        cast: ['히라기 루미', '이리노 미유'],
        summary: '신들의 온천장에 들어서면서 돼지로 변해버린 부모님을 구하고 현실 세계로 돌아가기 위한 10살 소녀 치히로의 모험기.'
    },
    {
        id: 7,
        title: '스즈메의 문단속',
        date: '2023-03-08',
        poster: 'poster_anime/poster_suzume.jpg',
        genre: ['애니메이션', '판타지', '모험', '드라마'],
        director: '신카이 마코토',
        rating: 8.20,
        cast: ['하라 나노카', '마츠무라 호쿠토'],
        summary: '규슈의 한가로운 마을에 사는 소녀 스즈메가 문을 닫는 여정을 떠나는 청년 소타를 만나 일본 각지의 재앙을 막기 위해 문을 닫아가는 여정.'
    },
    {
        id: 8,
        title: '그대들은 어떻게 살 것인가',
        date: '2023-10-25',
        poster: 'poster_anime/poster_theboyandtheheron.jpg',
        genre: ['애니메이션', '판타지', '모험'],
        director: '미야자키 하야오',
        rating: 7.00,
        cast: ['산토키 소마', '스다 마사키', '시바사키 코우'],
        summary: '시공간을 초월한 신비로운 세계로 들어간 소년 마히토가 정체불명의 왜가리를 만나며 펼쳐지는 시적이고 자전적인 모험 이야기.'
    },
    {
        id: 9,
        title: '더 퍼스트 슬램덩크',
        date: '2023-01-04',
        poster: 'poster_anime/poster_thefirstslamdunk.jpg',
        genre: ['애니메이션', '스포츠', '드라마'],
        director: '이노우에 타케히코',
        rating: 9.28,
        cast: ['나카무라 슈고', '가사마 쥰', '카미오 신이치로'],
        summary: '전국제패를 꿈꾸는 북산고 농구부 5인방의 꿈과 열정, 그리고 산왕공업과의 숨 막히는 최후의 한 판 승부를 다룬 이야기.'
    },
    {
        id: 10,
        title: '너의 이름은',
        date: '2017-01-04',
        poster: 'poster_anime/poster_yourname.jpg',
        genre: ['애니메이션', '드라마', '멜로/로맨스', '판타지'],
        director: '신카이 마코토',
        rating: 9.03,
        cast: ['카미키 류노스케', '카미시라이시 모네'],
        summary: '도쿄 소년 타키와 시골 소녀 미츠하가 서로 몸이 바뀌는 기적 같은 경험을 하며 다가오는 운명적 재앙에 맞서는 이야기.'
    }
    ];

// export default movie2DB;