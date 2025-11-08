import React from "react"

type InformationProps = {
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export function Information({ setShowInfo }: InformationProps) {

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
    <section className="w-[75%] h-[90%] bg-black border-4 border-white rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6">
      <header className="flex justify-between">
        <h3 className="text-xl">Info</h3>
        <button
          onClick={() => {
            setShowInfo(false)
          }}
        >X</button>
      </header>
      <h4 className="text-lg">How to care for my Catagotchi?</h4>
      <div>
        <ul>
          {faqList.map((faq, index) => (
            <li key={index} className="flex flex-col items-start gap-2">
              <div className="flex gap-2">
                <p>{index + 1}.</p>
                <p>{faq.question}</p>
              </div>
              <p>-{faq.anwser}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}