// 성격 목록
export const typeList = ["공명", "순수", "냉정", "광기", "활발", "우울"];


export const charInfo = {
    // 순수
    "비비": {
        names: { ko: "비비", en: "Vivi", zhCN: "薇薇", zhTW: "", ja: "ヴィヴィ" },
        food: { verylike: ["뜨거운 냉동 아메리카노"], like: ["계피맛 알사탕", "따뜻한 아이스 아메리카노", "계피맛 건강 알사탕"], hate: ["캔 사료", "공기 커틀릿", "고급 캔 사료", "수소 커틀릿"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "다야": {
        names: { ko: "다야", en: "Daya", zhCN: "达雅", zhTW: "", ja: "" },
        food: { verylike: ["보물 타르트"], like: ["레몬차", "보석 타르트", "유기농 레몬차"], hate: ["캔 사료", "용족 사탕", "고급 캔 사료", "용족 세공 사탕"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "나이아": {
        names: { ko: "나이아", en: "Naia", zhCN: "奈亚", zhTW: "", ja: "" },
        food: { verylike: ["해초 포케"], like: ["금탕후루", "해초 샐러드", "백금탕후루"], hate: ["우주식량", "비밀의 포도주스", "1급 비밀의 포도주스", "ANSA 우주식량"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "에르핀": {
        names: { ko: "에르핀", en: "Erpin", zhCN: "埃尔芬", zhTW: "", ja: "エルフィン" },
        food: { verylike: ["와앙 딸기 케이크"], like: ["딸기 케이크", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"], hate: ["코코넛 솔잎죽", "민트 초코 아이스크림", "코코넛 만능 녹즙", "트리플 민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "캬롯": {
        names: { ko: "캬롯", en: "Kyarot", zhCN: "卡萝特", zhTW: "", ja: "" },
        food: { verylike: ["두입초 쌈"], like: ["한입초 쌈", "꿀단지", "꿀꿀단지"], hate: ["따뜻한 아이스 아메리카노", "캔 사료", "뜨거운 냉동 아메리카노", "고급 캔 사료"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "헤일리": {
        names: { ko: "헤일리", en: "Haley", zhCN: "海莉", zhTW: "", ja: "ヘイリー" },
        food: { verylike: ["찹쌀밥 한 공기"], like: ["쌀밥 한 공기", "레몬차", "유기농 레몬차"], hate: ["따뜻한 아이스 아메리카노", "민트 초코 아이스크림", "뜨거운 냉동 아메리카노", "트리플 민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "셰럼": {
        names: { ko: "셰럼", en: "Sherum", zhCN: "夏乐", zhTW: "", ja: "" },
        food: { like: ["따뜻한 아이스 아메리카노", "마시멜로 마카롱", "뜨거운 냉동 아메리카노", "저당 마시멜로 마카롱"], hate: ["민트 초코 아이스크림", "캬라멜 팝콘", "트리플 민트 초코 아이스크림", "엘플릭스 캬라멜 팝콘"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "오팔": {
        names: { ko: "오팔", en: "Opal", zhCN: "欧珀", zhTW: "", ja: "" },
        food: { verylike: ["보물 타르트"], like: ["보석 타르트", "금탕후루", "백금탕후루"], hate: ["캔 사료", "고급 캔 사료", "코코넛 솔잎죽", "코코넛 만능 녹즙"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "란": {
        names: { ko: "란", en: "Ran", zhCN: "兰", zhTW: "", ja: "" },
        food: { verylike: ["1급 비밀의 포도주스"], like: ["비밀의 포도주스", "계피맛 알사탕", "계피맛 건강 알사탕"], hate: ["딸기 케이크", "와앙 딸기 케이크", "공기 커틀릿", "수소 커틀릿"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "라이카": {
        names: { ko: "라이카", en: "Raika", zhCN: "莱卡", zhTW: "", ja: "" },
        food: { verylike: ["ANSA 우주식량"], like: ["우주식량", "멜론 보코치니", "머스크 멜론 보코치니"], hate: ["계피맛 알사탕", "계피맛 건강 알사탕", "공기 커틀릿", "수소 커틀릿"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "마요(멋짐)": {
        names: { ko: "마요(멋짐)", en: "Mayo(Cool)", zhCN: "玛约(超帅)", zhTW: "", ja: "" },
        food: { verylike: ["1급 비밀의 포도주스"], like: ["쌀밥 한 공기", "비밀의 포도주스", "찹쌀밥 한 공기"], hate: ["용족 사탕", "매듭 빵", "용족 세공 사탕", "하트 매듭 빵"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "캐시": {
        names: { ko: "캐시", en: "Kathy", zhCN: "凯茜", zhTW: "", ja: "" },
        food: { verylike: ["ANSA 우주식량"], like: ["우주식량", "레몬차", "유기농 레몬차"], hate: ["공기 커틀릿", "수소 커틀릿", "유령 푸딩", "악령 푸딩"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "뮤트": {
        names: { ko: "뮤트", en: "Mute", zhCN: "穆特", zhTW: "", ja: "" },
        food: { verylike: ["1급 비밀의 포도주스"], like: ["우주식량", "ANSA 우주식량", "비밀의 포도주스"], hate: ["보석 타르트", "보물 타르트", "꿀꿀단지", "꿀단지"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "아일라": {
        names: { ko: "아일라", en: "Ayla", zhCN: "阿依拉", zhTW: "", ja: "" },
        food: { verylike: ["해초 포케"], like: ["해초 샐러드", "레몬차", "유기농 레몬차"], hate: ["우주식량", "ANSA 우주식량", "석류석 열매", "석류석 화채"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "가비아": {
        names: { ko: "가비아", en: "Gabia", zhCN: "加维亚", zhTW: "", ja: "ガヴィア" },
        food: { verylike: ["계피맛 건강 알사탕"], like: ["계피맛 알사탕", "레몬차", "유기농 레몬차"], hate: ["용족 사탕", "크림 브륄레", "용족 세공 사탕", "소프트 크림 브륄레"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" }
        }
    },
    "로네": {
        names: { ko: "로네", en: "Rohne", zhCN: "洛涅", zhTW: "", ja: "" },
        food: { verylike: ["백금탕후루"], like: ["금탕후루", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"], hate: ["우주식량", "공기 커틀릿", "ANSA 우주식량", "수소 커틀릿"], soso: ["송편"] },
        stats: { default: { grade: 2, type: "순수" } }
    },
    "마고": {
        names: { ko: "마고", en: "Mago", zhCN: "玛戈", zhTW: "", ja: "マーゴ" },
        food: { verylike: ["ANSA 우주식량"], like: ["캔 사료", "우주식량", "고급 캔 사료"], hate: ["한입초 쌈", "만화 고기 구이", "두입초 쌈", "해적 만화 고기 구이"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" }
        }
    },
    "빅우드": {
        names: { ko: "빅우드", en: "Bigwood", zhCN: "大木头", zhTW: "", ja: "ビッグウッド" },
        food: { verylike: ["코코넛 만능 녹즙"], like: ["코코넛 솔잎죽", "쌀밥 한 공기", "찹쌀밥 한 공기"], hate: ["한입초 쌈", "석류석 열매", "두입초 쌈", "석류석 화채"] },
        stats: { default: { grade: 2, type: "순수" } }
    },
    "스피키": {
        names: { ko: "스피키", en: "Speaki", zhCN: "斯碧琪", zhTW: "", ja: "スピッキー" },
        food: { verylike: ["계피맛 건강 알사탕"], like: ["계피맛 알사탕", "석류석 열매", "석류석 화채"], hate: ["매듭 빵", "호박 스프", "호박 스튜", "하트 매듭 빵"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" }
        }
    },
    "사리": {
        names: { ko: "사리", en: "Sari", zhCN: "莎里", zhTW: "", ja: "サリー" },
        food: { verylike: ["로얄 허니갈릭 살몬"], like: ["허니갈릭 살몬", "크림 브륄레", "소프트 크림 브륄레"], hate: ["미숫가루", "927곡 미숫가루", "꿀꿀단지", "꿀단지"] },
        stats: {
            default: { grade: 1, type: "순수" },
            global: { grade: 2, type: "순수" }
        }
    },
    "알레트": {
        names: { ko: "알레트", en: "Allet", zhCN: "阿莱特", zhTW: "", ja: "アレット" },
        food: { verylike: ["ANSA 우주식량"], like: ["우주식량", "계피맛 알사탕", "계피맛 건강 알사탕"], hate: ["캔 사료", "고급 캔 사료", "호박 스프", "호박 스튜"] },
        stats: {
            default: { grade: 1, type: "순수" },
            global: { grade: 2, type: "순수" }
        }
    },
    "큐이": {
        names: { ko: "큐이", en: "Kyuri", zhCN: "路易", zhTW: "", ja: "キュウイ" },
        food: { verylike: ["두입초 쌈"], like: ["한입초 쌈", "딸기 케이크", "와앙 딸기 케이크"], hate: ["UFC 야채 튀김", "UFC 당근 튀김", "크림 브륄레", "소프트 크림 브륄레"] },
        stats: { default: { grade: 1, type: "순수" } }
    },

    // 냉정
    "이드": {
        names: { ko: "이드", en: "Ed", zhCN: "伊德", zhTW: "", ja: "" },
        food: { verylike: ["1급 비밀의 포도주스"], like: ["UFC 당근 튀김", "비밀의 포도주스", "UFC 야채 튀김"], hate: ["따뜻한 아이스 아메리카노", "계피맛 알사탕", "뜨거운 냉동 아메리카노", "계피맛 건강 알사탕"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "아야": {
        names: { ko: "아야", en: "Aya", zhCN: "绫", zhTW: "", ja: "アヤ" },
        food: { verylike: ["트리플 민트 초코 아이스크림"], like: ["초콜릿 아이스크림", "민트 초코 아이스크림", "딥다크 초콜릿 아이스크림"], hate: ["따뜻한 아이스 아메리카노", "쌀밥 한 공기", "뜨거운 냉동 아메리카노", "찹쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "벨벳": {
        names: { ko: "벨벳", en: "Velvet", zhCN: "薇尔薇特", zhTW: "", ja: "ベルベット" },
        food: { verylike: ["두입초 쌈"], like: ["한입초 쌈", "코코넛 솔잎죽", "코코넛 만능 녹즙"], hate: ["딸기 케이크", "마시멜로 마카롱", "와앙 딸기 케이크", "저당 마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "엘레나": {
        names: { ko: "엘레나", en: "Elena", zhCN: "埃蕾娜", zhTW: "", ja: "エレナ" },
        food: { verylike: ["뜨거운 냉동 아메리카노"], like: ["우주식량", "따뜻한 아이스 아메리카노", "ANSA 우주식량"], hate: ["허니갈릭 살몬", "비밀의 포도주스", "로얄 허니갈릭 살몬", "1급 비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "제이드": {
        names: { ko: "제이드", en: "Jade", zhCN: "婕德", zhTW: "", ja: "ジェイド" },
        food: { verylike: ["트리플 민트 초코 아이스크림"], like: ["용족 사탕", "민트 초코 아이스크림", "용족 세공 사탕"], hate: ["미숫가루", "만화 고기 구이", "927곡 미숫가루", "해적 만화 고기 구이"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "프리클": {
        names: { ko: "프리클", en: "Fricle", zhCN: "芙莉克", zhTW: "", ja: "フリックル" },
        food: { verylike: ["927곡 미숫가루"], like: ["매듭 빵", "미숫가루", "하트 매듭 빵"], hate: ["캬라멜 팝콘", "UFC 당근 튀김", "엘플릭스 캬라멜 팝콘", "UFC 야채 튀김"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "실라": {
        names: { ko: "실라", en: "Sylla", zhCN: "希拉", zhTW: "", ja: "シーラ" },
        food: { verylike: ["수소 커틀릿"], like: ["꿀단지", "꿀꿀단지", "공기 커틀릿"], hate: ["우주식량", "유령 푸딩", "ANSA 우주식량", "악령 푸딩"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "멜루나": {
        names: { ko: "멜루나", en: "Meluna", zhCN: "梅芦娜", zhTW: "", ja: "メロナ" },
        food: { verylike: ["머스크 멜론 보코치니"], like: ["한입초 쌈", "두입초 쌈", "멜론 보코치니"], hate: ["UFC 당근 튀김", "마시멜로 마카롱", "UFC 야채 튀김", "저당 마시멜로 마카롱"] },
        stats: {
            default: { grade: 3, type: "냉정" },
            global: { grade: 2, type: "냉정" }
        }
    },
    "아멜리아": {
        names: { ko: "아멜리아", en: "Amelia", zhCN: "艾蜜莉雅", zhTW: "", ja: "アメリア" },
        food: { verylike: ["ANSA 우주식량"], like: ["우주식량", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"], hate: ["코코넛 솔잎죽", "쌀밥 한 공기", "코코넛 만능 녹즙", "찹쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "피코라": {
        names: { ko: "피코라", en: "Picora", zhCN: "皮可拉", zhTW: "", ja: "ピコラ" },
        food: { verylike: ["백금탕후루"], like: ["금탕후루", "따뜻한 아이스 아메리카노", "뜨거운 냉동 아메리카노"], hate: ["딸기 케이크", "초콜릿 아이스크림", "와앙 딸기 케이크", "딥다크 초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "코미(수영복)": {
        names: { ko: "코미(수영복)", en: "Kommy(Swimsuit)", zhCN: "柯米(泳装)", zhTW: "", ja: "" },
        food: { verylike: ["고급 캔 사료"], like: ["캔 사료", "캬라멜 팝콘", "엘플릭스 캬라멜 팝콘"], hate: ["UFC 당근 튀김", "만화 고기 구이", "UFC 야채 튀김", "해적 만화 고기 구이"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "바롱": {
        names: { ko: "바롱", en: "Barong", zhCN: "巴隆", zhTW: "", ja: "" },
        food: { verylike: ["보물 타르트"], like: ["계피맛 알사탕", "보석 타르트", "계피맛 건강 알사탕"], hate: ["한입초 쌈", "우주식량", "두입초 쌈", "ANSA 우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "그윈": {
        names: { ko: "그윈", en: "Gwynn", zhCN: "格温", zhTW: "", ja: "" },
        food: { verylike: ["로얄 허니갈릭 살몬"], like: ["허니갈릭 살몬", "민트 초코 아이스크림", "트리플 민트 초코 아이스크림"], hate: ["용족 사탕", "캔 사료", "용족 세공 사탕", "고급 캔 사료"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "아이시아": {
        names: { ko: "아이시아", en: "Eisia", zhCN: "艾西亚", zhTW: "", ja: "" },
        food: { verylike: ["딥다크 초콜릿 아이스크림"], like: ["초콜릿 아이스크림", "민트 초코 아이스크림", "트리플 민트 초코 아이스크림"], hate: ["멜론 보코치니", "머스크 멜론 보코치니", "한입초 쌈", "두입초 쌈"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "리코타": {
        names: { ko: "리코타", en: "Ricotta", zhCN: "里科塔", zhTW: "", ja: "" },
        food: { verylike: ["로얄 허니갈릭 살몬"], like: ["허니갈릭 살몬", "한입초 쌈", "두입초 쌈"], hate: ["고급 캔 사료", "캔 사료", "ANSA 우주식량", "우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "디아나(왕년)": {
        names: { ko: "디아나(왕년)", en: "Diana(Yester)", zhCN: "黛安(往昔)", zhTW: "", ja: "" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["매듭 빵", "만화 고기 구이", "하트 매듭 빵"], hate: ["캬라멜 팝콘", "멜론 보코치니", "엘플릭스 캬라멜 팝콘", "머스크 멜론 보코치니"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "시저": {
        names: { ko: "시저", en: "Scizor", zhCN: "凯撒", zhTW: "", ja: "" },
        food: { verylike: ["딥다크 초콜릿 아이스크림"], like: ["초콜릿 아이스크림", "공기 커틀릿", "수소 커틀릿"], hate: ["만화 고기 구이", "해적 만화 고기 구이", "우주식량", "ANSA 우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "베니(베니)": {
        names: { ko: "베니(베니)", en: "Beni(Beni)", zhCN: "班尼(班尼)", zhTW: "", ja: "" },
        food: { verylike: ["꿀꿀단지"], like: ["꿀단지", "허니갈릭 살몬", "로얄 허니갈릭 살몬"], hate: ["용족 사탕", "따뜻한 아이스 아메리카노", "용족 세공 사탕", "뜨거운 냉동 아메리카노"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "에스피": {
        names: { ko: "에스피", en: "Espi", zhCN: "埃斯皮", zhTW: "", ja: "エスピー" },
        food: { verylike: ["딥다크 초콜릿 아이스크림"], like: ["UFC 당근 튀김", "초콜릿 아이스크림", "UFC 야채 튀김"], hate: ["캬라멜 팝콘", "꿀단지", "엘플릭스 캬라멜 팝콘", "꿀꿀단지"] },
        stats: { default: { grade: 2, type: "냉정" } }
    },
    "레테": {
        names: { ko: "레테", en: "Lethe", zhCN: "勒忒", zhTW: "", ja: "" },
        food: { verylike: ["용족 세공 사탕"], like: ["공기 커틀릿", "용족 사탕", "수소 커틀릿"], hate: ["해초 샐러드", "코코넛 솔잎죽", "코코넛 만능 녹즙", "해초 포케"] },
        stats: { default: { grade: 2, type: "냉정" } }
    },
    "칸타": {
        names: { ko: "칸타", en: "Canta", zhCN: "康塔", zhTW: "", ja: "" },
        food: { like: ["딸기 케이크", "캔 사료", "고급 캔 사료", "와앙 딸기 케이크"], hate: ["레몬차", "공기 커틀릿", "유기농 레몬차", "수소 커틀릿"] },
        stats: { default: { grade: 2, type: "냉정" } }
    },
    "레이지": {
        names: { ko: "레이지", en: "Lazy", zhCN: "雷吉", zhTW: "", ja: "レイジー" },
        food: { verylike: ["고급 캔 사료"], like: ["따뜻한 아이스 아메리카노", "캔 사료", "뜨거운 냉동 아메리카노"], hate: ["매듭 빵", "하트 매듭 빵", "비밀의 포도주스", "1급 비밀의 포도주스"] },
        stats: {
            default: { grade: 1, type: "냉정" },
            global: { grade: 2, type: "냉정" }
        }
    },
    "파트라": {
        names: { ko: "파트라", en: "Patula", zhCN: "帕特拉", zhTW: "", ja: "パトラ" },
        food: { verylike: ["트리플 민트 초코 아이스크림"], like: ["민트 초코 아이스크림", "딸기 케이크", "와앙 딸기 케이크"], hate: ["우주식량", "ANSA 우주식량", "캔 사료", "고급 캔 사료"] },
        stats: { default: { grade: 1, type: "냉정" } }
    },

    // 광기
    "클로에": {
        names: { ko: "클로에", en: "Chloe", zhCN: "克萝伊", zhTW: "", ja: "クロエ" },
        food: { verylike: ["하트 매듭 빵"], like: ["매듭 빵", "레몬차", "유기농 레몬차"], hate: ["용족 사탕", "공기 커틀릿", "용족 세공 사탕", "수소 커틀릿"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "리츠": {
        names: { ko: "리츠", en: "Leets", zhCN: "丽兹", zhTW: "", ja: "リッツ" },
        food: { verylike: ["용족 세공 사탕"], like: ["용족 사탕", "공기 커틀릿", "수소 커틀릿"], hate: ["꿀단지", "보석 타르트", "꿀꿀단지", "보물 타르트"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "셰이디": {
        names: { ko: "셰이디", en: "Shaydi", zhCN: "夏迪", zhTW: "", ja: "シェイディ" },
        food: { verylike: ["악령 푸딩"], like: ["석류석 열매", "유령 푸딩", "석류석 화채"], hate: ["캔 사료", "호박 스프", "고급 캔 사료", "호박 스튜"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "시스트": {
        names: { ko: "시스트", en: "Sist", zhCN: "茜斯特", zhTW: "", ja: "シスト" },
        food: { verylike: ["머스크 멜론 보코치니"], like: ["따뜻한 아이스 아메리카노", "멜론 보코치니", "뜨거운 냉동 아메리카노"], hate: ["계피맛 알사탕", "민트 초코 아이스크림", "계피맛 건강 알사탕", "트리플 민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "앨리스": {
        names: { ko: "앨리스", en: "Alice", zhCN: "爱丽丝", zhTW: "", ja: "アリス" },
        food: { verylike: ["유기농 레몬차"], like: ["레몬차", "유령 푸딩", "악령 푸딩"], hate: ["해초 샐러드", "따뜻한 아이스 아메리카노", "해초 포케", "뜨거운 냉동 아메리카노"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "벨리타": {
        names: { ko: "벨리타", en: "Belita", zhCN: "贝丽塔", zhTW: "", ja: "ベリータ" },
        food: { verylike: ["와앙 딸기 케이크"], like: ["딸기 케이크", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"], hate: ["공기 커틀릿", "민트 초코 아이스크림", "수소 커틀릿", "트리플 민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "네르": {
        names: { ko: "네르", en: "Ner", zhCN: "涅尔", zhTW: "", ja: "" },
        food: { verylike: ["저당 마시멜로 마카롱"], like: ["마시멜로 마카롱", "멜론 보코치니", "머스크 멜론 보코치니"], hate: ["캬라멜 팝콘", "해초 샐러드", "엘플릭스 캬라멜 팝콘", "해초 포케"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "디아나": {
        names: { ko: "디아나", en: "Diana", zhCN: "黛安娜", zhTW: "", ja: "ディアナ" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["매듭 빵", "만화 고기 구이", "하트 매듭 빵"], hate: ["캬라멜 팝콘", "멜론 보코치니", "엘플릭스 캬라멜 팝콘", "머스크 멜론 보코치니"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "롤렛": {
        names: { ko: "롤렛", en: "Rollett", zhCN: "罗莱特", zhTW: "", ja: "" },
        food: { verylike: ["소프트 크림 브륄레"], like: ["크림 브륄레", "멜론 보코치니", "머스크 멜론 보코치니"], hate: ["비밀의 포도주스", "금탕후루", "1급 비밀의 포도주스", "백금탕후루"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "리뉴아": {
        names: { ko: "리뉴아", en: "Renewa", zhCN: "莉纽阿", zhTW: "", ja: "" },
        food: { verylike: ["유기농 레몬차"], like: ["레몬차", "우주식량", "ANSA 우주식량"], hate: ["캬라멜 팝콘", "비밀의 포도주스", "엘플릭스 캬라멜 팝콘", "1급 비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "피라": {
        names: { ko: "피라", en: "Pira", zhCN: "皮拉", zhTW: "", ja: "" },
        food: { like: ["비밀의 포도주스", "용족 사탕", "1급 비밀의 포도주스", "용족 세공 사탕"], hate: ["캔 사료", "보석 타르트", "고급 캔 사료", "보물 타르트"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "폴랑": {
        names: { ko: "폴랑", en: "Polan", zhCN: "破朗", zhTW: "", ja: "" },
        food: { verylike: ["와앙 딸기 케이크"], like: ["딸기 케이크", "쌀밥 한 공기", "찹쌀밥 한 공기"], hate: ["크림 브륄레", "소프트 크림 브륄레", "비밀의 포도주스", "1급 비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "림(혼돈)": {
        names: { ko: "림(혼돈)", en: "Rim(Chaos)", zhCN: "琳(混沌)", zhTW: "", ja: "" },
        food: { verylike: ["호박 스튜"], like: ["호박 스프", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["마시멜로 마카롱", "크림 브륄레", "저당 마시멜로 마카롱", "소프트 크림 브륄레"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "네티": {
        names: { ko: "네티", en: "Neti", zhCN: "内蒂", zhTW: "", ja: "" },
        food: { verylike: ["용족 세공 사탕"], like: ["용족 사탕", "보석 타르트", "보물 타르트"], hate: ["캔 사료", "고급 캔 사료", "공기 커틀릿", "수소 커틀릿"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "아네트": {
        names: { ko: "아네트", en: "Arnet", zhCN: "阿妮特", zhTW: "", ja: "" },
        food: { verylike: ["엘플릭스 캬라멜 팝콘"], like: ["캬라멜 팝콘", "보석 타르트", "보물 타르트"], hate: ["캔 사료", "고급 캔 사료", "따뜻한 아이스 아메리카노", "뜨거운 냉동 아메리카노"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "티그(영웅)": {
        names: { ko: "티그(영웅)", en: "Tig(Hero)", zhCN: "提格(英雄)", zhTW: "", ja: "" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["만화 고기 구이", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["캔 사료", "계피맛 알사탕", "고급 캔 사료", "계피맛 건강 알사탕"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "하이디": {
        names: { ko: "하이디", en: "Heidi", zhCN: "海蒂", zhTW: "", ja: "" },
        food: { verylike: ["보물 타르트"], like: ["보석 타르트", "하트 매듭 빵", "매듭 빵"], hate: ["우주식량", "ANSA 우주식량", "쌀밥 한 공기", "찹쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "다야(퓨어샤인)": {
        names: { ko: "다야(퓨어샤인)", en: "Daya(PureShine)", zhCN: "达雅(纯真闪耀)", zhTW: "", ja: "" },
        food: { verylike: ["보물 타르트"], like: ["레몬차", "보석 타르트", "유기농 레몬차"], hate: ["캔 사료", "용족 사탕", "고급 캔 사료", "용족 세공 사탕"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "마에스트로 2호": {
        names: { ko: "마에스트로 2호", en: "MaestroMK2", zhCN: "大师2号", zhTW: "", ja: "マエストロMK2" },
        food: { verylike: ["석류석 화채"], like: ["석류석 열매", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["미숫가루", "유령 푸딩", "927곡 미숫가루", "악령 푸딩"] },
        stats: { default: { grade: 2, type: "광기" } }
    },
    "이프리트": {
        names: { ko: "이프리트", en: "Ifrit", zhCN: "伊芙利特", zhTW: "", ja: "イフリート" },
        food: { verylike: ["소프트 크림 브륄레"], like: ["용족 사탕", "크림 브륄레", "용족 세공 사탕"], hate: ["따뜻한 아이스 아메리카노", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림", "뜨거운 냉동 아메리카노"] },
        stats: {
            default: { grade: 2, type: "광기" },
            global: { grade: 3, type: "광기" }
        }
    },
    "마요": {
        names: { ko: "마요", en: "Mayo", zhCN: "玛约", zhTW: "", ja: "マヨ" },
        food: { verylike: ["1급 비밀의 포도주스"], like: ["쌀밥 한 공기", "비밀의 포도주스", "찹쌀밥 한 공기"], hate: ["용족 사탕", "매듭 빵", "용족 세공 사탕", "하트 매듭 빵"] },
        stats: {
            default: { grade: 2, type: "광기" },
            global: { grade: 3, type: "광기" }
        }
    },
    "유미미": {
        names: { ko: "유미미", en: "Yumimi", zhCN: "刘美美", zhTW: "", ja: "ユミミ" },
        food: { verylike: ["두입초 쌈"], like: ["한입초 쌈", "우주식량", "ANSA 우주식량"], hate: ["석류석 화채", "석류석 열매", "따뜻한 아이스 아메리카노", "뜨거운 냉동 아메리카노"] },
        stats: {
            default: { grade: 1, type: "광기" },
            global: { grade: 2, type: "광기" }
        }
    },
    "메죵": {
        names: { ko: "메죵", en: "Maison", zhCN: "美空", zhTW: "", ja: "メゾン" },
        food: { verylike: ["고급 캔 사료"], like: ["캔 사료", "해초 샐러드", "해초 포케"], hate: ["따뜻한 아이스 아메리카노", "뜨거운 냉동 아메리카노", "금탕후루", "백금탕후루"] },
        stats: { default: { grade: 1, type: "광기" } }
    },

    // 활발
    "에피카": {
        names: { ko: "에피카", en: "Epica", zhCN: "埃皮卡", zhTW: "", ja: "エピカ" },
        food: { verylike: ["엘플릭스 캬라멜 팝콘"], like: ["캬라멜 팝콘", "만화 고기 구이", "해적 만화 고기 구이"], hate: ["캔 사료", "매듭 빵", "고급 캔 사료", "하트 매듭 빵"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "우이": {
        names: { ko: "우이", en: "Ui", zhCN: "雨伊", zhTW: "", ja: "ウイ" },
        food: { verylike: ["해초 포케"], like: ["해초 샐러드", "만화 고기 구이", "해적 만화 고기 구이"], hate: ["따뜻한 아이스 아메리카노", "호박 스프", "뜨거운 냉동 아메리카노", "호박 스튜"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "루드": {
        names: { ko: "루드", en: "Rude", zhCN: "鲁德", zhTW: "", ja: "ルード" },
        food: { verylike: ["927곡 미숫가루"], like: ["우주식량", "미숫가루", "ANSA 우주식량"], hate: ["한입초 쌈", "쌀밥 한 공기", "두입초 쌈", "찹쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "셀리네": {
        names: { ko: "셀리네", en: "Selline", zhCN: "赛琳娜", zhTW: "", ja: "" },
        food: { verylike: ["악령 푸딩"], like: ["비밀의 포도주스", "유령 푸딩", "1급 비밀의 포도주스"], hate: ["마시멜로 마카롱", "레몬차", "저당 마시멜로 마카롱", "유기농 레몬차"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "티그": {
        names: { ko: "티그", en: "Tig", zhCN: "提格", zhTW: "", ja: "" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["만화 고기 구이", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["캔 사료", "계피맛 알사탕", "고급 캔 사료", "계피맛 건강 알사탕"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "루포": {
        names: { ko: "루포", en: "Rufo", zhCN: "卢波", zhTW: "", ja: "ルポ" },
        food: { verylike: ["로얄 허니갈릭 살몬"], like: ["허니갈릭 살몬", "멜론 보코치니", "머스크 멜론 보코치니"], hate: ["꿀단지", "호박 스프", "꿀꿀단지", "호박 스튜"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "버터": {
        names: { ko: "버터", en: "Butter", zhCN: "黄油", zhTW: "", ja: "バター" },
        food: { verylike: ["엘플릭스 캬라멜 팝콘"], like: ["캬라멜 팝콘", "캔 사료", "고급 캔 사료"], hate: ["마시멜로 마카롱", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림", "저당 마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "칸나": {
        names: { ko: "칸나", en: "Canna", zhCN: "康娜", zhTW: "", ja: "カンナ" },
        food: { verylike: ["찹쌀밥 한 공기"], like: ["만화 고기 구이", "쌀밥 한 공기", "해적 만화 고기 구이"], hate: ["레몬차", "코코넛 솔잎죽", "코코넛 만능 녹즙", "유기농 레몬차"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "슈팡": {
        names: { ko: "슈팡", en: "Shoupan", zhCN: "舒胖", zhTW: "", ja: "" },
        food: { verylike: ["ANSA 우주식량"], like: ["초콜릿 아이스크림", "우주식량", "딥다크 초콜릿 아이스크림"], hate: ["해초 샐러드", "호박 스프", "호박 스튜", "해초 포케"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "모모": {
        names: { ko: "모모", en: "Momo", zhCN: "小桃", zhTW: "", ja: "モモ" },
        food: { verylike: ["꿀꿀단지"], like: ["공기 커틀릿", "꿀단지", "수소 커틀릿"], hate: ["계피맛 알사탕", "크림 브륄레", "계피맛 건강 알사탕", "소프트 크림 브륄레"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "스피키(메이드)": {
        names: { ko: "스피키(메이드)", en: "Speaki(Maid)", zhCN: "斯碧琪(女仆)", zhTW: "", ja: "" },
        food: { verylike: ["계피맛 건강 알사탕"], like: ["계피맛 알사탕", "석류석 열매", "석류석 화채"], hate: ["매듭 빵", "호박 스프", "호박 스튜", "하트 매듭 빵"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "슈로": {
        names: { ko: "슈로", en: "Suro", zhCN: "修罗", zhTW: "", ja: "" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["만화 고기 구이", "캔 사료", "고급 캔 사료"], hate: ["한입초 쌈", "두입초 쌈", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "벨라": {
        names: { ko: "벨라", en: "Vela", zhCN: "贝拉", zhTW: "", ja: "" },
        food: { verylike: ["악령 푸딩"], like: ["유령 푸딩", "호박 스튜", "호박 스프"], hate: ["하트 매듭 빵", "매듭 빵", "쌀밥 한 공기", "찹쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "아르코": {
        names: { ko: "아르코", en: "Arco", zhCN: "阿尔柯", zhTW: "", ja: "" },
        food: { verylike: ["1급 비밀의 포도주스"], like: ["비밀의 포도주스", "크림 브륄레", "소프트 크림 브륄레"], hate: ["레몬차", "유기농 레몬차", "우주식량", "ANSA 우주식량"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "마카샤": {
        names: { ko: "마카샤", en: "Makasha", zhCN: "玛卡莎", zhTW: "", ja: "" },
        food: { verylike: ["927곡 미숫가루"], like: ["미숫가루", "뜨거운 냉동 아메리카노", "따뜻한 아이스 아메리카노"], hate: ["코코넛 만능 녹즙", "코코넛 솔잎죽", "마시멜로 마카롱", "저당 마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "미로": {
        names: { ko: "미로", en: "Miro", zhCN: "米洛", zhTW: "", ja: "" },
        food: { verylike: ["트리플 민트 초코 아이스크림"], like: ["민트 초코 아이스크림", "꿀단지", "꿀꿀단지"], hate: ["유령 푸딩", "악령 푸딩", "호박 스튜", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "셰이디(역전)": {
        names: { ko: "셰이디(역전)", en: "Shaydi(Twisted)", zhCN: "夏迪(逆转)", zhTW: "", ja: "" },
        food: { verylike: ["악령 푸딩"], like: ["석류석 열매", "유령 푸딩", "석류석 화채"], hate: ["캔 사료", "호박 스프", "고급 캔 사료", "호박 스튜"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "마리": {
        names: { ko: "마리", en: "Marie", zhCN: "玛丽", zhTW: "", ja: "マリー" },
        food: { verylike: ["UFC 야채 튀김"], like: ["UFC 당근 튀김", "크림 브륄레", "소프트 크림 브륄레"], hate: ["계피맛 알사탕", "석류석 열매", "계피맛 건강 알사탕", "석류석 화채"] },
        stats: { default: { grade: 2, type: "활발" } }
    },
    "베니": {
        names: { ko: "베니", en: "Beni", zhCN: "班尼", zhTW: "", ja: "ベニー" },
        food: { verylike: ["꿀꿀단지"], like: ["꿀단지", "허니갈릭 살몬", "로얄 허니갈릭 살몬"], hate: ["용족 사탕", "따뜻한 아이스 아메리카노", "용족 세공 사탕", "뜨거운 냉동 아메리카노"] },
        stats: {
            default: { grade: 2, type: "활발" },
            global: { grade: 3, type: "활발" }
        }
    },
    "쥬비": {
        names: { ko: "쥬비", en: "Jubee", zhCN: "茱比", zhTW: "", ja: "ジュビー" },
        food: { verylike: ["꿀꿀단지"], like: ["꿀단지", "마시멜로 마카롱", "저당 마시멜로 마카롱"], hate: ["한입초 쌈", "만화 고기 구이", "두입초 쌈", "해적 만화 고기 구이"] },
        stats: { default: { grade: 2, type: "활발" } }
    },
    "바나": {
        names: { ko: "바나", en: "Bana", zhCN: "芭娜", zhTW: "", ja: "" },
        food: { verylike: ["와앙 딸기 케이크"], like: ["딸기 케이크", "UFC 당근 튀김", "UFC 야채 튀김"], hate: ["석류석 열매", "레몬차", "석류석 화채", "유기농 레몬차"] },
        stats: { default: { grade: 2, type: "활발" } }
    },
    "카렌": {
        names: { ko: "카렌", en: "Carren", zhCN: "卡伦", zhTW: "", ja: "カレン" },
        food: { verylike: ["UFC 야채 튀김"], like: ["딸기 케이크", "UFC 당근 튀김", "와앙 딸기 케이크"], hate: ["계피맛 알사탕", "계피맛 건강 알사탕", "민트 초코 아이스크림", "트리플 민트 초코 아이스크림"] },
        stats: {
            default: { grade: 1, type: "활발" },
            global: { grade: 2, type: "활발" }
        }
    },
    "타이다": {
        names: { ko: "타이다", en: "Taida", zhCN: "泰达", zhTW: "", ja: "タイダー" },
        food: { verylike: ["뜨거운 냉동 아메리카노"], like: ["따뜻한 아이스 아메리카노", "금탕후루", "백금탕후루"], hate: ["두입초 쌈", "한입초 쌈", "코코넛 만능 녹즙", "코코넛 솔잎죽"] },
        stats: {
            default: { grade: 1, type: "활발" },
            global: { grade: 2, type: "활발" }
        }
    },
    "밍스": {
        names: { ko: "밍스", en: "Mynx", zhCN: "米雪", zhTW: "", ja: "ミンス" },
        food: { verylike: ["고급 캔 사료"], like: ["캔 사료", "한입초 쌈", "두입초 쌈"], hate: ["석류석 화채", "석류석 열매", "UFC 야채 튀김", "UFC 당근 튀김"] },
        stats: { default: { grade: 1, type: "활발" } }
    },

    // 우울
    "시온 더 다크불릿": {
        names: { ko: "시온 더 다크불릿", en: "xXionx", zhCN: "x锡安x", zhTW: "", ja: "シオン・ザ・DB" },
        food: { verylike: ["딥다크 초콜릿 아이스크림"], like: ["초콜릿 아이스크림", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["캔 사료", "보석 타르트", "고급 캔 사료", "보물 타르트"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "코미": {
        names: { ko: "코미", en: "Kommy", zhCN: "柯米", zhTW: "", ja: "コミー" },
        food: { verylike: ["고급 캔 사료"], like: ["캬라멜 팝콘", "캔 사료", "엘플릭스 캬라멜 팝콘"], hate: ["UFC 당근 튀김", "만화 고기 구이", "UFC 야채 튀김", "해적 만화 고기 구이"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "림": {
        names: { ko: "림", en: "Rim", zhCN: "琳", zhTW: "", ja: "リム" },
        food: { verylike: ["호박 스튜"], like: ["호박 스프", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["마시멜로 마카롱", "크림 브륄레", "저당 마시멜로 마카롱", "소프트 크림 브륄레"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "키디언": {
        names: { ko: "키디언", en: "Kidian", zhCN: "基迪恩", zhTW: "", ja: "ギデオン" },
        food: { verylike: ["하트 매듭 빵"], like: ["캔 사료", "매듭 빵", "고급 캔 사료"], hate: ["금탕후루", "미숫가루", "백금탕후루", "927곡 미숫가루"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "블랑셰": {
        names: { ko: "블랑셰", en: "Blanchet", zhCN: "布蓝琪", zhTW: "", ja: "ブランセ" },
        food: { verylike: ["유기농 레몬차"], like: ["보석 타르트", "레몬차", "보물 타르트"], hate: ["공기 커틀릿", "우주식량", "수소 커틀릿", "ANSA 우주식량"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "에슈르": {
        names: { ko: "에슈르", en: "Ashur", zhCN: "艾舒尔", zhTW: "", ja: "エシュール" },
        food: { verylike: ["UFC 야채 튀김"], like: ["캬라멜 팝콘", "UFC 당근 튀김", "엘플릭스 캬라멜 팝콘"], hate: ["석류석 열매", "멜론 보코치니", "석류석 화채", "머스크 멜론 보코치니"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "힐데": {
        names: { ko: "힐데", en: "Hilde", zhCN: "希尔德", zhTW: "", ja: "ヒルデ" },
        food: { verylike: ["로얄 허니갈릭 살몬"], like: ["우주식량", "허니갈릭 살몬", "ANSA 우주식량"], hate: ["용족 사탕", "마시멜로 마카롱", "저당 마시멜로 마카롱", "용족 세공 사탕"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "포셔": {
        names: { ko: "포셔", en: "Posher", zhCN: "珀榭", zhTW: "", ja: "ポーシャー" },
        food: { verylike: ["코코넛 만능 녹즙"], like: ["우주식량", "코코넛 솔잎죽", "ANSA 우주식량"], hate: ["허니갈릭 살몬", "호박 스프", "호박 스튜", "로얄 허니갈릭 살몬"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "리스티": {
        names: { ko: "리스티", en: "Risty", zhCN: "莉斯缇", zhTW: "", ja: "" },
        food: { verylike: ["석류석 화채"], like: ["석류석 열매", "따뜻한 아이스 아메리카노", "뜨거운 냉동 아메리카노"], hate: ["멜론 보코치니", "허니갈릭 살몬", "머스크 멜론 보코치니", "로얄 허니갈릭 살몬"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "스노키": {
        names: { ko: "스노키", en: "Snorky", zhCN: "斯诺琪", zhTW: "", ja: "" },
        food: { verylike: ["찹쌀밥 한 공기"], like: ["미숫가루", "쌀밥 한 공기", "927곡 미숫가루"], hate: ["비밀의 포도주스", "UFC 당근 튀김", "1급 비밀의 포도주스", "UFC 야채 튀김"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "죠안": {
        names: { ko: "죠안", en: "Joanne", zhCN: "琼安", zhTW: "", ja: "" },
        food: { verylike: ["927곡 미숫가루"], like: ["미숫가루", "민트 초코 아이스크림", "트리플 민트 초코 아이스크림"], hate: ["딸기 케이크", "마시멜로 마카롱", "와앙 딸기 케이크", "저당 마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "리온": {
        names: { ko: "리온", en: "Lion", zhCN: "里昂", zhTW: "", ja: "" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["만화 고기 구이", "허니갈릭 살몬", "로얄 허니갈릭 살몬"], hate: ["비밀의 포도주스", "1급 비밀의 포도주스", "ANSA 우주식량", "우주식량"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "샤샤": {
        names: { ko: "샤샤", en: "Shasha", zhCN: "夏夏", zhTW: "", ja: "" },
        food: { verylike: ["하트 매듭 빵"], like: ["매듭 빵", "딸기 케이크", "와앙 딸기 케이크"], hate: ["해초 포케", "해초 샐러드", "계피맛 알사탕", "계피맛 건강 알사탕"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "오르": {
        names: { ko: "오르", en: "Orr", zhCN: "欧尔", zhTW: "", ja: "" },
        food: { verylike: ["뜨거운 냉동 아메리카노"], like: ["따뜻한 아이스 아메리카노", "수소 커틀릿", "공기 커틀릿"], hate: ["크림 브륄레", "소프트 크림 브륄레", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "로네(시장)": {
        names: { ko: "로네(시장)", en: "Rohne(Mayor)", zhCN: "洛涅(市长)", zhTW: "", ja: "" },
        food: { verylike: ["백금탕후루"], like: ["금탕후루", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"], hate: ["우주식량", "공기 커틀릿", "ANSA 우주식량", "수소 커틀릿"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "아사나": {
        names: { ko: "아사나", en: "Asana", zhCN: "阿萨娜", zhTW: "", ja: "" },
        food: { verylike: ["두입초 쌈"], like: ["한입초 쌈", "코코넛 솔잎죽", "코코넛 만능 녹즙"], hate: ["딸기 케이크", "마시멜로 마카롱", "와앙 딸기 케이크", "저당 마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "요미": {
        names: { ko: "요미", en: "Yomi", zhCN: "优米", zhTW: "", ja: "ヨミ" },
        food: { verylike: ["호박 스튜"], like: ["한입초 쌈", "두입초 쌈", "호박 스프"], hate: ["딸기 케이크", "크림 브륄레", "와앙 딸기 케이크", "소프트 크림 브륄레"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "레비": {
        names: { ko: "레비", en: "Levi", zhCN: "莱薇", zhTW: "", ja: "レヴィ" },
        food: { verylike: ["엘플릭스 캬라멜 팝콘"], like: ["캬라멜 팝콘", "UFC 당근 튀김", "UFC 야채 튀김"], hate: ["크림 브륄레", "코코넛 솔잎죽", "코코넛 만능 녹즙", "소프트 크림 브륄레"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "실피르": {
        names: { ko: "실피르", en: "Silphir", zhCN: "希菲尔", zhTW: "", ja: "シルフィール" },
        food: { verylike: ["백금탕후루"], like: ["금탕후루", "유령 푸딩", "악령 푸딩"], hate: ["코코넛 솔잎죽", "해초 샐러드", "코코넛 만능 녹즙", "해초 포케"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "페스타": {
        names: { ko: "페스타", en: "Festa", zhCN: "菲斯塔", zhTW: "", ja: "フェスタ" },
        food: { verylike: ["수소 커틀릿"], like: ["공기 커틀릿", "비밀의 포도주스", "1급 비밀의 포도주스"], hate: ["캔 사료", "우주식량", "ANSA 우주식량", "고급 캔 사료"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "바리에": {
        names: { ko: "바리에", en: "Barie", zhCN: "巴丽叶", zhTW: "", ja: "" },
        food: { verylike: ["저당 마시멜로 마카롱"], like: ["UFC 당근 튀김", "마시멜로 마카롱", "UFC 야채 튀김"], hate: ["용족 사탕", "따뜻한 아이스 아메리카노", "용족 세공 사탕", "뜨거운 냉동 아메리카노"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "쵸피": {
        names: { ko: "쵸피", en: "Chopi", zhCN: "乔菲", zhTW: "", ja: "チョッピー" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["만화 고기 구이", "캔 사료", "고급 캔 사료"], hate: ["유령 푸딩", "악령 푸딩", "멜론 보코치니", "머스크 멜론 보코치니"] },
        stats: {
            default: { grade: 1, type: "우울" },
            global: { grade: 2, type: "우울" }
        }
    },
    "베루": {
        names: { ko: "베루", en: "Veroo", zhCN: "贝鲁", zhTW: "", ja: "ベル" },
        food: { verylike: ["악령 푸딩"], like: ["유령 푸딩", "캬라멜 팝콘", "엘플릭스 캬라멜 팝콘"], hate: ["수소 커틀릿", "공기 커틀릿", "우주식량", "ANSA 우주식량"] },
        stats: { default: { grade: 1, type: "우울" } }
    },

    // 공명
    "우로스": {
        names: { ko: "우로스", en: "Uros", zhCN: "乌洛斯", zhTW: "", ja: "" },
        food: { verylike: ["해적 만화 고기 구이"], like: ["만화 고기 구이", "캔 사료", "고급 캔 사료"], hate: ["한입초 쌈", "두입초 쌈", "초콜릿 아이스크림", "딥다크 초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "공명" } }
    }
};
