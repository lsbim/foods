import React, { useState, useEffect, useRef } from 'react';
import { charQuest } from '../../commons/food/question';

const QTooltipComponent = ({ name, children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const tooltipRef = useRef(null);
  const [tooltipText, setTooltipText] = useState([]);

  useEffect(() => {
    if (charQuest[name]) {
      const entries = Object.entries(charQuest[name]);
      setTooltipText(
        entries.map(([question, answer]) => ({
          question,
          answer,
          isActive: false,
        }))
      );
    }
  }, [name]);

  const handleQuestionClick = (index) => {
    setActiveQuestion((prevIndex) =>
      prevIndex === index ? null : index
    );
    setTooltipText((prevTooltipText) =>
      prevTooltipText.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  const handleClick = (event) => {
    event.stopPropagation(); // 이벤트 전파 방지
    setIsClicked((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
      setIsClicked(false);
      setActiveQuestion(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div onClick={handleClick}>{children}</div>
      {isClicked && (
        <div
          ref={tooltipRef}
          className="absolute z-10 top-0 left-full ml-2 border-2 border-[rgb(40,50,57)] bg-white rounded p-2 shadow-md"
        >
          {tooltipText.map(({ question, answer, isActive }, index) => (
            <div key={question} className="mb-2">
              <div
                className={`font-bold whitespace-nowrap cursor-pointer text-[14px] hover:bg-gray-100 ${
                  isActive ? 'bg-gray-300' : ''
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                {question}
              </div>
              {isActive && <div className="pt-1 text-[13px] bg-gray-100">{answer}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QTooltipComponent;