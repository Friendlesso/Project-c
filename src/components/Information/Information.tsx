import React, { useState } from "react"
import InfoIcon from "../../assets/icons/INFO_Title.svg"
import CloseInfo from "../../assets/icons/CloseInfo.svg"

type InformationProps = {
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Information({ showInfo, setShowInfo }: InformationProps) {

  const [nextAnimation, setNextAnimation] = useState<boolean>(false)

  const handleClosing = () => {
    setTimeout(() => {
      setShowInfo(false);
    }, 300)
    setNextAnimation(false);
  }

  const faqList = [
    {
      question: `something`,
      anwser: `Nothing`,
    }, {
      question: `something more`,
      anwser: `Northing more`,
    }, {
      question: `something even more`,
      anwser: `Nothing even more`,
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
          p-5 
          z-20
          border-0
          rounded-bl-md`}
      >
        <div className="flex flex-col justify-between items-center h-full">
          <button className="flex" onClick={() => {
            handleClosing()
          }}>
            <img className="h-1/2" src={CloseInfo} alt="" />
          </button>
          <img className="h-1/4" src={InfoIcon} alt="" />
        </div>
      </aside>
      <section
        className={`
          absolute top-0 left-1/4
          w-3/4 h-full
          bg-white opacity-85
          text-black
          z-10
          transition-transform duration-300 ease-in-out
          ${nextAnimation ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <p className="bg-white text-black">Hello</p>
      </section>
    </div>
  )
}