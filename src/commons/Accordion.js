import * as Accordion from '@radix-ui/react-accordion';
import { charInfo } from '../data/i18n/charInfo';
import React from 'react';




const MyAccordion = ({ persKey, headerText, open, onOpenChange, items, server, t, howMuchLike, targetColor, handleSetTarget }) => {


    return (
        <Accordion.Root
            type="single"
            value={open ? persKey : ''}
            onValueChange={(v) => onOpenChange(!!v)}
            className="block w-full rounded-lg shadow-sm mb-1" // mb-1 = 그림자 크기
            collapsible
        >
            <Accordion.Item
                key={persKey}
                value={persKey}
                className='w-full'
            >
                <Accordion.Header className="flex">
                    <Accordion.Trigger className='group w-full gap-y-1'>
                        <div className={`rounded-md p-1 w-full h-8 flex font-bold justify-between items-center cursor-pointer ${charListHeaderColor(persKey)} ${charListHeaderShadow(persKey)}`}>
                            <div className={`h-8 w-full flex py-1 items-center pl-1`}>
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/icon/${persKey}.png`}
                                    className={`w-5 object-contain flex items-center`}
                                    alt={headerText}
                                    title={headerText} />
                                <span className="pl-1 py-1">
                                    {headerText}
                                </span>
                            </div>
                            {/* 아래 홑화살괄호 */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-180"
                                aria-hidden="true">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                    </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                    <div className="flex flex-wrap justify-start w-full">
                        {/* 캐릭터 블럭 */}
                        {items.map((c, i) => {

                            const charName = t(`char.${c}`)
                            // const grade = server === 'global' ? charInfo[c].stats.global?.grade || charInfo[c].stats.default?.grade : charInfo[c].stats.default?.grade;

                            // console.log(persGroup)

                            return (
                                <div
                                    key={'character_' + c}
                                    className={`hover:bg-orange-200 cursor-pointer flex flex-col justify-center relative sm:p-2 p-1 md:w-[16.65%] xs:w-[25%] w-[33.3%] ${targetColor(c)} rounded-md`}
                                    onClick={() => handleSetTarget(c)}>

                                    <div className="flex flex-col justify-center items-center">
                                        <div className="relative inline-block w-full">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/images/character/profile/${c}.webp`}
                                                className="w-full h-auto aspect-square block rounded-t-md"
                                                alt={charName}
                                                title={charName}
                                            />
                                            {/* <img
                                                src={`${process.env.PUBLIC_URL}/images/character/${grade}.png`}
                                                className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-[10px] w-auto max-w-none"
                                                alt={charName}
                                                title={charName}
                                            /> */}
                                            {howMuchLike(c) && (
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/icon/${howMuchLike(c)}.webp`}
                                                    className="absolute top-[-8px] right-[-10px] w-4 rotate-12"
                                                    alt={charName}
                                                    title={charName}
                                                />
                                            )}
                                        </div>
                                        <span className="w-full xs:text-[12px] text-[11px] flex justify-center items-center text-wrap font-bold bg-zinc-200 py-[1px] rounded-b-md">
                                            <span className=" truncate">
                                                {charName}
                                            </span>
                                        </span>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root >
    );
}


const charListHeaderColor = (t) => {

    return t === '순수' ? 'bg-[rgb(102,193,124)]'
        : t === '냉정' ? 'bg-[rgb(131,185,235)]'
            : t === '광기' ? 'bg-[rgb(235,131,154)]'
                : t === '활발' ? 'bg-[rgb(235,219,131)]'
                    : t === '우울' ? 'bg-[rgb(198,131,236)]'
                        : t === '공명' ? `bg-gradient-to-r from-[rgb(131,185,235)] to-[rgb(198,131,236)]` : '';
}

const charListHeaderShadow = (t) => {

    return t === '순수' ? 'shadow-[4px_4px_0_0_rgba(102,193,124,0.2)]'
        : t === '냉정' ? 'shadow-[4px_4px_0_0_rgba(131,185,235,0.2)]'
            : t === '광기' ? 'shadow-[4px_4px_0_0_rgba(235,131,154,0.2)]'
                : t === '활발' ? 'shadow-[4px_4px_0_0_rgba(235,219,131,0.2)]'
                    : t === '우울' ? 'shadow-[4px_4px_0_0_rgba(198,131,236,0.2)]'
                        : t === '공명' ? `shadow-[4px_4px_0_0_rgba(131,185,235,0.2)] shadow-[4px_4px_0_0_rgba(198,131,236,0.2)]` : '';
}

export default React.memo(MyAccordion);