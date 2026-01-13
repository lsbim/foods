import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { foodBonusKo, foodGrade, foodGradeKo, foodGradeListKo } from "../data/food/foodInfo-ko";
import { foodBonus, foodBonusGlobal, foodGradeGlobal, foodGradeListGlobal } from "../data/food/foodInfo-global";

const SUPPORTED_LANGUAGES = ['ko', 'en', 'ja', 'zhCN', 'zhTW'];
const SUPPORTED_SERVERS = ['kr', 'global'];

export const getServerInfo = () => {

    const raw = localStorage.getItem('server');

    // console.log(`raw: ${raw}`)

    const server = raw ?? (detectUserLanguage() === 'ko' ? 'kr' : 'global');
    // console.log(`server: ${server}`)

    return server;
}

export const updateServerInfo = (server) => {
    if (SUPPORTED_SERVERS.includes(server)) {
        localStorage.setItem('server', server);
        return true;
    }
    return false;
};

export const getLangInfo = () => {

    const raw = localStorage.getItem('lang');
    // console.log(`raw: ${raw}`)

    const lang = raw ?? detectUserLanguage();
    // console.log(`lang: ${lang}`)

    return lang;
}

export const updateLangInfo = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
        localStorage.setItem('lang', lang);
        return true;
    }
    return false;
};

const detectUserLanguage = () => {
    // 브라우저 언어 설정 가져오기
    const browserLang = navigator.language || navigator.userLanguage;

    const [langCode, regionCode] = browserLang.toLowerCase().split('-');

    // 간체 번체 파악
    if (langCode === 'zh') {
        if (regionCode === 'cn' || regionCode === 'sg') {
            return 'zhCN';
        }
        // 현재 번체 미구현
        // if (regionCode === 'tw' || regionCode === 'hk' || regionCode === 'mo') {
        //     return 'zhTW';
        // }

        return 'zhCN';
    }

    // 다른 지역은 지역코드 제외하고 언어코드만 확인
    if (SUPPORTED_LANGUAGES.includes(langCode)) {
        return langCode;
    }

    // 지원하지 않는 언어는 영어를 기본
    return 'en';
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(getLangInfo());
    const [server, setServerState] = useState(getServerInfo());

    const setLanguage = useCallback((lang) => {
        setLanguageState(lang); // 리렌더링
        updateLangInfo(lang);
    }, []);

    const setServer = useCallback((lang) => {
        setServerState(lang); // 리렌더링
        updateServerInfo(lang);
    }, []);

    const foodGradeList = server === 'kr' ? foodGradeListKo : foodGradeListGlobal;
    const foodGrade = server === 'kr' ? foodGradeKo : foodGradeGlobal;
    const foodBonus = server === 'kr' ? foodBonusKo : foodBonusGlobal;

    return (
        <LanguageContext.Provider value={{ foodGradeList, foodGrade, foodBonus, language, setLanguage, server, setServer }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);

    return ctx;
};