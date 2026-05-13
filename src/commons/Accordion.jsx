import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';
import { charInfo } from '../data/i18n/charInfo';




const MyAccordion = ({
    itemsKey,
    headerText,
    open,
    onOpenChange,
    items,
    t,
    howMuchLike,
    targetColor,
    handleSetTarget,
    isTargetAndLike,
    type,
    foodBonus,
    language,
    verylike,
    like,
    hate,
    target
}) => {

    // console.log(itemsKey, language)

    const accordionHeaderStyle = (type === 'character' ? `${charListHeaderColor(itemsKey)} ${charListHeaderShadow(itemsKey)}` : `${foodListHeaderColor(itemsKey)} ${foodListHeaderShadow(itemsKey)}`) +
        ' rounded-md p-1 w-full h-8 flex font-bold justify-between items-center cursor-pointer ';

    return (
        <Accordion.Root
            type="single"
            value={open ? String(itemsKey) : ''}
            onValueChange={(v) => onOpenChange(!!v)}
            className="block w-full rounded-lg shadow-sm mb-1" // mb-1 = 그림자 크기
            collapsible
        >
            <Accordion.Item
                key={itemsKey}
                value={String(itemsKey)}
                className='w-full'
            >
                <Accordion.Header className="flex">
                    <Accordion.Trigger className='group w-full gap-y-1'>
                        <div className={`${accordionHeaderStyle}`}>
                            {/* 성격 이미지 */}
                            {type === 'character' && (
                                <div className={`h-8 w-full flex py-1 items-center pl-1`}>
                                    <img
                                        src={`${import.meta.env.BASE_URL}/images/icon/${itemsKey}.png`}
                                        className={`w-5 object-contain flex items-center`}
                                        alt={headerText}
                                        title={headerText} />
                                    <span className="pl-1 py-1">
                                        {headerText}
                                    </span>
                                </div>
                            )}
                            {/* 음식 호감도 안내 */}
                            {type === 'food' && (
                                <div className="items-start md:flex md:flex-row hidden lg:gap-x-3 md:gap-x-2 lg:text-[14px] md:text-[12px] text-[10px]">
                                    {itemsKey === 0 ? (
                                        language === 'ko' && (
                                            <div className="pl-2">
                                                <span className="md:text-[15px] text-[0px]">이벤트 음식은 대부분 좋아합니다.</span>
                                                {/* <span className="md:text-[0px] text-[12px]">이벤트 음식</span> */}
                                            </div>
                                        )
                                    ) : (
                                        <div
                                            className="lg:pl-2 md:pl-1 flex font-semibold whitespace-nowrap"
                                            title="그럭저럭">
                                            <img
                                                src={`${import.meta.env.BASE_URL}/images/icon/soso.webp`}
                                                className={`md:w-6 w-3 mr-1 flex items-center object-contain`}
                                                alt={'그럭저럭'}
                                                title={'그럭저럭'} />
                                            <span className="flex items-center">
                                                {foodBonus[itemsKey]?.soso}
                                            </span>
                                        </div>
                                    )}
                                    {itemsKey !== 0 && target && charInfo[target]?.food && (
                                        <>
                                            {/* verylike 음식이 이 등급에 있는지 확인하고 표시 */}
                                            {items.some(item => verylike?.includes(item)) && (
                                                <div
                                                    className="pl-2 flex items-center font-semibold whitespace-nowrap"
                                                    title="매우좋아함">
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}/images/icon/verylike.webp`}
                                                        className={`md:w-6 w-3 mr-1 object-contain`}
                                                        alt={'매우좋아함'}
                                                        title={'매우좋아함'} />
                                                    <span>
                                                        {foodBonus[itemsKey]?.verylike}
                                                    </span>
                                                </div>
                                            )}
                                            {items.some(item => like?.includes(item)) && (
                                                <div
                                                    className="pl-2 flex items-center font-semibold whitespace-nowrap"
                                                    title="좋아함">
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}/images/icon/like.webp`}
                                                        className={`md:w-6 w-3 mr-1 object-contain`}
                                                        alt={'좋아함'}
                                                        title={'좋아함'} />
                                                    <span>
                                                        {foodBonus[itemsKey]?.like}
                                                    </span>
                                                </div>
                                            )}
                                            {items.some(item => hate?.includes(item)) && (
                                                <div
                                                    className="pl-2 flex items-center font-semibold whitespace-nowrap"
                                                    title="싫어함">
                                                    <img
                                                        src={`${import.meta.env.BASE_URL}/images/icon/hate.webp`}
                                                        className={`md:w-6 w-3 mr-1 object-contain`}
                                                        alt={'싫어함'}
                                                        title={'싫어함'} />
                                                    <span>
                                                        {foodBonus[itemsKey]?.hate}
                                                    </span>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}
                            <div className='md:hidden' />
                            {/* 아래 홑화살괄호 */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-180"
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
                        {/* 사도/음식 블럭 */}
                        {items.map((item) => {

                            const name = type === 'character' ? t(`char.${item}`) : item;
                            const imgUrl = `${import.meta.env.BASE_URL}/images/` + (type === 'character' ? 'character/profile/' : 'food/')
                            // const grade = server === 'global' ? charInfo[c].stats.global?.grade || charInfo[c].stats.default?.grade : charInfo[c].stats.default?.grade;

                            // console.log(persGroup)

                            return (
                                <button
                                    key={'item_' + item}
                                    className={`hover:bg-orange-200 cursor-pointer flex flex-col justify-center relative sm:p-2 p-1 md:w-1/6 xs:w-1/4 w-1/3 ${targetColor(item)} rounded-md`}
                                    onClick={() => handleSetTarget(item)}>

                                    <div className="flex flex-col justify-center items-center">
                                        <div className="relative inline-block w-full">
                                            <img
                                                src={`${imgUrl}${item}.webp`}
                                                className={`w-full h-auto aspect-square object-contain block rounded-t-md ${type === 'food' && !isTargetAndLike(item) ? 'opacity-60' : ''}`}
                                                alt={name}
                                                title={name}
                                            />
                                            {howMuchLike(item) && (
                                                <img
                                                    src={`${import.meta.env.BASE_URL}/images/icon/${howMuchLike(item)}.webp`}
                                                    className="absolute sm:top-[-8px] sm:right-[-10px] top-[-4px] right-[-5px] w-4 rotate-12"
                                                    alt={name}
                                                    title={name}
                                                />
                                            )}
                                        </div>
                                        {type === 'character' && (
                                            <span className="w-full xs:text-[12px] text-[11px] flex justify-center items-center text-wrap font-bold bg-zinc-300 py-[1px] rounded-b-md bg-opacity-75">
                                                <span className=" truncate">
                                                    {name}
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </button>

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

function foodListHeaderColor(l) {

    return l === 5 ? 'bg-[rgb(244,232,163)]'
        : l === 4 ? 'bg-[rgb(196,142,253)]'
            : l === 3 ? 'bg-[rgb(109,175,246)]'
                : l === 2 ? 'bg-[rgb(114,216,133)]'
                    : l === 1 ? 'bg-[rgb(193,193,193)]'
                        : l === 0 ? 'bg-[rgb(230,230,230)]' : '';
}

function foodListHeaderShadow(l) {

    return l === 5 ? 'shadow-[4px_4px_0_0_rgba(244,232,163,0.2)]'
        : l === 4 ? 'shadow-[4px_4px_0_0_rgba(196,142,253,0.2)]'
            : l === 3 ? 'shadow-[4px_4px_0_0_rgba(109,175,246,0.2)]'
                : l === 2 ? 'shadow-[4px_4px_0_0_rgba(114,216,133,0.2)]'
                    : l === 1 ? 'shadow-[4px_4px_0_0_rgba(193,193,193,0.2)]'
                        : l === 0 ? 'shadow-[4px_4px_0_0_rgba(230,230,230,0.2)]' : '';
}

export default React.memo(MyAccordion);