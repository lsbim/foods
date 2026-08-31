import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import MyAccordion from "../../commons/Accordion";
import { charInfo } from "../../data/i18n/charInfo";
import { getAccoState, updateAccoState } from "../../util/accordionUtils";
import { useLanguage } from "../../util/langUtils";
import { foodFamilyMap } from "../../data/food/foodFamilyMap";

const FoodComponent = ({ target, setTarget, verylike, setVerylike, like, setLike, hate, setHate, soso, setSoso }) => {

    const { foodGradeList, foodGrade, foodBonus, server, personality } = useLanguage();
    const { t, i18n } = useTranslation();
    const language = i18n.language;
    const [accoState, setAccoState] = useState(() => getAccoState())

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

        const addFood = (foodName, type, charName) => {
            if (!map[foodName]) {
                map[foodName] = { verylike: [], like: [], hate: [], soso: [] };
            }
            if (!map[foodName][type].includes(charName)) {
                map[foodName][type].push(charName);
            }
        };

        Object.entries(charInfo).forEach(([charName, info]) => {
            if (server === 'global' && !info?.names?.ja) return;

            const { food } = info;
            if (!food) return;

            if (food.verylike) {
                food.verylike.forEach(baseFood => {
                    const upperFoods = foodFamilyMap[baseFood] || [];
                    upperFoods.forEach(uf => addFood(uf, 'verylike', charName)); // value -> verylike
                    addFood(baseFood, 'like', charName); // key -> like
                });
            }

            if (food.like) {
                food.like.forEach(baseFood => {
                    const upperFoods = foodFamilyMap[baseFood] || [];
                    addFood(baseFood, 'like', charName);
                    upperFoods.forEach(uf => addFood(uf, 'like', charName));
                });
            }

            if (food.hate) {
                food.hate.forEach(baseFood => {
                    const upperFoods = foodFamilyMap[baseFood] || [];
                    addFood(baseFood, 'hate', charName);
                    upperFoods.forEach(uf => addFood(uf, 'hate', charName));
                });
            }

            if (food.soso) { // 현재 soso는 로네 송편만
                food.soso.forEach(baseFood => {
                    addFood(baseFood, 'soso', charName);
                });
            }
        });

        return map;
    }, [server]);

    useEffect(() => {
        const isChar = charInfo[target]?.food;
        if (isChar) {
            const expVerylike = new Set();
            const expLike = new Set();
            const expHate = new Set();
            const expSoso = new Set();

            if (isChar.verylike) {
                isChar.verylike.forEach(baseFood => {
                    const upperFoods = foodFamilyMap[baseFood] || [];
                    upperFoods.forEach(uf => expVerylike.add(uf)); // 매우만족은 value
                    expLike.add(baseFood); // 만족은 key
                });
            }
            if (isChar.like) {
                isChar.like.forEach(baseFood => {
                    const upperFoods = foodFamilyMap[baseFood] || [];
                    expLike.add(baseFood);
                    upperFoods.forEach(uf => expLike.add(uf));
                });
            }
            if (isChar.hate) {
                isChar.hate.forEach(baseFood => {
                    const upperFoods = foodFamilyMap[baseFood] || [];
                    expHate.add(baseFood);
                    upperFoods.forEach(uf => expHate.add(uf));
                });
            }
            if (isChar.soso) {
                isChar.soso.forEach(baseFood => {
                    expSoso.add(baseFood);
                });
            }

            setVerylike(Array.from(expVerylike));
            setLike(Array.from(expLike));
            setHate(Array.from(expHate));
            setSoso(Array.from(expSoso));

        } else {
            const targetFood = foodMap[target];

            if (targetFood) {
                setVerylike(targetFood.verylike || []);
                setLike(targetFood.like || []);
                setHate(targetFood.hate || []);
                setSoso(targetFood.soso || []);
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
    // console.log(foodMap)
    // console.log(`target: ${target}\n\nverylike: ${verylike}\nlike: ${like}\nhate: ${hate}`)

    const handleSetTarget = useCallback((t) => {
        setTarget(prev => {
            const next = prev === t ? "" : t;

            if (next && window.gtag) {
                window.gtag('event', 'select_target', {
                    target_name: next,
                    // charInfo에 있으면 사도 없으면 음식
                    target_type: charInfo[next] ? 'character' : 'food',
                });
            }

            return next;
        });
    }, [setTarget])

    const targetColor = useCallback((item) => {

        return verylike?.includes(item) ? 'bg-gradient-to-br from-[rgb(245,163,183)] to-[rgb(14,165,233)]'
            : like?.includes(item) ? 'bg-lime-500'
                : hate?.includes(item) ? 'bg-red-500'
                    : soso?.includes(item) ? 'bg-yellow-300'
                        : target === item ? 'bg-orange-300' : '';
    }, [verylike, like, hate, soso, target])

    const isTargetAndLike = useCallback((item) => {

        return (verylike?.includes(item) ||
            like?.includes(item) ||
            soso?.includes(item) ||
            hate?.includes(item)) ||
            target === item ||
            target === '';
    }, [verylike, like, hate, soso, target])

    const howMuchLike = useCallback((item) => {

        return verylike?.includes(item) ? 'verylike'
            : like?.includes(item) ? 'like'
                : soso?.includes(item) ? 'soso'
                    : hate.includes(item) && 'hate';
    }, [verylike, like, hate, soso])

    return (
        <div>
            <div className="flex justify-between">
                {/* 음식칸 */}
                <div className="relative max-w-[47%] min-w-[47%]">
                    {foodGradeList.map((l) => (
                        <div key={'foodList_' + l} className="w-full">
                            <MyAccordion
                                open={accoState[l] ?? true}
                                onOpenChange={(open) => handleAccoState(l, open)}
                                itemsKey={l}
                                items={foodGrade[l]}
                                targetColor={targetColor}
                                handleSetTarget={handleSetTarget}
                                howMuchLike={howMuchLike}
                                isTargetAndLike={isTargetAndLike}
                                type='food'
                                foodBonus={foodBonus}
                                language={language}
                                verylike={verylike}
                                like={like}
                                hate={hate}
                                target={target}
                            />
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
                    {personality.map((p) => (
                        <div key={'pers_' + p} className={`w-full`}>
                            <MyAccordion
                                open={accoState[p] ?? true}
                                onOpenChange={(open) => handleAccoState(p, open)}
                                itemsKey={p}
                                headerText={t(`personality.${p}`)}
                                items={persGroup[p]}
                                targetColor={targetColor}
                                handleSetTarget={handleSetTarget}
                                t={t}
                                howMuchLike={howMuchLike}
                                isTargetAndLike={isTargetAndLike}
                                type='character'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FoodComponent;