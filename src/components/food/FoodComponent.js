import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import MyAccordion from "../../commons/Accordion";
import { charInfo } from "../../data/i18n/charInfo";
import { getAccoState, updateAccoState } from "../../util/accordionUtils";
import { useLanguage } from "../../util/langUtils";

const FoodComponent = ({ target, setTarget, verylike, setVerylike, like, setLike, hate, setHate, soso, setSoso }) => {

    const { foodGradeList, foodGrade, foodBonus, language, server, personality } = useLanguage();
    const { t } = useTranslation();
    const [accoState, setAccoState] = useState(() => getAccoState())
    // const [excludeOpen, setExcludeOpen] = useState(false);

    // console.log(language)

    const handleAccoState = (pers, isOpen) => {
        setAccoState(prev => ({
            ...prev,
            [pers]: isOpen
        }))
    }

    useEffect(() => {
        updateAccoState(accoState);
    }, [accoState]);

    const foodMap = useMemo(() => {
        const map = {};

        Object.entries(charInfo).forEach(([charName, info]) => {
            if (server === 'global' && !info?.names?.ja) return;

            const { food } = info;
            if (!food) return;

            ['verylike', 'like', 'hate', 'soso'].forEach(type => {
                if (food[type]) {
                    food[type].forEach(foodName => {
                        if (!map[foodName]) {
                            map[foodName] = { verylike: [], like: [], hate: [], soso: [] };
                        }
                        map[foodName][type].push(charName);
                    });
                }
            });
        });

        return map;
    }, [server]);

    useEffect(() => {
        const isChar = charInfo[target]?.food;
        if (isChar) {
            setVerylike(isChar?.verylike)
            setLike(isChar?.like)
            setHate(isChar?.hate)
            setSoso(isChar?.soso)
        } else {
            const targetFood = foodMap[target];

            if (targetFood) {
                setVerylike(targetFood?.verylike);
                setLike(targetFood?.like);
                setHate(targetFood?.hate);
                setSoso(targetFood?.soso);
            } else {
                setVerylike([]);
                setLike([]);
                setHate([]);
                setSoso([]);
            }
        }
    }, [target, server, foodMap])

    useEffect(() => {
        if (target) {
            setTarget('');

            setVerylike([]);
            setLike([]);
            setHate([]);
            setSoso([]);

        }
    }, [server]);

    const persGroup = useMemo(() => {
        const group = {};

        personality.forEach(p => group[p] = []);
        const isGlobal = server === 'global';

        Object.entries(charInfo).forEach(([char, info]) => {
            // console.log(char, info)
            if (isGlobal && !info?.names?.ja) return;

            const pers = isGlobal
                ? (info?.stats?.global?.type || info?.stats?.default?.type)
                : info?.stats?.default?.type;
            if (group[pers]) group[pers].push(char);
        })

        const getGrade = (char) => {
            const stats = charInfo[char]?.stats;

            return isGlobal
                ? (stats.global?.grade ?? stats.default?.grade ?? 0)
                : (stats.default?.grade ?? 0);
        };

        Object.values(group).forEach(charArr => {
            charArr.sort((a, b) => getGrade(b) - getGrade(a));
        });

        return group;
    }, [server, personality]);

    // console.log(persGroup)

    const handleSetTarget = useCallback((t) => {
        setTarget(prev => (prev === t ? "" : t));
    }, [target, setTarget])

    const targetColor = useCallback((item) => {

        return verylike?.includes(item) ? 'bg-gradient-to-br from-[rgb(255,168,160)] to-[rgb(14,165,233)]'
            : like?.includes(item) ? 'bg-lime-500'
                : hate?.includes(item) ? 'bg-red-500'
                    : soso?.includes(item) ? 'bg-yellow-300'
                        : target === item ? 'bg-orange-300' : '';
    }, [verylike, like, hate, soso, target])

    const foodListHeaderColor = (l) => {

        return l === 5 ? 'bg-[rgb(244,232,163)]'
            : l === 4 ? 'bg-[rgb(196,142,253)]'
                : l === 3 ? 'bg-[rgb(109,175,246)]'
                    : l === 2 ? 'bg-[rgb(114,216,133)]'
                        : l === 1 ? 'bg-[rgb(193,193,193)]'
                            : l === 0 ? 'bg-[rgb(230,230,230)]' : '';
    }

    const isTargetAndLike = (item) => {

        return (verylike?.includes(item) ||
            like?.includes(item) ||
            soso?.includes(item) ||
            hate?.includes(item)) ||
            target === item ||
            target === '';
    }

    const howMuchLike = useCallback((item) => {

        return verylike?.includes(item) ? 'verylike'
            : like?.includes(item) ? 'like'
                : soso?.includes(item) ? 'soso'
                    : hate.includes(item) && 'hate';
    }, [verylike, like, hate, soso])

    return (
        <div className="">
            <div>
                {/* <div className="flex justify-center mb-2">
                    <span className="font-bold text-[24px]">
                        {target}
                    </span>
                </div> */}
                <div className="flex justify-between">
                    {/* 음식칸 */}
                    <div className="relative md:mr-8 mr-2 max-w-[47%]">
                        {foodGradeList.map((l, i) => (
                            <div key={'foodList_' + i} className="bg-white border-x-2 border-black">
                                {/* 상단 색상칸 */}
                                <div className={`h-8 py-1 ${foodListHeaderColor(l)}`}>
                                    <div className="items-start md:flex md:flex-row hidden gap-x-3">
                                        {l === 0 ? (
                                            language === 'ko' ? (
                                                <div className="pl-2">
                                                    <span className="md:text-[15px] text-[0px]">이벤트 음식은 대부분 좋아합니다.</span>
                                                    <span className="md:text-[0px] text-[13px]">이벤트 음식</span>
                                                </div>
                                            ) : (<></>)
                                        ) : (
                                            <div
                                                className="pl-2 flex md:text-[14px] text-[11px] font-semibold whitespace-nowrap"
                                                title="그럭저럭">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/icon/soso.webp`}
                                                    className={`md:w-6 w-4 mr-1 flex items-center`}
                                                    alt={'그럭저럭'}
                                                    title={'그럭저럭'} />
                                                <span className="flex items-center">
                                                    {foodBonus[l]?.soso}
                                                </span>
                                            </div>
                                        )}

                                        {l !== 0 && target && charInfo[target]?.food && (
                                            <>
                                                {/* verylike 음식이 이 등급에 있는지 확인하고 표시 */}
                                                {foodGrade[l].some(item => verylike?.includes(item)) && (
                                                    <div
                                                        className="pl-2 flex items-center md:text-[14px] text-[11px] font-semibold whitespace-nowrap"
                                                        title="매우좋아함">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/images/icon/verylike.webp`}
                                                            className={`md:w-6 w-4 mr-1`}
                                                            alt={'매우좋아함'}
                                                            title={'매우좋아함'} />
                                                        <span>
                                                            {foodBonus[l]?.verylike}
                                                        </span>
                                                    </div>
                                                )}
                                                {foodGrade[l].some(item => like?.includes(item)) && (
                                                    <div
                                                        className="pl-2 flex items-center md:text-[14px] text-[11px] font-semibold whitespace-nowrap"
                                                        title="좋아함">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/images/icon/like.webp`}
                                                            className={`md:w-6 w-4 mr-1`}
                                                            alt={'좋아함'}
                                                            title={'좋아함'} />
                                                        <span>
                                                            {foodBonus[l]?.like}
                                                        </span>
                                                    </div>
                                                )}
                                                {foodGrade[l].some(item => hate?.includes(item)) && (
                                                    <div
                                                        className="pl-2 flex items-center md:text-[14px] text-[11px] font-semibold whitespace-nowrap"
                                                        title="싫어함">
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/images/icon/hate.webp`}
                                                            className={`md:w-6 w-4 mr-1`}
                                                            alt={'싫어함'}
                                                            title={'싫어함'} />
                                                        <span>
                                                            {foodBonus[l]?.hate}
                                                        </span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>

                                </div>
                                {/* 음식 목록칸 */}
                                <div className="flex flex-wrap text-[10px]">
                                    {foodGrade[l].map((item, i) => (
                                        <div
                                            key={'foodItem_' + item}
                                            className={`p-[2px] hover:bg-orange-200 cursor-pointer group relative ${targetColor(item)} 
                                            lg:w-1/6 md:w-[20%] xxs:w-[33.3%] w-[50%]`}
                                            onClick={() => handleSetTarget(item)}>
                                            {/* 선택되지 않은 음식은 투명도 40% */}
                                            <div className="aspect-square p-2">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/food/${item}.webp`}
                                                    className={`w-full h-full object-contain
                                                    ${isTargetAndLike(item) || 'opacity-60'}`}
                                                    alt={item}
                                                    title={item} />
                                            </div>
                                            {howMuchLike(item) && (
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/icon/${howMuchLike(item)}.webp`}
                                                    className={`w-5 z-10 absolute top-[-3px] right-[-4px] rotate-12`}
                                                    alt={item}
                                                    title={item} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {server !== 'kr' && (
                            <div className="absolute -top-8 left-0 pl-2 text-[14px] font-bold">
                                First Bonus: +40
                            </div>
                        )}
                    </div>
                    {/* 사도칸 */}
                    <div className="relative min-w-[47%] max-w-[47%]">
                        {/* 성격 블럭 */}
                        {personality.map((p, i) => (
                            <div key={'pers_' + p} className={`w-full border-x-2 border-black`}>
                                <MyAccordion
                                    open={accoState[p] ?? true}
                                    onOpenChange={(open) => handleAccoState(p, open)}
                                    persKey={p}
                                    headerText={t(`personality.${p}`)}
                                    items={persGroup[p]}
                                    targetColor={targetColor}
                                    handleSetTarget={handleSetTarget}
                                    server={server}
                                    t={t}
                                    howMuchLike={howMuchLike}
                                />

                            </div>
                        ))}

                        {/* <div className="absolute -top-12 right-0 sm:left-0 sm:mr-1 p-1">
                            <button
                                onClick={() => setExcludeOpen(p => !p)}>
                                <ExcludeIcon />
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default FoodComponent;