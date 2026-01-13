import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../util/langUtils";

const ServerSelector = () => {

    const [isOn, setIsOn] = useState(false);
    const dropdownRef = useRef(null);
    const { setServer, server } = useLanguage();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                // 컴포넌트 밖을 클릭 시 닫음
                setIsOn(false);
            }
        };

        // 드롭다운이 열려있을 때만 이벤트 리스너를 추가합니다
        if (isOn) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOn]); // isOn이 바뀔때마다 리셋

    // 繁體中文 번체중문 미구현
    const langList = [
        { label: 'Kr', server: 'kr' },
        { label: 'Global', server: 'global' },
    ]

    const handleLangChange = (lang) => {
        setServer(lang);
        setIsOn(false);
    };

    return (
        <div
            ref={dropdownRef}
            onClick={() => setIsOn(!isOn)}
            className="relative z-50 select-none">
            <div className={`flex p-2 items-center cursor-pointer hover:bg-zinc-100 rounded-md transition duration-150 ${isOn && 'bg-zinc-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                </svg>
                <span className="text-[12px] sm:inline hidden">Server</span>
            </div>
            {isOn && (
                <div className="flex flex-col absolute top-10 sm:left-0 right-0 w-[100px] shadow-md bg-white">
                    {langList.map(li => (
                        <div
                            onClick={() => handleLangChange(li.server)}
                            className={`hover:bg-zinc-200 cursor-pointer p-2 py-3 relative flex items-center justify-between ${server === li.server && 'font-bold'}`}
                            key={'lang_' + li.label}>
                            <span>
                                {li.label}
                            </span>
                            {server === li.server && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ServerSelector;