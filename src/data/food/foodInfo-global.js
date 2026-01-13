const foodGradeListGlobal = [3, 2, 1, 0];

const foodGradeGlobal = {}; // 등급 내 음식 목록
const foodBonusGlobal = {}; // 음식이 제공하는 친밀도

foodGradeGlobal[3] = ["석류석 열매", "미숫가루", "초콜릿 아이스크림", "만화 고기 구이", "비밀의 포도주스", "멜론 보코치니",
    "유령 푸딩", "보석 타르트", "민트 초코 아이스크림", "쌀밥 한 공기"];
    foodGradeGlobal[2] = ["크림 브륄레", "매듭 빵", "한입초 쌈", "공기 커틀릿", "금탕후루", "코코넛 솔잎죽", "허니갈릭 살몬",
    "따뜻한 아이스 아메리카노", "해초 샐러드", "호박 스프"
];
foodGradeGlobal[1] = ["딸기 케이크", "캬라멜 팝콘", "캔 사료", "레몬차", "우주식량", "꿀단지", "계피맛 알사탕", "용족 사탕",
    "UFC 당근 튀김", "마시멜로 마카롱"];
// 이벤트음식
foodGradeGlobal[0] = ["새콤비타F", "얌얌비타C", "부쉬 드 노엘"];

// foodBonus[5] = {
//     verylike: '+101~103',
//     like: '+86~88',
//     soso: '+61~63',
//     hate: '+36~38'
// }
foodBonusGlobal[3] = {
    like: '+45',
    soso: '+30',
    hate: '+15'
}
foodBonusGlobal[2] = {
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