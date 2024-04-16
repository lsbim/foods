import { useEffect, useState } from "react";
import { charInfo, charType, typeList } from "../../../commons/char/charInfo";
import { foodGrade, foodGradeList } from "../../../commons/food/foodInfo";

// 선호도 배경색 설정
// ${
//     like.includes(item) ? 'bg-green-400' :
//     hate.includes(item) ? 'bg-red-500' :
//         target === item ? 'bg-orange-200' : ''
// }

const FoodComponent = () => {

    const [target, setTarget] = useState('');
    const [like, setLike] = useState([]);
    const [hate, setHate] = useState([]);

    useEffect(() => {
        const isChar = charInfo[target];
        if (isChar) {
            setLike(isChar.like)
            setHate(isChar.hate)
        } else {
            const likeChars = [];
            const hateChars = [];

            Object.entries(charInfo).forEach(([char, info]) => {
                if (info.like.includes(target)) {
                    likeChars.push(char);
                }
                if (info.hate.includes(target)) {
                    hateChars.push(char);
                }
            });

            setLike(likeChars);
            setHate(hateChars);
        }
    }, [target])

    return (
        <div className="mt-24 mb-12">
            <div>
                <div className="flex justify-center mb-2">
                    <span className="font-bold text-[24px]">
                        {target}
                    </span>
                </div>
                <div className="flex">
                    <div className="mr-8">
                        {foodGradeList.map((l, i) => (
                            <div key={i} className="bg-white border-x-2 border-black">
                                <div className={`h-6
                                ${l === 4 ? 'bg-[rgb(196,142,253)]'
                                        : l === 3 ? 'bg-[rgb(109,175,246)]'
                                            : l === 2 ? 'bg-[rgb(114,216,133)]'
                                                : l === 1 ? 'bg-[rgb(193,193,193)]'
                                                    : l === 0 ? 'bg-[rgb(220,220,220)]' : ''}`}>
                                    <span className="pl-2">
                                        {l === 0 && '이벤트 음식은 대부분 좋아합니다.'}
                                    </span>
                                </div>
                                <div className="flex flex-wrap">
                                    {foodGrade[l].map((item, i) => (
                                        <div
                                            key={i}
                                            className={`hover:bg-orange-200 cursor-pointer group relative ${like.includes(item) ? 'bg-green-400' :
                                                hate.includes(item) ? 'bg-red-500' :
                                                    target === item ? 'bg-orange-300' : ''
                                                }`}
                                            onClick={() => setTarget(item)}>
                                            <img
                                                src={`/images/음식/${l}/${item}.png`}
                                                className="h-[60px]  w-auto object-contain m-2"
                                                alt={item}
                                                title={item} />
                                            {/* 오른쪽위 선호도 아이콘
                                            <div
                                                className={`absolute top-0 right-0 w-6 h-6 rounded-full ${like.includes(item)
                                                    ? "bg-green-500 border-2 border-black"
                                                    : hate.includes(item)
                                                        ? "bg-red-400 border-2 border-black"
                                                        : ""
                                                    }`}
                                            ></div> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        {typeList.map((t, i) => (
                            <div key={i} className={`flex flex-wrap border-x-2 border-black`}>

                                <div className={`h-6 w-full font-bold
                                ${t === '순수' ? 'bg-[rgb(102,193,124)]'
                                        : t === '냉정' ? 'bg-[rgb(131,185,235)]'
                                            : t === '광기' ? 'bg-[rgb(235,131,154)]'
                                                : t === '활발' ? 'bg-[rgb(235,219,131)]'
                                                    : t === '우울' ? 'bg-[rgb(198,131,236)]' : ''}`}>
                                    <span className="pl-2">
                                        {t}
                                    </span>
                                </div>
                                <div className="flex flex-wrap">
                                    {charType[t].map((c, i) => (
                                        <div
                                            key={i}
                                            className={`hover:bg-orange-200 cursor-pointer flex flex-col justify-center relative ${like.includes(c) ? 'bg-green-400' :
                                                hate.includes(c) ? 'bg-red-500' :
                                                    target === c ? 'bg-orange-300' : ''
                                                }`}
                                            onClick={() => setTarget(c)}>
                                            <img
                                                src={`/images/사도/${t}/${c}.png`}
                                                className="h-[60px]  w-auto object-contain m-2"
                                                alt={c}
                                                title={c} />

                                            {/* 오른쪽위 선호도 아이콘
                                            <div
                                                className={`absolute top-0 right-0 w-6 h-6 rounded-full ${like.includes(c)
                                                    ? "bg-green-500 border-2 border-black"
                                                    : hate.includes(c)
                                                        ? "bg-red-400 border-2 border-black"
                                                        : ""
                                                    }`}
                                            ></div> */}
                                            <span className="text-[12px] flex justify-center items-center text-wrap font-bold">
                                                {c}
                                            </span>
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-orange-200 group-hover:h-2 transition-all duration-300"></div>
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