import { createContext, useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { foodBonusGlobal, foodGradeGlobal, foodGradeListGlobal } from "../data/food/foodInfo-global";
import { foodBonusKo, foodGradeKo, foodGradeListKo } from "../data/food/foodInfo-ko";
import { typeList } from "../data/i18n/charInfo";

const SUPPORTED_SERVERS = ['kr', 'global'];

export const getServerInfo = () => {

    const raw = localStorage.getItem('server');

    return raw ?? detectDefaultServer();
}

export const updateServerInfo = (server) => {
    if (SUPPORTED_SERVERS.includes(server)) {
        localStorage.setItem('server', server);
        return true;
    }
    return false;
};

const detectDefaultServer = () => {
    // 브라우저 언어 설정 가져오기
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.toLowerCase().split('-')[0];

    return langCode === 'ko' ? 'kr' : 'global';
};

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
    const [server, setServerState] = useState(getServerInfo());
    const { i18n } = useTranslation();

    const setLanguage = useCallback((lang) => {
        i18n.changeLanguage(lang);
    }, []);

    const setServer = useCallback((lang) => {
        setServerState(lang); // 리렌더링
    }, []);


    const foodGradeList = server === 'kr' ? foodGradeListKo : foodGradeListGlobal;
    const foodGrade = server === 'kr' ? foodGradeKo : foodGradeGlobal;
    const foodBonus = server === 'kr' ? foodBonusKo : foodBonusGlobal;

    const personality = server === 'kr' ? typeList : typeList.filter(type => type !== '공명');

    return (
        <LanguageContext.Provider value={{
            foodGradeList,
            foodGrade,
            foodBonus,
            setLanguage,
            server,
            setServer,
            personality,
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);

    return ctx;
};