import { charInfo } from "../data/i18n/charInfo";

// 성격 추출
export const getCharTypes = (char, isGlobal) => {

    const stats = charInfo[char]?.stats;

    const type = isGlobal
        ? (stats?.global?.type || stats?.default?.type)
        : stats?.default?.type;

    return [].concat(type ?? []);
};