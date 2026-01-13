import { getChoseong } from "es-hangul";
import { useEffect, useMemo, useRef, useState } from "react";
import { translations, translationTr } from "../data/i18n/i18n";
import { useLanguage } from "../util/langUtils";
import { recentSearch } from "../util/recentSearch";
import LangSelector from "./LangSelector";
import ServerSelector from "./ServerSelector";

const CharacterSearch = ({ setTarget }) => {
    const { language } = useLanguage();
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const { getHistory, addHistory } = recentSearch();

    const searchData = useMemo(() => {
        return Object.entries(translations.characters).map(([key, trans]) => {
            const allNames = [
                trans.ko,
                trans.en,
                trans.zhCN,
                key // 기준 키값
            ].map(n => n?.toLowerCase().replace(/\s+/g, "") || "");

            return {
                key,
                names: allNames,
                choseong: getChoseong(trans.ko.replace(/\s+/g, ""))
            };
        });
    }, []);

    const searchList = useMemo(() => {
        const term = search.trim().toLowerCase().replace(/\s+/g, "");
        if (!term) return [];

        return searchData
            .filter(item =>
                item.names.some(name => name.includes(term)) || // 어떤 언어든 포함되면 통과
                item.choseong.includes(term) // 초성 검색
            )
            .map(item => item.key);
    }, [search, searchData]);

    useEffect(() => {
        function onClickOutside(e) {
            if (containerRef.current &&
                !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', onClickOutside);
        return () => document.removeEventListener('mousedown', onClickOutside);
    }, []);

    // console.log(searchData)

    return (
        <div className="fixed flex flex-col lg:flex-row items-center justify-center gap-4 py-2 sm:py-4 bg-white w-full z-40 border-b-2 border-gray-200">
            <div className="flex items-center gap-x-4">
                <span className="text-[24px] font-bold">
                    트릭컬 연회장 음식 호불호
                </span>
                <div className="inline lg:hidden">
                    <ServerSelector />
                </div>
            </div>
            <div className="flex items-center gap-x-1">
                <div ref={containerRef} className="relative sm:w-[380px] w-[300px]">
                    <div className={`flex items-center gap-x-1 border-[2px] border-black rounded-md p-2 ${open && searchList.length > 0 ? 'border-white shadow-md rounded-b-none' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">

                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input
                            type="text"
                            placeholder={language === 'ko' ? '사도 검색' : 'Search'}
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            onFocus={() => setOpen(true)}
                            className="text-[13px] focus:outline-none w-[340px]"
                        />
                    </div>
                    {open && (
                        <div className="absolute z-10 bg-white text-[12px] flex shadow-lg shadow-gray-300 w-full pl-2 pr-4">
                            <div className={`flex w-[65%] pr-4 gap-y-1 max-h-[435.6px] bg-red ${searchList.length > 0 && 'flex-wrap content-start overflow-y-scroll'}`}>
                                {searchList.length > 0 ? searchList.map(name => {

                                    const charName = translationTr('characters', name, language)

                                    return (
                                        <div
                                            onClick={() => {
                                                setTarget(name);
                                                setOpen(false);
                                                setSearch('');
                                                addHistory(name);
                                            }}
                                            key={'search_character' + name}
                                            className="w-[30%] hover:brightness-90 hover:bg-orange-50 cursor-pointer flex flex-col items-center max-h-[100px] sm:basis-1/3 basis-1/2">

                                            <img
                                                src={`${process.env.PUBLIC_URL}/images/character/profile/${name}.webp`}
                                                className=""
                                                alt={charName}
                                                title={charName} />
                                            <div className="flex justify-center w-full">
                                                <div className="truncate font-bold">
                                                    {charName}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : language === 'ko' ? (
                                    <div className="flex flex-col gap-y-2 items-center justify-center mx-auto text-gray-400 font-bold">
                                        <span className=" md:text-[14px] text-[10px]">
                                            초성으로 검색할 수 있습니다.
                                        </span>
                                        <span>
                                            ex) ㅁㅌ → 뮤트
                                        </span>
                                    </div>
                                ) : (<></>)}
                            </div>
                            <div className="w-[35%] gap-y-1 flex-col flex">
                                {getHistory().length > 0 && getHistory().map(recent => {

                                    const charName = translationTr('characters', recent, language)

                                    return (
                                        <div
                                            onClick={() => {
                                                setTarget(recent);
                                                setOpen(false);
                                                setSearch('');
                                                addHistory(recent);
                                            }}
                                            key={'recent_character' + recent}
                                            className="flex justify-between hover:bg-gray-100 cursor-pointer px-1 py-2 ml-2">
                                            <div className="flex items-center gap-x-1 text-[14px]">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/character/profile/${recent}.webp`}
                                                    className="h-[24px] w-auto"
                                                    alt={charName}
                                                    title={charName} />
                                                <div className="truncate font-bold">
                                                    {charName}
                                                </div>
                                            </div>
                                            {/* X 버튼 */}
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg> */}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <LangSelector />
                <div className="hidden lg:inline">
                    <ServerSelector />
                </div>
            </div>
        </div>
    );
}

export default CharacterSearch;