// 성격 목록
export const typeList = ["공명", "순수", "냉정", "광기", "활발", "우울"];


// verylike 1 + like 1 + hate 2
// 단, verylike가 없을 경우 like 2 + hate 2
export const charInfo = {
    // 순수
    "비비": {
        names: { ko: "비비", en: "Vivi", 'zh-CN': "薇薇", 'zh-TW': "", ja: "ヴィヴィ" },
        food: { verylike: ["따뜻한 아이스 아메리카노"], like: ["계피맛 알사탕"], hate: ["캔 사료", "공기 커틀릿"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "다야": {
        names: { ko: "다야", en: "Daya", 'zh-CN': "达雅", 'zh-TW': "", ja: "ダーヤ" },
        food: { verylike: ["보석 타르트"], like: ["레몬차"], hate: ["캔 사료", "용족 사탕"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "나이아": {
        names: { ko: "나이아", en: "Naia", 'zh-CN': "奈亚", 'zh-TW': "", ja: "ナイア" },
        food: { verylike: ["해초 샐러드"], like: ["금탕후루"], hate: ["우주식량", "비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "에르핀": {
        names: { ko: "에르핀", en: "Erpin", 'zh-CN': "埃尔芬", 'zh-TW': "", ja: "エルフィン" },
        food: { verylike: ["딸기 케이크"], like: ["초콜릿 아이스크림"], hate: ["코코넛 솔잎죽", "민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "캬롯": {
        names: { ko: "캬롯", en: "Kyarot", 'zh-CN': "卡萝特", 'zh-TW': "", ja: "キャロット" },
        food: { verylike: ["한입초 쌈"], like: ["꿀단지"], hate: ["따뜻한 아이스 아메리카노", "캔 사료"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "헤일리": {
        names: { ko: "헤일리", en: "Haley", 'zh-CN': "海莉", 'zh-TW': "", ja: "ヘイリー" },
        food: { verylike: ["쌀밥 한 공기"], like: ["레몬차"], hate: ["따뜻한 아이스 아메리카노", "민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "셰럼": {
        names: { ko: "셰럼", en: "Sherum", 'zh-CN': "夏乐", 'zh-TW': "", ja: "" },
        food: { like: ["따뜻한 아이스 아메리카노", "마시멜로 마카롱"], hate: ["민트 초코 아이스크림", "캬라멜 팝콘"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "오팔": {
        names: { ko: "오팔", en: "Opal", 'zh-CN': "欧珀", 'zh-TW': "", ja: "" },
        food: { verylike: ["보석 타르트"], like: ["금탕후루"], hate: ["캔 사료", "코코넛 솔잎죽"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "란": {
        names: { ko: "란", en: "Ran", 'zh-CN': "兰", 'zh-TW': "", ja: "" },
        food: { verylike: ["비밀의 포도주스"], like: ["계피맛 알사탕"], hate: ["딸기 케이크", "공기 커틀릿"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "라이카": {
        names: { ko: "라이카", en: "Raika", 'zh-CN': "莱卡", 'zh-TW': "", ja: "" },
        food: { verylike: ["우주식량"], like: ["멜론 보코치니"], hate: ["계피맛 알사탕", "공기 커틀릿"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "마요(멋짐)": {
        names: { ko: "마요(멋짐)", en: "Mayo(Cool)", 'zh-CN': "玛约(超帅)", 'zh-TW': "", ja: "" },
        food: { verylike: ["비밀의 포도주스"], like: ["쌀밥 한 공기"], hate: ["용족 사탕", "매듭 빵"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "캐시": {
        names: { ko: "캐시", en: "Kathy", 'zh-CN': "凯茜", 'zh-TW': "", ja: "" },
        food: { verylike: ["우주식량"], like: ["레몬차"], hate: ["공기 커틀릿", "유령 푸딩"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "뮤트": {
        names: { ko: "뮤트", en: "Mute", 'zh-CN': "穆特", 'zh-TW': "", ja: "" },
        food: { verylike: ["비밀의 포도주스"], like: ["우주식량"], hate: ["보석 타르트", "꿀단지"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "아일라": {
        names: { ko: "아일라", en: "Ayla", 'zh-CN': "阿依拉", 'zh-TW': "", ja: "" },
        food: { verylike: ["해초 샐러드"], like: ["레몬차"], hate: ["우주식량", "석류석 열매"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "델리아": {
        names: { ko: "델리아", en: "Delia", 'zh-CN': "德莉雅", 'zh-TW': "", ja: "" },
        food: { verylike: ["민트 초코 아이스크림"], like: ["허니갈릭 살몬"], hate: ["레몬차", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "에르핀(왕도)": {
        names: { ko: "에르핀(왕도)", en: "Erpin(Royale)", 'zh-CN': "埃尔芬(王道)", 'zh-TW': "", ja: "" },
        food: { verylike: ["딸기 케이크"], like: ["초콜릿 아이스크림"], hate: ["코코넛 솔잎죽", "민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "이드(재활)": {
        names: { ko: "이드(재활)", en: "Ed(Rehab)", 'zh-CN': "伊德(康复)", 'zh-TW': "", ja: "" },
        food: { verylike: ["비밀의 포도주스"], like: ["UFC 당근 튀김"], hate: ["따뜻한 아이스 아메리카노", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "스패럿": {
        names: { ko: "스패럿", en: "Sparrot", 'zh-CN': "斯帕洛特", 'zh-TW': "", ja: "" },
        food: { verylike: ["비밀의 포도주스"], like: ["크림 브륄레"], hate: ["우주식량", "코코넛 솔잎죽"] },
        stats: { default: { grade: 3, type: "순수" } }
    },
    "가비아": {
        names: { ko: "가비아", en: "Gabia", 'zh-CN': "加维亚", 'zh-TW': "", ja: "ガヴィア" },
        food: { verylike: ["계피맛 알사탕"], like: ["레몬차"], hate: ["용족 사탕", "크림 브륄레"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" }
        }
    },
    "로네": {
        names: { ko: "로네", en: "Rohne", 'zh-CN': "洛涅", 'zh-TW': "", ja: "ローネ" },
        food: { verylike: ["금탕후루"], like: ["초콜릿 아이스크림"], hate: ["우주식량", "공기 커틀릿"], soso: ["송편"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" },
        }
    },
    "마고": {
        names: { ko: "마고", en: "Mago", 'zh-CN': "玛戈", 'zh-TW': "", ja: "マーゴ" },
        food: { verylike: ["우주식량"], like: ["캔 사료"], hate: ["한입초 쌈", "만화 고기 구이"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" }
        }
    },
    "빅우드": {
        names: { ko: "빅우드", en: "Bigwood", 'zh-CN': "大木头", 'zh-TW': "", ja: "ビッグウッド" },
        food: { verylike: ["코코넛 솔잎죽"], like: ["쌀밥 한 공기"], hate: ["한입초 쌈", "석류석 열매"] },
        stats: { default: { grade: 2, type: "순수" } }
    },
    "스피키": {
        names: { ko: "스피키", en: "Speaki", 'zh-CN': "斯碧琪", 'zh-TW': "", ja: "スピッキー" },
        food: { verylike: ["계피맛 알사탕"], like: ["석류석 열매"], hate: ["매듭 빵", "호박 스프"] },
        stats: {
            default: { grade: 2, type: "순수" },
            global: { grade: 3, type: "순수" }
        }
    },
    "사리": {
        names: { ko: "사리", en: "Sari", 'zh-CN': "莎里", 'zh-TW': "", ja: "サリー" },
        food: { verylike: ["허니갈릭 살몬"], like: ["크림 브륄레"], hate: ["미숫가루", "꿀단지"] },
        stats: {
            default: { grade: 1, type: "순수" },
            global: { grade: 2, type: "순수" }
        }
    },
    "알레트": {
        names: { ko: "알레트", en: "Allet", 'zh-CN': "阿莱特", 'zh-TW': "", ja: "アレット" },
        food: { verylike: ["우주식량"], like: ["계피맛 알사탕"], hate: ["캔 사료", "호박 스프"] },
        stats: {
            default: { grade: 1, type: "순수" },
            global: { grade: 2, type: "순수" }
        }
    },
    "큐이": {
        names: { ko: "큐이", en: "Kyuri", 'zh-CN': "路易", 'zh-TW': "", ja: "キュウイ" },
        food: { verylike: ["한입초 쌈"], like: ["딸기 케이크"], hate: ["UFC 당근 튀김", "크림 브륄레"] },
        stats: { default: { grade: 1, type: "순수" } }
    },

    // 냉정
    "이드": {
        names: { ko: "이드", en: "Ed", 'zh-CN': "伊德", 'zh-TW': "", ja: "イード" },
        food: { verylike: ["비밀의 포도주스"], like: ["UFC 당근 튀김"], hate: ["따뜻한 아이스 아메리카노", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "아야": {
        names: { ko: "아야", en: "Aya", 'zh-CN': "绫", 'zh-TW': "", ja: "アヤ" },
        food: { verylike: ["민트 초코 아이스크림"], like: ["초콜릿 아이스크림"], hate: ["따뜻한 아이스 아메리카노", "쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "벨벳": {
        names: { ko: "벨벳", en: "Velvet", 'zh-CN': "薇尔薇特", 'zh-TW': "", ja: "ベルベット" },
        food: { verylike: ["한입초 쌈"], like: ["코코넛 솔잎죽"], hate: ["딸기 케이크", "마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "엘레나": {
        names: { ko: "엘레나", en: "Elena", 'zh-CN': "埃蕾娜", 'zh-TW': "", ja: "エレナ" },
        food: { verylike: ["따뜻한 아이스 아메리카노"], like: ["우주식량"], hate: ["허니갈릭 살몬", "비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "제이드": {
        names: { ko: "제이드", en: "Jade", 'zh-CN': "婕德", 'zh-TW': "", ja: "ジェイド" },
        food: { verylike: ["민트 초코 아이스크림"], like: ["용족 사탕"], hate: ["미숫가루", "만화 고기 구이"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "프리클": {
        names: { ko: "프리클", en: "Fricle", 'zh-CN': "芙莉克", 'zh-TW': "", ja: "フリックル" },
        food: { verylike: ["미숫가루"], like: ["매듭 빵"], hate: ["캬라멜 팝콘", "UFC 당근 튀김"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "실라": {
        names: { ko: "실라", en: "Sylla", 'zh-CN': "希拉", 'zh-TW': "", ja: "シーラ" },
        food: { verylike: ["공기 커틀릿"], like: ["꿀단지"], hate: ["우주식량", "유령 푸딩"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "멜루나": {
        names: { ko: "멜루나", en: "Meluna", 'zh-CN': "梅芦娜", 'zh-TW': "", ja: "メロナ" },
        food: { verylike: ["멜론 보코치니"], like: ["한입초 쌈"], hate: ["UFC 당근 튀김", "마시멜로 마카롱"] },
        stats: {
            default: { grade: 3, type: "냉정" },
            global: { grade: 2, type: "냉정" }
        }
    },
    "아멜리아": {
        names: { ko: "아멜리아", en: "Amelia", 'zh-CN': "艾蜜莉雅", 'zh-TW': "", ja: "アメリア" },
        food: { verylike: ["우주식량"], like: ["초콜릿 아이스크림"], hate: ["코코넛 솔잎죽", "쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "피코라": {
        names: { ko: "피코라", en: "Picora", 'zh-CN': "皮可拉", 'zh-TW': "", ja: "ピコラ" },
        food: { verylike: ["금탕후루"], like: ["따뜻한 아이스 아메리카노"], hate: ["딸기 케이크", "초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "코미(수영복)": {
        names: { ko: "코미(수영복)", en: "Kommy(Swimsuit)", 'zh-CN': "柯米(泳装)", 'zh-TW': "", ja: "" },
        food: { verylike: ["캔 사료"], like: ["캬라멜 팝콘"], hate: ["UFC 당근 튀김", "만화 고기 구이"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "바롱": {
        names: { ko: "바롱", en: "Barong", 'zh-CN': "巴隆", 'zh-TW': "", ja: "バロン" },
        food: { verylike: ["보석 타르트"], like: ["계피맛 알사탕"], hate: ["한입초 쌈", "우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "그윈": {
        names: { ko: "그윈", en: "Gwynn", 'zh-CN': "格温", 'zh-TW': "", ja: "" },
        food: { verylike: ["허니갈릭 살몬"], like: ["민트 초코 아이스크림"], hate: ["용족 사탕", "캔 사료"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "아이시아": {
        names: { ko: "아이시아", en: "Eisia", 'zh-CN': "艾西亚", 'zh-TW': "", ja: "" },
        food: { verylike: ["초콜릿 아이스크림"], like: ["민트 초코 아이스크림"], hate: ["멜론 보코치니", "한입초 쌈"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "리코타": {
        names: { ko: "리코타", en: "Ricotta", 'zh-CN': "里科塔", 'zh-TW': "", ja: "" },
        food: { verylike: ["허니갈릭 살몬"], like: ["한입초 쌈"], hate: ["캔 사료", "우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "디아나(왕년)": {
        names: { ko: "디아나(왕년)", en: "Diana(Yester)", 'zh-CN': "黛安(往昔)", 'zh-TW': "", ja: "" },
        food: { verylike: ["만화 고기 구이"], like: ["매듭 빵"], hate: ["캬라멜 팝콘", "멜론 보코치니"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "시저": {
        names: { ko: "시저", en: "Scizor", 'zh-CN': "凯撒", 'zh-TW': "", ja: "" },
        food: { verylike: ["초콜릿 아이스크림"], like: ["공기 커틀릿"], hate: ["만화 고기 구이", "우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "베니(베니)": {
        names: { ko: "베니(베니)", en: "Beni(Beni)", 'zh-CN': "班尼(班尼)", 'zh-TW': "", ja: "" },
        food: { verylike: ["꿀단지"], like: ["허니갈릭 살몬"], hate: ["용족 사탕", "따뜻한 아이스 아메리카노"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "잉클": {
        names: { ko: "잉클", en: "Inkle", 'zh-CN': "尹可", 'zh-TW': "", ja: "" },
        food: { verylike: ["UFC 당근 튀김"], like: ["레몬차"], hate: ["따뜻한 아이스 아메리카노", "보석 타르트"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "아라그니아": {
        names: { ko: "아라그니아", en: "Aragnia", 'zh-CN': "阿拉戈尼娅", 'zh-TW': "", ja: "" },
        food: { verylike: ["석류석 열매"], like: ["미숫가루"], hate: ["따뜻한 아이스 아메리카노", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "니콜": {
        names: { ko: "니콜", en: "Nicole", 'zh-CN': "妮可", 'zh-TW': "", ja: "" },
        food: { verylike: ["캬라멜 팝콘"], like: ["크림 브륄레"], hate: ["해초 샐러드", "우주식량"] },
        stats: { default: { grade: 3, type: "냉정" } }
    },
    "에스피": {
        names: { ko: "에스피", en: "Espi", 'zh-CN': "埃斯皮", 'zh-TW': "", ja: "エスピー" },
        food: { verylike: ["초콜릿 아이스크림"], like: ["UFC 당근 튀김"], hate: ["캬라멜 팝콘", "꿀단지"] },
        stats: { default: { grade: 2, type: "냉정" } }
    },
    "레테": {
        names: { ko: "레테", en: "Lethe", 'zh-CN': "勒忒", 'zh-TW': "", ja: "" },
        food: { verylike: ["용족 사탕"], like: ["공기 커틀릿"], hate: ["해초 샐러드", "코코넛 솔잎죽"] },
        stats: { default: { grade: 2, type: "냉정" } }
    },
    "칸타": {
        names: { ko: "칸타", en: "Canta", 'zh-CN': "康塔", 'zh-TW': "", ja: "" },
        food: { like: ["딸기 케이크", "캔 사료"], hate: ["레몬차", "공기 커틀릿"] },
        stats: { default: { grade: 2, type: "냉정" } }
    },
    "레이지": {
        names: { ko: "레이지", en: "Lazy", 'zh-CN': "雷吉", 'zh-TW': "", ja: "レイジー" },
        food: { verylike: ["캔 사료"], like: ["따뜻한 아이스 아메리카노"], hate: ["매듭 빵", "비밀의 포도주스"] },
        stats: {
            default: { grade: 1, type: "냉정" },
            global: { grade: 2, type: "냉정" }
        }
    },
    "파트라": {
        names: { ko: "파트라", en: "Patula", 'zh-CN': "帕特拉", 'zh-TW': "", ja: "パトラ" },
        food: { verylike: ["민트 초코 아이스크림"], like: ["딸기 케이크"], hate: ["우주식량", "캔 사료"] },
        stats: { default: { grade: 1, type: "냉정" } }
    },

    // 광기
    "클로에": {
        names: { ko: "클로에", en: "Chloe", 'zh-CN': "克萝伊", 'zh-TW': "", ja: "クロエ" },
        food: { verylike: ["매듭 빵"], like: ["레몬차"], hate: ["용족 사탕", "공기 커틀릿"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "리츠": {
        names: { ko: "리츠", en: "Leets", 'zh-CN': "丽兹", 'zh-TW': "", ja: "リッツ" },
        food: { verylike: ["용족 사탕"], like: ["공기 커틀릿"], hate: ["꿀단지", "보석 타르트"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "셰이디": {
        names: { ko: "셰이디", en: "Shaydi", 'zh-CN': "夏迪", 'zh-TW': "", ja: "シェイディ" },
        food: { verylike: ["유령 푸딩"], like: ["석류석 열매"], hate: ["캔 사료", "호박 스프"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "시스트": {
        names: { ko: "시스트", en: "Sist", 'zh-CN': "茜斯特", 'zh-TW': "", ja: "シスト" },
        food: { verylike: ["멜론 보코치니"], like: ["따뜻한 아이스 아메리카노"], hate: ["계피맛 알사탕", "민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "앨리스": {
        names: { ko: "앨리스", en: "Alice", 'zh-CN': "爱丽丝", 'zh-TW': "", ja: "アリス" },
        food: { verylike: ["레몬차"], like: ["유령 푸딩"], hate: ["해초 샐러드", "따뜻한 아이스 아메리카노"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "벨리타": {
        names: { ko: "벨리타", en: "Belita", 'zh-CN': "贝丽塔", 'zh-TW': "", ja: "ベリータ" },
        food: { verylike: ["딸기 케이크"], like: ["초콜릿 아이스크림"], hate: ["공기 커틀릿", "민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "네르": {
        names: { ko: "네르", en: "Ner", 'zh-CN': "涅尔", 'zh-TW': "", ja: "ネル" },
        food: { verylike: ["마시멜로 마카롱"], like: ["멜론 보코치니"], hate: ["캬라멜 팝콘", "해초 샐러드"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "디아나": {
        names: { ko: "디아나", en: "Diana", 'zh-CN': "黛安娜", 'zh-TW': "", ja: "ディアナ" },
        food: { verylike: ["만화 고기 구이"], like: ["매듭 빵"], hate: ["캬라멜 팝콘", "멜론 보코치니"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "롤렛": {
        names: { ko: "롤렛", en: "Rollett", 'zh-CN': "罗莱特", 'zh-TW': "", ja: "ロレット" },
        food: { verylike: ["크림 브륄레"], like: ["멜론 보코치니"], hate: ["비밀의 포도주스", "금탕후루"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "리뉴아": {
        names: { ko: "리뉴아", en: "Renewa", 'zh-CN': "莉纽阿", 'zh-TW': "", ja: "リニュア" },
        food: { verylike: ["레몬차"], like: ["우주식량"], hate: ["캬라멜 팝콘", "비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "피라": {
        names: { ko: "피라", en: "Pira", 'zh-CN': "皮拉", 'zh-TW': "", ja: "ピラ" },
        food: { like: ["비밀의 포도주스", "용족 사탕"], hate: ["캔 사료", "보석 타르트"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "폴랑": {
        names: { ko: "폴랑", en: "Polan", 'zh-CN': "破朗", 'zh-TW': "", ja: "" },
        food: { verylike: ["딸기 케이크"], like: ["쌀밥 한 공기"], hate: ["크림 브륄레", "비밀의 포도주스"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "림(혼돈)": {
        names: { ko: "림(혼돈)", en: "Rim(Chaos)", 'zh-CN': "琳(混沌)", 'zh-TW': "", ja: "" },
        food: { verylike: ["호박 스프"], like: ["비밀의 포도주스"], hate: ["마시멜로 마카롱", "크림 브륄레"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "네티": {
        names: { ko: "네티", en: "Neti", 'zh-CN': "内蒂", 'zh-TW': "", ja: "" },
        food: { verylike: ["용족 사탕"], like: ["보석 타르트"], hate: ["캔 사료", "공기 커틀릿"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "아네트": {
        names: { ko: "아네트", en: "Arnet", 'zh-CN': "阿妮特", 'zh-TW': "", ja: "" },
        food: { verylike: ["캬라멜 팝콘"], like: ["보석 타르트"], hate: ["캔 사료", "따뜻한 아이스 아메리카노"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "티그(영웅)": {
        names: { ko: "티그(영웅)", en: "Tig(Hero)", 'zh-CN': "提格(英雄)", 'zh-TW': "", ja: "" },
        food: { verylike: ["만화 고기 구이"], like: ["비밀의 포도주스"], hate: ["캔 사료", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "하이디": {
        names: { ko: "하이디", en: "Heidi", 'zh-CN': "海蒂", 'zh-TW': "", ja: "" },
        food: { verylike: ["보석 타르트"], like: ["보석 타르트", "매듭 빵"], hate: ["우주식량", "쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "다야(퓨어샤인)": {
        names: { ko: "다야(퓨어샤인)", en: "Daya(PureShine)", 'zh-CN': "达雅(纯真闪耀)", 'zh-TW': "", ja: "" },
        food: { verylike: ["보석 타르트"], like: ["레몬차"], hate: ["캔 사료", "용족 사탕"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "헤일리(멀쩡)": {
        names: { ko: "헤일리(멀쩡)", en: "Haley(Sane)", 'zh-CN': "海莉(清醒)", 'zh-TW': "", ja: "" },
        food: { verylike: ["쌀밥 한 공기"], like: ["레몬차"], hate: ["따뜻한 아이스 아메리카노", "민트 초코 아이스크림"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "실비아": {
        names: { ko: "실비아", en: "Silvia", 'zh-CN': "希尔维娅", 'zh-TW': "", ja: "" },
        food: { verylike: ["레몬차"], like: ["레몬차"], hate: ["만화 고기 구이", "캔 사료"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "스키아": {
        names: { ko: "스키아", en: "Skia", 'zh-CN': "思琪娅", 'zh-TW': "", ja: "" },
        food: { verylike: ["금탕후루"], like: ["비밀의 포도주스"], hate: ["매듭 빵", "코코넛 솔잎죽"] },
        stats: { default: { grade: 3, type: "광기" } }
    },
    "마에스트로 2호": {
        names: { ko: "마에스트로 2호", en: "MaestroMK2", 'zh-CN': "大师2号", 'zh-TW': "", ja: "マエストロMK2" },
        food: { verylike: ["석류석 열매"], like: ["비밀의 포도주스"], hate: ["미숫가루", "유령 푸딩"] },
        stats: { default: { grade: 2, type: "광기" } }
    },
    "이프리트": {
        names: { ko: "이프리트", en: "Ifrit", 'zh-CN': "伊芙利特", 'zh-TW': "", ja: "イフリート" },
        food: { verylike: ["크림 브륄레"], like: ["용족 사탕"], hate: ["따뜻한 아이스 아메리카노", "초콜릿 아이스크림"] },
        stats: {
            default: { grade: 2, type: "광기" },
            global: { grade: 3, type: "광기" }
        }
    },
    "마요": {
        names: { ko: "마요", en: "Mayo", 'zh-CN': "玛约", 'zh-TW': "", ja: "マヨ" },
        food: { verylike: ["비밀의 포도주스"], like: ["쌀밥 한 공기"], hate: ["용족 사탕", "매듭 빵"] },
        stats: {
            default: { grade: 2, type: "광기" },
            global: { grade: 3, type: "광기" }
        }
    },
    "유미미": {
        names: { ko: "유미미", en: "Yumimi", 'zh-CN': "刘美美", 'zh-TW': "", ja: "ユミミ" },
        food: { verylike: ["한입초 쌈"], like: ["우주식량"], hate: ["석류석 열매", "따뜻한 아이스 아메리카노"] },
        stats: {
            default: { grade: 1, type: "광기" },
            global: { grade: 2, type: "광기" }
        }
    },
    "메죵": {
        names: { ko: "메죵", en: "Maison", 'zh-CN': "美空", 'zh-TW': "", ja: "メゾン" },
        food: { verylike: ["캔 사료"], like: ["해초 샐러드"], hate: ["따뜻한 아이스 아메리카노", "금탕후루"] },
        stats: { default: { grade: 1, type: "광기" } }
    },

    // 활발
    "에피카": {
        names: { ko: "에피카", en: "Epica", 'zh-CN': "埃皮卡", 'zh-TW': "", ja: "エピカ" },
        food: { verylike: ["캬라멜 팝콘"], like: ["만화 고기 구이"], hate: ["캔 사료", "매듭 빵"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "우이": {
        names: { ko: "우이", en: "Ui", 'zh-CN': "雨伊", 'zh-TW': "", ja: "ウイ" },
        food: { verylike: ["해초 샐러드"], like: ["만화 고기 구이"], hate: ["따뜻한 아이스 아메리카노", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "루드": {
        names: { ko: "루드", en: "Rude", 'zh-CN': "鲁德", 'zh-TW': "", ja: "ルード" },
        food: { verylike: ["미숫가루"], like: ["우주식량"], hate: ["한입초 쌈", "쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "셀리네": {
        names: { ko: "셀리네", en: "Selline", 'zh-CN': "赛琳娜", 'zh-TW': "", ja: "セリーネ" },
        food: { verylike: ["유령 푸딩"], like: ["비밀의 포도주스"], hate: ["마시멜로 마카롱", "레몬차"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "티그": {
        names: { ko: "티그", en: "Tig", 'zh-CN': "提格", 'zh-TW': "", ja: "ティグ" },
        food: { verylike: ["만화 고기 구이"], like: ["비밀의 포도주스"], hate: ["캔 사료", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "루포": {
        names: { ko: "루포", en: "Rufo", 'zh-CN': "卢波", 'zh-TW': "", ja: "ルポ" },
        food: { verylike: ["허니갈릭 살몬"], like: ["멜론 보코치니"], hate: ["꿀단지", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "버터": {
        names: { ko: "버터", en: "Butter", 'zh-CN': "黄油", 'zh-TW': "", ja: "バター" },
        food: { verylike: ["캬라멜 팝콘"], like: ["캔 사료"], hate: ["마시멜로 마카롱", "초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "칸나": {
        names: { ko: "칸나", en: "Canna", 'zh-CN': "康娜", 'zh-TW': "", ja: "カンナ" },
        food: { verylike: ["쌀밥 한 공기"], like: ["만화 고기 구이"], hate: ["레몬차", "코코넛 솔잎죽"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "슈팡": {
        names: { ko: "슈팡", en: "Shoupan", 'zh-CN': "舒胖", 'zh-TW': "", ja: "シュパン" },
        food: { verylike: ["우주식량"], like: ["초콜릿 아이스크림"], hate: ["해초 샐러드", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "모모": {
        names: { ko: "모모", en: "Momo", 'zh-CN': "小桃", 'zh-TW': "", ja: "モモ" },
        food: { verylike: ["꿀단지"], like: ["공기 커틀릿"], hate: ["계피맛 알사탕", "크림 브륄레"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "스피키(메이드)": {
        names: { ko: "스피키(메이드)", en: "Speaki(Maid)", 'zh-CN': "斯碧琪(女仆)", 'zh-TW': "", ja: "" },
        food: { verylike: ["계피맛 알사탕"], like: ["석류석 열매"], hate: ["매듭 빵", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "슈로": {
        names: { ko: "슈로", en: "Suro", 'zh-CN': "修罗", 'zh-TW': "", ja: "" },
        food: { verylike: ["만화 고기 구이"], like: ["캔 사료"], hate: ["한입초 쌈", "초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "벨라": {
        names: { ko: "벨라", en: "Vela", 'zh-CN': "贝拉", 'zh-TW': "", ja: "" },
        food: { verylike: ["유령 푸딩"], like: ["호박 스프"], hate: ["매듭 빵", "쌀밥 한 공기"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "아르코": {
        names: { ko: "아르코", en: "Arco", 'zh-CN': "阿尔柯", 'zh-TW': "", ja: "" },
        food: { verylike: ["비밀의 포도주스"], like: ["크림 브륄레"], hate: ["레몬차", "우주식량"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "마카샤": {
        names: { ko: "마카샤", en: "Makasha", 'zh-CN': "玛卡莎", 'zh-TW': "", ja: "" },
        food: { verylike: ["미숫가루"], like: ["따뜻한 아이스 아메리카노"], hate: ["코코넛 솔잎죽", "마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "미로": {
        names: { ko: "미로", en: "Miro", 'zh-CN': "米洛", 'zh-TW': "", ja: "" },
        food: { verylike: ["민트 초코 아이스크림"], like: ["꿀단지"], hate: ["유령 푸딩", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "셰이디(역전)": {
        names: { ko: "셰이디(역전)", en: "Shaydi(Twisted)", 'zh-CN': "夏迪(逆转)", 'zh-TW': "", ja: "" },
        food: { verylike: ["유령 푸딩"], like: ["석류석 열매"], hate: ["캔 사료", "호박 스프"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "네르(빡침)": {
        names: { ko: "네르(빡침)", en: "Ner(Rage)", 'zh-CN': "涅尔(义愤)", 'zh-TW': "", ja: "" },
        food: { verylike: ["마시멜로 마카롱"], like: ["멜론 보코치니"], hate: ["캬라멜 팝콘", "해초 샐러드"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "레비(졸업)": {
        names: { ko: "레비(졸업)", en: "Levi(Graduate)", 'zh-CN': "莱薇(毕业)", 'zh-TW': "", ja: "" },
        food: { verylike: ["캬라멜 팝콘"], like: ["UFC 당근 튀김"], hate: ["코코넛 솔잎죽", "크림 브륄레"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "에슈르(마도)": {
        names: { ko: "에슈르(마도)", en: "Ashur(Magi)", 'zh-CN': "艾舒尔(魔道)", 'zh-TW': "", ja: "" },
        food: { verylike: ["UFC 당근 튀김"], like: ["캬라멜 팝콘"], hate: ["석류석 열매", "멜론 보코치니"] },
        stats: { default: { grade: 3, type: "활발" } }
    },
    "마리": {
        names: { ko: "마리", en: "Marie", 'zh-CN': "玛丽", 'zh-TW': "", ja: "マリー" },
        food: { verylike: ["UFC 당근 튀김"], like: ["크림 브륄레"], hate: ["계피맛 알사탕", "석류석 열매"] },
        stats: { default: { grade: 2, type: "활발" } }
    },
    "베니": {
        names: { ko: "베니", en: "Beni", 'zh-CN': "班尼", 'zh-TW': "", ja: "ベニー" },
        food: { verylike: ["꿀단지"], like: ["허니갈릭 살몬"], hate: ["용족 사탕", "따뜻한 아이스 아메리카노"] },
        stats: {
            default: { grade: 2, type: "활발" },
            global: { grade: 3, type: "활발" }
        }
    },
    "쥬비": {
        names: { ko: "쥬비", en: "Jubee", 'zh-CN': "茱比", 'zh-TW': "", ja: "ジュビー" },
        food: { verylike: ["꿀단지"], like: ["마시멜로 마카롱"], hate: ["한입초 쌈", "만화 고기 구이"] },
        stats: { default: { grade: 2, type: "활발" } }
    },
    "바나": {
        names: { ko: "바나", en: "Bana", 'zh-CN': "芭娜", 'zh-TW': "", ja: "" },
        food: { verylike: ["딸기 케이크"], like: ["UFC 당근 튀김"], hate: ["석류석 열매", "레몬차"] },
        stats: { default: { grade: 2, type: "활발" } }
    },
    "카렌": {
        names: { ko: "카렌", en: "Carren", 'zh-CN': "卡伦", 'zh-TW': "", ja: "カレン" },
        food: { verylike: ["UFC 당근 튀김"], like: ["딸기 케이크"], hate: ["계피맛 알사탕", "민트 초코 아이스크림"] },
        stats: {
            default: { grade: 1, type: "활발" },
            global: { grade: 2, type: "활발" }
        }
    },
    "타이다": {
        names: { ko: "타이다", en: "Taida", 'zh-CN': "泰达", 'zh-TW': "", ja: "タイダー" },
        food: { verylike: ["따뜻한 아이스 아메리카노"], like: ["금탕후루"], hate: ["한입초 쌈", "코코넛 솔잎죽"] },
        stats: {
            default: { grade: 1, type: "활발" },
            global: { grade: 2, type: "활발" }
        }
    },
    "밍스": {
        names: { ko: "밍스", en: "Mynx", 'zh-CN': "米雪", 'zh-TW': "", ja: "ミンス" },
        food: { verylike: ["캔 사료"], like: ["한입초 쌈"], hate: ["석류석 열매", "UFC 당근 튀김"] },
        stats: { default: { grade: 1, type: "활발" } }
    },

    // 우울
    "시온 더 다크불릿": {
        names: { ko: "시온 더 다크불릿", en: "xXionx", 'zh-CN': "x锡安x", 'zh-TW': "", ja: "シオン・ザ・DB" },
        food: { verylike: ["초콜릿 아이스크림"], like: ["비밀의 포도주스"], hate: ["캔 사료", "보석 타르트"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "코미": {
        names: { ko: "코미", en: "Kommy", 'zh-CN': "柯米", 'zh-TW': "", ja: "コミー" },
        food: { verylike: ["캔 사료"], like: ["캬라멜 팝콘"], hate: ["UFC 당근 튀김", "만화 고기 구이"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "림": {
        names: { ko: "림", en: "Rim", 'zh-CN': "琳", 'zh-TW': "", ja: "リム" },
        food: { verylike: ["호박 스프"], like: ["비밀의 포도주스"], hate: ["마시멜로 마카롱", "크림 브륄레"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "키디언": {
        names: { ko: "키디언", en: "Kidian", 'zh-CN': "基迪恩", 'zh-TW': "", ja: "ギデオン" },
        food: { verylike: ["매듭 빵"], like: ["캔 사료"], hate: ["금탕후루", "미숫가루"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "블랑셰": {
        names: { ko: "블랑셰", en: "Blanchet", 'zh-CN': "布蓝琪", 'zh-TW': "", ja: "ブランセ" },
        food: { verylike: ["레몬차"], like: ["보석 타르트"], hate: ["공기 커틀릿", "우주식량"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "에슈르": {
        names: { ko: "에슈르", en: "Ashur", 'zh-CN': "艾舒尔", 'zh-TW': "", ja: "エシュール" },
        food: { verylike: ["UFC 당근 튀김"], like: ["캬라멜 팝콘"], hate: ["석류석 열매", "멜론 보코치니"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "힐데": {
        names: { ko: "힐데", en: "Hilde", 'zh-CN': "希尔德", 'zh-TW': "", ja: "ヒルデ" },
        food: { verylike: ["허니갈릭 살몬"], like: ["우주식량"], hate: ["용족 사탕", "마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "포셔": {
        names: { ko: "포셔", en: "Posher", 'zh-CN': "珀榭", 'zh-TW': "", ja: "ポーシャー" },
        food: { verylike: ["코코넛 솔잎죽"], like: ["우주식량"], hate: ["허니갈릭 살몬", "호박 스프"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "리스티": {
        names: { ko: "리스티", en: "Risty", 'zh-CN': "莉斯缇", 'zh-TW': "", ja: "リスティ" },
        food: { verylike: ["석류석 열매"], like: ["따뜻한 아이스 아메리카노"], hate: ["멜론 보코치니", "허니갈릭 살몬"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "스노키": {
        names: { ko: "스노키", en: "Snorky", 'zh-CN': "斯诺琪", 'zh-TW': "", ja: "スノーキー" },
        food: { verylike: ["쌀밥 한 공기"], like: ["미숫가루"], hate: ["비밀의 포도주스", "UFC 당근 튀김"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "죠안": {
        names: { ko: "죠안", en: "Joanne", 'zh-CN': "琼安", 'zh-TW': "", ja: "" },
        food: { verylike: ["미숫가루"], like: ["민트 초코 아이스크림"], hate: ["딸기 케이크", "마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "리온": {
        names: { ko: "리온", en: "Lion", 'zh-CN': "里昂", 'zh-TW': "", ja: "" },
        food: { verylike: ["만화 고기 구이"], like: ["허니갈릭 살몬"], hate: ["비밀의 포도주스", "우주식량"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "샤샤": {
        names: { ko: "샤샤", en: "Shasha", 'zh-CN': "夏夏", 'zh-TW': "", ja: "" },
        food: { verylike: ["매듭 빵"], like: ["딸기 케이크"], hate: ["해초 샐러드", "계피맛 알사탕"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "오르": {
        names: { ko: "오르", en: "Orr", 'zh-CN': "欧尔", 'zh-TW': "", ja: "" },
        food: { verylike: ["따뜻한 아이스 아메리카노"], like: ["공기 커틀릿"], hate: ["크림 브륄레", "초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "로네(시장)": {
        names: { ko: "로네(시장)", en: "Rohne(Mayor)", 'zh-CN': "洛涅(市长)", 'zh-TW': "", ja: "" },
        food: { verylike: ["금탕후루"], like: ["초콜릿 아이스크림"], hate: ["우주식량", "공기 커틀릿"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "아사나": {
        names: { ko: "아사나", en: "Asana", 'zh-CN': "阿萨娜", 'zh-TW': "", ja: "" },
        food: { verylike: ["한입초 쌈"], like: ["코코넛 솔잎죽"], hate: ["딸기 케이크", "마시멜로 마카롱"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "요미": {
        names: { ko: "요미", en: "Yomi", 'zh-CN': "优米", 'zh-TW': "", ja: "ヨミ" },
        food: { verylike: ["호박 스프"], like: ["한입초 쌈"], hate: ["딸기 케이크", "크림 브륄레"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "아멜리아(R41)": {
        names: { ko: "아멜리아(R41)", en: "Amelia(R41)", 'zh-CN': "艾蜜莉雅(R41)", 'zh-TW': "", ja: "" },
        food: { verylike: ["쌀밥 한 공기"], like: ["초콜릿 아이스크림"], hate: ["우주식량", "코코넛 솔잎죽"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "키샤": {
        names: { ko: "키샤", en: "Kishya", 'zh-CN': "琦莎", 'zh-TW': "", ja: "" },
        food: { verylike: ["석류석 열매"], like: ["금탕후루"], hate: ["코코넛 솔잎죽", "미숫가루"] },
        stats: { default: { grade: 3, type: "우울" } }
    },
    "레비": {
        names: { ko: "레비", en: "Levi", 'zh-CN': "莱薇", 'zh-TW': "", ja: "レヴィ" },
        food: { verylike: ["캬라멜 팝콘"], like: ["UFC 당근 튀김"], hate: ["크림 브륄레", "코코넛 솔잎죽"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "실피르": {
        names: { ko: "실피르", en: "Silphir", 'zh-CN': "希菲尔", 'zh-TW': "", ja: "シルフィール" },
        food: { verylike: ["금탕후루"], like: ["유령 푸딩"], hate: ["코코넛 솔잎죽", "해초 샐러드"] },
        stats: {
            default: { grade: 2, type: "우울" },
            global: { grade: 3, type: "순수" },
        }
    },
    "페스타": {
        names: { ko: "페스타", en: "Festa", 'zh-CN': "菲斯塔", 'zh-TW': "", ja: "フェスタ" },
        food: { verylike: ["공기 커틀릿"], like: ["비밀의 포도주스"], hate: ["캔 사료", "우주식량"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "바리에": {
        names: { ko: "바리에", en: "Barie", 'zh-CN': "巴丽叶", 'zh-TW': "", ja: "" },
        food: { verylike: ["마시멜로 마카롱"], like: ["UFC 당근 튀김"], hate: ["용족 사탕", "따뜻한 아이스 아메리카노"] },
        stats: { default: { grade: 2, type: "우울" } }
    },
    "쵸피": {
        names: { ko: "쵸피", en: "Chopi", 'zh-CN': "乔菲", 'zh-TW': "", ja: "チョッピー" },
        food: { verylike: ["만화 고기 구이"], like: ["캔 사료"], hate: ["유령 푸딩", "멜론 보코치니"] },
        stats: {
            default: { grade: 1, type: "우울" },
            global: { grade: 2, type: "우울" }
        }
    },
    "베루": {
        names: { ko: "베루", en: "Veroo", 'zh-CN': "贝鲁", 'zh-TW': "", ja: "ベル" },
        food: { verylike: ["유령 푸딩"], like: ["캬라멜 팝콘"], hate: ["공기 커틀릿", "우주식량"] },
        stats: { default: { grade: 1, type: "우울" } }
    },

    // 공명
    "우로스": {
        names: { ko: "우로스", en: "Uros", 'zh-CN': "乌洛斯", 'zh-TW': "", ja: "" },
        food: { verylike: ["만화 고기 구이"], like: ["캔 사료"], hate: ["한입초 쌈", "초콜릿 아이스크림"] },
        stats: { default: { grade: 3, type: "공명" } }
    }
};
