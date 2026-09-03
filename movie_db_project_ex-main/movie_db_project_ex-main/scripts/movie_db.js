// 영화 DB
// 어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라다를 입는다2, 마이클, 슈퍼 마리오 갤럭시, 프로젝트 헤일메리, 폭풍의 언덕
const movieDB = [
    {
        id: 1,
        title: '어벤져스',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '안소니 루소, 조 루소',
        rating: 4.8,
        cast: ['로버트 다우니 주니어', '베네딕트 컴버배치', '톰 홀랜드', '페드로 파스칼'],
        summary: '새로운 위협 닥터 둠의 등장과 함께 다중우주의 위기에 맞서 다시 모인 어벤져스 영웅들의 거대한 사투를 그린 블록버스터.'
    },
    {
        id: 2,
        title: '스파이더맨',
        date: '2026-07-24',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        genre: ['액션', 'SF', '모험'],
        director: '데스틴 대니얼 크레턴',
        rating: 4.7,
        cast: ['톰 홀랜드', '젠데이아', '제이콥 배털론'],
        summary: '정체가 밝혀진 후 새로운 삶을 살아가며 새로운 위협과 악당들에 맞서 정의를 위해 싸우는 피터 파커의 이야기.'
    },
    {
        id: 3,
        title: '오디세이',
        date: '2026-06-17',
        poster: 'poster/poster_theodyssey.jpg',
        genre: ['모험', '드라마', '판타지'],
        director: '크리스토퍼 놀란',
        rating: 4.9,
        cast: ['킬리언 머피', '맷 데이먼', '앤 해서웨이'],
        summary: '트로이 전쟁이 끝난 후 집으로 돌아가기 위해 10년 동안 고난의 항해를 이어가는 오디세우스의 대서사시.'
    },
    {
        id: 4,
        title: '토이스토리5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        genre: ['애니메이션', '모험', '코미디', '가족'],
        director: '앤드류 스탠튼',
        rating: 4.6,
        cast: ['톰 행크스', '팀 알렌', '조앤 쿠삭'],
        summary: '디지털 기기와 스마트폰에 아이들의 관심 빼앗긴 시대, 우디와 버즈 라이트이어를 비롯한 장난감 친구들의 새로운 모험.'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다2',
        date: '2026-05-01',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        genre: ['드라마', '코미디'],
        director: '데이비드 프랭클',
        rating: 4.5,
        cast: ['메릴 스트립', '앤 해서웨이', '에밀리 블런트'],
        summary: '쇠퇴해가는 인쇄 잡지 시장 속에서 런웨이 매거진을 지키려는 미란다 프리스트리와 거물 경영자가 된 앤디의 재회와 대립.'
    },
    {
        id: 6,
        title: '마이클',
        date: '2025-04-18',
        poster: 'poster/poster_michael.jpg',
        genre: ['전기', '음악', '드라마'],
        director: '안투안 후쿠아',
        rating: 4.8,
        cast: ['자파르 잭슨', '콜먼 도밍고', '니아 롱'],
        summary: '팝의 황제 마이클 잭슨의 삶과 음악, 그리고 명성 뒤에 숨겨진 인간적인 고뇌와 뜨거운 예술혼을 그린 전기 영화.'
    },
    {
        id: 7,
        title: '슈퍼 마리오 갤럭시',
        date: '2026-04-03',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        genre: ['애니메이션', '모험', 'SF', '코미디'],
        director: '아론 호바스, 마이클 제레닉',
        rating: 4.7,
        cast: ['크리스 프랫', '아냐 테일러조이', '잭 블랙', '찰리 데이'],
        summary: '우주를 배경으로 쿠파의 야망을 막고 피치 공주와 은하수를 구하기 위해 떠나는 마리오와 루이지의 은하계 모험.'
    },
    {
        id: 8,
        title: '프로젝트 헤일메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        genre: ['SF', '드라마', '모험'],
        director: '필 로드, 크리스토퍼 밀러',
        rating: 4.9,
        cast: ['라이언 고슬링', '산드라 휠러'],
        summary: '태양 멸망의 위기 속에서 인류를 구하기 위해 홀로 우주선 헤일메리호에 승선한 과학자 라일랜드 그레이스의 외롭고 경이로운 미션.'
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-02-13',
        poster: 'poster/poster_wutheringheights.jpg',
        genre: ['로맨스', '드라마'],
        director: '에메랄드 페넬',
        rating: 4.4,
        cast: ['마고 로비', '제이콥 엘로디'],
        summary: '황량한 황무지의 저택을 배경으로 펼쳐지는 히스클리프와 캐서린의 비극적이고 애증 어린 격정적인 사랑 이야기.'
    }
    ];
// export default movieDB;