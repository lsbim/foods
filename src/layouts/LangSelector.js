import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../util/langUtils";

const LangSelector = () => {

    const [isOn, setIsOn] = useState(false);
    const dropdownRef = useRef(null);
    const { setLanguage } = useLanguage();

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
        { label: '한국어', lang: 'ko' },
        { label: 'English', lang: 'en' },
        { label: '简体中文', lang: 'zhCN' },
    ]

    const handleLangChange = (lang) => {
        setLanguage(lang);
        setIsOn(false);
    };

    return (
        <div
            ref={dropdownRef}
            onClick={() => setIsOn(!isOn)}
            className="relative z-40">
            <div className={`flex p-2 items-center cursor-pointer hover:bg-zinc-100 rounded-md transition duration-150 ${isOn && 'bg-zinc-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
                <span className="text-[12px] sm:inline hidden">Lang</span>
            </div>
            {isOn && (
                <div className="flex flex-col gap-y-2 absolute top-10 sm:left-0 right-0 w-[100px] shadow-md bg-white">
                    {langList.map(li => (
                        <div
                            onClick={() => handleLangChange(li.lang)}
                            className="hover:bg-zinc-200 cursor-pointer p-2 "
                            key={'lang_' + li.label}>
                            {li.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LangSelector;