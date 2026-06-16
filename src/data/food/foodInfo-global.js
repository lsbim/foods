const foodGradeListGlobal = [4, 3, 2, 1, 0];

const foodGradeGlobal = {}; // 등급 내 음식 목록
const foodBonusGlobal = {}; // 음식이 제공하는 친밀도

foodGradeGlobal[4] = ["트리플 민트 초코 아이스크림", "해적 만화 고기 구이", "머스크 멜론 보코치니", "보물 타르트", "1급 비밀의 포도주스",
    "찹쌀밥 한 공기", "악령 푸딩", "딥다크 초콜릿 아이스크림", "석류석 화채", "927곡 미숫가루",
];

foodGradeGlobal[3] = ["석류석 열매", "미숫가루", "초콜릿 아이스크림", "만화 고기 구이", "비밀의 포도주스", "멜론 보코치니",
    "유령 푸딩", "보석 타르트", "민트 초코 아이스크림", "쌀밥 한 공기", "수소 커틀릿",
    "백금탕후루", "유기농 레몬차", "하트 매듭 빵", "코코넛 만능 녹즙", "소프트 크림 브륄레", "두입초 쌈",
    "해초 포케", "로얄 허니갈릭 살몬", "호박 스튜", "뜨거운 냉동 아메리카노"];

foodGradeGlobal[2] = ["크림 브륄레", "매듭 빵", "한입초 쌈", "공기 커틀릿", "금탕후루", "코코넛 솔잎죽", "허니갈릭 살몬",
    "따뜻한 아이스 아메리카노", "해초 샐러드", "호박 스프", "UFC 야채 튀김", "계피맛 건강 알사탕",
    "꿀꿀단지", "와앙 딸기 케이크", "저당 마시멜로 마카롱", "용족 세공 사탕", "ANSA 우주식량", "고급 캔 사료",
    "엘플릭스 캬라멜 팝콘"
];
foodGradeGlobal[1] = ["딸기 케이크", "캬라멜 팝콘", "캔 사료", "레몬차", "우주식량", "꿀단지", "계피맛 알사탕", "용족 사탕",
    "UFC 당근 튀김", "마시멜로 마카롱"];

// 이벤트음식
foodGradeGlobal[0] = ["새콤비타F", "얌얌비타C", "부쉬 드 노엘"];


foodBonusGlobal[4] = {
    verylike: '+72',
    like: '+60',
    soso: '+40',
    hate: '+20'
}

foodBonusGlobal[3] = {
    verylike: '+54',
    like: '+45',
    soso: '+30',
    hate: '+15'
}
foodBonusGlobal[2] = {
    verylike: '+36',
    like: '+30',
    soso: '+20',
    hate: '+10'
}
foodBonusGlobal[1] = {
    like: '+15',
    soso: '+10',
    hate: '+5'
}

export { foodGradeGlobal, foodGradeListGlobal, foodBonusGlobal }