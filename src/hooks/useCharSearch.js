import { useMemo } from "react";
import { getChoseong } from "es-hangul";
import { charInfo } from "../data/i18n/charInfo";
import { useLanguage } from "../util/langUtils";

export const useCharSearch = (search, { showAllWhenEmpty = false } = {}) => {

    const { server } = useLanguage();

    const searchData = useMemo(() => {
        return Object.entries(charInfo)
            .filter(([, info]) => {
                if (server === 'global' && !info?.names?.ja) return false;
                return true;
            })
            .map(([key, info]) => {
                const allNames = [
                    info.names.ko,
                    info.names.en,
                    info.names['zh-CN'],
                    key // 기준 키값
                ].map(n => n?.toLowerCase().replace(/\s+/g, "") || "");

                return {
                    key,
                    names: allNames,
                    choseong: getChoseong(info.names.ko.replace(/\s+/g, ""))
                };
            });
    }, [server]);

    const searchList = useMemo(() => {
        const term = search.trim().toLowerCase().replace(/\s+/g, "");

        if (!term) return showAllWhenEmpty ? searchData.map(item => item.key) : [];

        return searchData
            .filter(item =>
                item.names.some(name => name.includes(term)) || // 어떤 언어든 포함되면 통과
                item.choseong.includes(term) // 초성 검색
            )
            .map(item => item.key);
    }, [search, searchData, showAllWhenEmpty]);

    return searchList;
};