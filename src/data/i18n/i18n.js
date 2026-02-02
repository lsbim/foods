import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // 언어 자동 감지
import { initReactI18next } from "react-i18next";
import { charInfo } from "./charInfo";

const persResources = {
    ko: { personality: { "순수": "순수", "냉정": "냉정", "광기": "광기", "활발": "활발", "우울": "우울", "공명": "공명" } },
    en: { personality: { "순수": "Innocence", "냉정": "Composed", "광기": "Madness", "활발": "Vivacious", "우울": "Depressed", "공명": "Resonance" } },
    zhCN: { personality: { "순수": "纯粹", "냉정": "冷静", "광기": "狂热", "활발": "活泼", "우울": "忧郁", "공명": "共鸣" } },
    ja: { personality: { "순수": "純粋", "냉정": "冷静", "狂기": "狂気", "활발": "活発", "우울": "憂鬱", "공명": "" } }
};

const generateResources = () => {
    const languages = ['ko', 'en', 'zhCN', 'ja'];
    const resources = {};

    languages.forEach(lng => {
        resources[lng] = {
            translation: {
                personality: persResources[lng]?.personality || {},
                char: {} // 캐릭터 이름이 들어갈 곳
            }
        };
    });

    Object.entries(charInfo).forEach(([key, data]) => {
        if (data.names.ko) resources.ko.translation.char[key] = data.names.ko;
        if (data.names.en) resources.en.translation.char[key] = data.names.en;
        if (data.names.zhCN) resources.zhCN.translation.char[key] = data.names.zhCN;
        if (data.names.ja) resources.ja.translation.char[key] = data.names.ja;
    });

    return resources;
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: generateResources(),
        supportedLngs: ['ko', 'en', 'ja', 'zh-CN'],
        fallbackLng: "en",
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;