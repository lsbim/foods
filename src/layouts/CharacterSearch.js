import { getChoseong } from "es-hangul";
import { useEffect, useMemo, useRef, useState } from "react";
import { charInfo } from "../commons/char/charInfo";
import useRecentSearch, { recentSearch } from "../util/recentSearch";

const CharacterSearch = ({ setTarget }) => {

    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const { getHistory, addHistory, deleteHistory } = recentSearch();

    const nameList = useMemo(() => Object.keys(charInfo), []); // 모든 사도 이름
    const initialMap = useMemo(() => { // 사도이름, 초성 객체
        return Object.fromEntries(
            nameList.map((name) => {
                // 공백 제거 후 초성만 뽑기
                const cleaned = name.replace(/\s+/g, "");
                return [name, getChoseong(cleaned)];
            })
        );
    }, [nameList]);

    const searchList = useMemo(() => { // 검색 결과 리스트
        if (!search.trim()) return [];

        return nameList.filter((name) => {
            const cleanedName = name.replace(/\s+/g, "");
            const initials = initialMap[name];
            return (
                cleanedName.includes(search) || // 전체 이름 검색
                initials.includes(search)       // 초성 검색
            );
        });
    }, [search, nameList, initialMap])

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

    // console.log(getHistory())

    return (
        <div className="fixed flex flex-col md:flex-row items-center justify-center gap-x-4 py-2 sm:py-4 bg-white w-full z-10 border-b-2 border-gray-200">
            <div className="text-[24px] font-bold">
                트릭컬 연회장 음식 호불호
            </div>
            <div ref={containerRef} className="relative sm:w-[420px] w-[320px]">
                <div className={`flex items-center gap-x-1 border-[2px] border-black rounded-md p-2 ${open && searchList.length > 0 ? 'border-white shadow-md rounded-b-none' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="사도 검색"
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
                        <div className={`flex sm:min-w-[276px] w-[276px] pr-4 gap-y-1 max-h-[435.6px] bg-red ${searchList.length > 0 && 'flex-wrap content-start overflow-y-scroll'}`}>
                            {searchList.length > 0 ? searchList.map(name => (
                                <div
                                    onClick={() => {
                                        setTarget(name);
                                        setOpen(false);
                                        setSearch('');
                                        addHistory(name);
                                    }}
                                    key={'search_character' + name}
                                    className="hover:brightness-90 hover:bg-orange-50 cursor-pointer flex flex-col items-center max-h-[100px] sm:basis-1/3 basis-1/2">

                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/사도/볼/${name}.png`}
                                        className="sm:h-[80px] h-[60px] w-auto"
                                        alt={name}
                                        title={name} />
                                    <div className="flex sm:w-[80px] w-[60px] justify-center">
                                        <div className="truncate font-bold">
                                            {name}
                                        </div>
                                    </div>
                                </div>
                            )) : (
                                <div className="flex flex-col gap-y-2 items-center justify-center mx-auto text-gray-400 font-bold">
                                    <span>
                                        초성으로 검색할 수 있습니다.
                                    </span>
                                    <span>
                                        ex) ㅁㅌ → 뮤트
                                    </span>
                                </div>
                            )}
                        </div>
                        <div className="w-full gap-y-1 flex-col flex">
                            {getHistory().length > 0 && getHistory().map(recent => (
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
                                            src={`${process.env.PUBLIC_URL}/images/사도/볼/${recent}.png`}
                                            className="h-[24px] w-auto"
                                            alt={recent}
                                            title={recent} />
                                        <div className="truncate font-bold">
                                            {recent}
                                        </div>
                                    </div>
                                    {/* X 버튼 */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg> */}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CharacterSearch;