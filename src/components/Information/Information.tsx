import React, { useState } from "react"
import InfoIcon from "../../assets/icons/INFO_Title.svg"
import CloseInfo from "../../assets/icons/Info_Close.svg"

import HoverCloseInfo from "../../assets/icons/Info_Close_Hover.svg"


type InformationProps = {
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Information({ showInfo, setShowInfo }: InformationProps) {

  const [nextAnimation, setNextAnimation] = useState<boolean>(false)
  const [hovered, setHovered] = useState<boolean>(false)

  const handleClosing = () => {
    setNextAnimation(false);
    setTimeout(() => {
      setShowInfo(false);
    }, 250)

  }

  const faqList = [
    {
      question: `How to pet my pet?`,
      anwser: `Click the “Pet” button to show affection. After each interaction, there’s a 30-second cooldown before you can do it again.`,
    }, {
      question: `How do I feed my pet?`,
      anwser: `Commit code using Git to keep your pet happy and full! Every commit counts as a meal.`,
    }, {
      question: `How do I play with my pet?`,
      anwser: `You can play with it by pushing code using Git. Each push keeps your pet active and happy.`,
    }
  ]

  return (
    <div className={`absolute top-0 left-0 w-full h-full flex
      transform transition-transform duration-300 ease-in-out
      ${showInfo ? "translate-y-0" : "-translate-y-full"}
    `}
      onTransitionEnd={() => {
        if (showInfo && !nextAnimation) {
          setNextAnimation(true)
        }
      }}>
      <aside
        className={`
          bg-white 
          w-1/4 h-full 
          shadow-xl 
          p-10 
          z-20
          border-0
          rounded-bl-md`}
      >
        <div className="flex flex-col justify-between items-center h-full">
          <button
            className="flex text-black text-5xl cursor-pointer"
            onClick={() => {
              handleClosing()
            }}
            onMouseEnter={() => {
              setHovered(true)
            }}
            onMouseLeave={() => {
              setHovered(false)
            }}
          >
            <img className="h-12 transition-all duration-200" src={hovered ? `${HoverCloseInfo}` : `${CloseInfo}`} alt="" />
          </button>
          <img className="h-1/4" src={InfoIcon} alt="" />
        </div>
      </aside>
      <section
        className={`
          flex flex-col
          absolute top-0 left-1/4
          w-3/4 h-full
          bg-white opacity-85
          text-black
          z-10
          pt-13 pl-13 pr-4
          transition-transform duration-300 ease-in-out
          ${nextAnimation ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <h3 className="bg-white text-black mb-4 text-xl font-[Montserrat]">How to care for Catagotchi</h3>
        <div className="h-full">
          <ul className="flex flex-col h-full gap-6">
            {faqList.map((list,index) => (
              <li key={index} className="flex flex-col bg-white items-start font-[Montserrat]">
                <p className="text-lg">{index + 1}. {list.question}</p>
                <p className="text-left">-{list.anwser}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}