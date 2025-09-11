import { useEffect, useState } from "react";
import { charInfo, charType, typeList } from "../../../commons/char/charInfo";
import { foodBonus, foodGrade, foodGradeList } from "../../../commons/food/foodInfo";

// 선호도 배경색 설정
// ${
//     like.includes(item) ? 'bg-green-400' :
//     hate.includes(item) ? 'bg-red-500' :
//         target === item ? 'bg-orange-200' : ''
// }

const FoodComponent = ({ target, setTarget, verylike, setVerylike, like, setLike, hate, setHate, soso, setSoso }) => {


    useEffect(() => {
        const isChar = charInfo[target];
        if (isChar) {
            setVerylike(isChar.verylike)
            setLike(isChar.like)
            setHate(isChar.hate)
            setSoso(isChar.soso)
        } else {
            const verylikeChars = [];
            const likeChars = [];
            const hateChars = [];
            const sosoChars = [];

            Object.entries(charInfo).forEach(([char, info]) => {
                if (info.verylike?.includes(target)) {
                    verylikeChars.push(char);
                }
                if (info.like?.includes(target)) {
                    likeChars.push(char);
                }
                if (info.hate?.includes(target)) {
                    hateChars.push(char);
                }
                if (info.soso?.includes(target)) {
                    sosoChars.push(char);
                }
            });
            setVerylike(verylikeChars);
            setLike(likeChars);
            setHate(hateChars);
            setSoso(sosoChars);
        }
    }, [target])

    const handleSetTarget = (t) => {
        if (t === target) {
            setTarget("")
        } else {
            setTarget(t)
        }
    }

    const targetColor = (item) => {

        return verylike?.includes(item) ? 'bg-gradient-to-br from-yellow-200 to-sky-600'
            : like?.includes(item) ? 'bg-green-400'
                : hate?.includes(item) ? 'bg-red-500'
                    : soso?.includes(item) ? 'bg-yellow-300'
                        : target === item ? 'bg-orange-300' : '';
    }

    const foodListHeaderColor = (l) => {

        return l === 5 ? 'bg-[rgb(244,232,163)]'
            : l === 4 ? 'bg-[rgb(196,142,253)]'
                : l === 3 ? 'bg-[rgb(109,175,246)]'
                    : l === 2 ? 'bg-[rgb(114,216,133)]'
                        : l === 1 ? 'bg-[rgb(193,193,193)]'
                            : l === 0 ? 'bg-[rgb(230,230,230)]' : '';
    }

    const charListHeaderColor = (t) => {

        return t === '순수' ? 'bg-[rgb(102,193,124)]'
            : t === '냉정' ? 'bg-[rgb(131,185,235)]'
                : t === '광기' ? 'bg-[rgb(235,131,154)]'
                    : t === '활발' ? 'bg-[rgb(235,219,131)]'
                        : t === '우울' ? 'bg-[rgb(198,131,236)]' : '';
    }

    const isNotTarget = (item) => {

        return (verylike?.includes(item) ||
            like?.includes(item) ||
            hate.includes(item)) ||
            target === item ||
            target === '';
    }

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
                    <div className="md:mr-8 mr-2 max-w-[47%]">
                        {foodGradeList.map((l, i) => (
                            <div key={i} className="bg-white border-x-2 border-black">
                                <div className={`min-h-6 flex items-center py-1
                                ${foodListHeaderColor(l)}`}>

                                    {l === 0 ? (
                                        <div className="pl-2">
                                            <span className="md:text-[15px] text-[0px]">이벤트 음식은 대부분 좋아합니다.</span>
                                            <span className="md:text-[0px] text-[13px]">이벤트 음식</span>
                                        </div>
                                    ) : (
                                        <div
                                            className="pl-2 sm:text-[14px] text-[11px] font-semibold whitespace-nowrap"
                                            title="그럭저럭">💛 {foodBonus[l]?.soso}</div>
                                    )}

                                    {l !== 0 && target && charInfo[target] && (
                                        <div className="pl-2 sm:text-[14px] text-[11px] font-semibold flex flex-wrap gap-x-2 mr-2">
                                            {/* verylike 음식이 이 등급에 있는지 확인하고 표시 */}
                                            {foodGrade[l].some(item => verylike?.includes(item)) && (
                                                <div title="매우좋아함">💙 {foodBonus[l]?.verylike}</div>
                                            )}
                                            {foodGrade[l].some(item => like?.includes(item)) && (
                                                <div title="좋아함">💚 {foodBonus[l]?.like}</div>
                                            )}
                                            {foodGrade[l].some(item => hate?.includes(item)) && (
                                                <div title="싫어함">😡 {foodBonus[l]?.hate}</div>
                                            )}
                                        </div>
                                    )}

                                </div>
                                <div className="flex flex-wrap text-[10px]">
                                    {foodGrade[l].map((item, i) => (
                                        <div
                                            key={i}
                                            className={`hover:bg-orange-200 cursor-pointer group relative ${targetColor(item)}`}
                                            onClick={() => handleSetTarget(item)}>
                                            {/* 선택되지 않은 음식은 투명도 40% */}
                                            <img
                                                src={`${process.env.PUBLIC_URL}/images/음식/${l}/${item}.png`}
                                                className={`md:h-[60px] h-[40px] w-auto object-contain m-2 aspect-square
                                                    ${isNotTarget(item) || 'opacity-60'}`}
                                                alt={item}
                                                title={item} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* 사도칸 */}
                    <div className="max-w-[47%]">
                        {/* 성격 블럭 */}
                        {typeList.map((t, i) => (
                            <div key={i} className={`flex flex-wrap border-x-2 border-black`}>
                                <div className={`h-6 w-full font-bold
                                ${charListHeaderColor(t)}`}>
                                    <span className="pl-2">
                                        {t}
                                    </span>
                                </div>
                                <div className="flex flex-wrap md:justify-start justify-center">
                                    {/* 캐릭터 블럭 */}
                                    {charType[t].map((c, i) => (
                                        <div
                                            key={i}
                                            className={`hover:bg-orange-200 cursor-pointer flex flex-col justify-center relative md:w-[70px] w-[60px] mx-[1px]
                                            ${targetColor(c)}`}
                                            onClick={() => handleSetTarget(c)}>

                                            <div className="relative flex justify-center text-[10px]">
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/사도/볼/${c}.png`}
                                                    className="h-[60px] w-auto object-contain m-2"
                                                    alt={c}
                                                    title={c} />
                                                <img
                                                    src={`${process.env.PUBLIC_URL}/images/사도/${charInfo[c].grade}.png`}
                                                    className="h-[10px] absolute bottom-[-6px] w-auto object-contain m-2"
                                                    alt={c}
                                                    title={c} />
                                            </div>
                                            <span className="text-[12px] flex justify-center items-center text-wrap font-bold">
                                                <span className=" truncate">
                                                    {c}
                                                </span>
                                            </span>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodComponent;