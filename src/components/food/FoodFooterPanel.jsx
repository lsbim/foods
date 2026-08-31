import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { imagePath } from '../../constants/path';
import { charInfo } from '../../data/i18n/charInfo';

const FoodFooterPanel = ({
    target,
    verylike,
    like,
    hate
}) => {

    const isCharacter = target ? Object.hasOwn(charInfo, target) : false;

    const panelConfig = {
        verylike: {
            data: verylike,
            label: 'verylike'
        },
        like: {
            data: like,
            label: 'like'
        },
        hate: {
            data: hate,
            label: 'hate'
        },
    }

    return (
        <AnimatePresence mode="wait">
            {target && isCharacter && (
                <motion.div
                    key={target}
                    className="fixed h-[150px] lg:h-[100px] w-[max(310px,50%)] lg:w-[80%] mx-auto bottom-4 left-0 right-0 rounded-3xl shadow-xl bg-white/85 backdrop-blur-sm p-4 overflow-hidden flex items-center justify-center"
                    initial={{ opacity: 0, x: -24 }} // 처음 나타날 때 시작하는 값(투명도, 위치 등)
                    animate={{ opacity: 1, x: 0 }} // 마운트된 뒤 도달해야 할 값
                    exit={{ opacity: 0, x: 24 }} // 언마운트 직전 행해야 할 값
                    transition={{ duration: 0.25, ease: 'easeOut' }} // 애니메이션 방식
                >
                    <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-1">
                        {Object.entries(panelConfig).map(([grade, item]) => (
                            <div
                                key={`panel_${grade}`}
                                className="relative flex gap-1">
                                {item.data.map(data => (
                                    <div
                                        key={`panel_${data}`}
                                        className="relative lg:w-14 w-10 overflow-hidden">
                                        <img
                                            src={imagePath('food', data)}
                                            className={`w-full h-auto aspect-square object-contain`}
                                        />
                                        <img
                                            src={imagePath('icon', item.label)}
                                            className="absolute sm:top-[-2px] sm:right-[-2px] top-[-2px] right-[-2px] md:w-6 w-5 rotate-[18deg]"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default React.memo(FoodFooterPanel)