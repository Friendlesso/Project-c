import { useEffect, useState } from "react"
import { PetButton } from "./PetButton"
import { CountdownTimer } from "./CountdownTimer"
import dayjs from "dayjs"

export function Todo() {

  const [pets, setPets] = useState<number>(0)
  const [num, setNums] = useState<number | null>(null)
  // Handle the starting of pet timer
  const [cooldown, setCooldown] = useState(false)

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    const savedDate = localStorage.getItem("lastDate");

    if(savedDate !== today) {
      const newRandom = Math.floor(Math.random() * 5) + 1;
      setNums(newRandom);
      setPets(0);
      localStorage.setItem("nums", newRandom.toString())
      localStorage.setItem("pets", "0")
      localStorage.setItem("lastDate", today);
    } else {
      const savedNums = localStorage.getItem("nums");
      const savedPets = localStorage.getItem("pets");
      if(savedNums) setNums(Number(savedNums));
      if(savedPets) setPets(Number(savedPets));
    }
  }, [])

  return (
    <aside className="flex flex-col justify-between border border-white rounded-sm relative w-2/5 h-[65vh] mt-5">
      <h1 className="text-white absolute bg-black px-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">TODO</h1>
      {/* Logic for making tasks  */}
      <div className="flex flex-col justify-center items-start mx-2">
        <p className="text-white mt-5">1. Feed Petname 5 times: 1/5</p>
        <p className="text-white ">1. Pet Petname {num} times: {pets}/{num}</p>
      </div>
      <div className=" flex flex-col">
        <CountdownTimer cooldown={cooldown} setCooldown={setCooldown} />
        <PetButton
          pets={pets}
          setPets={setPets}
          num={num}
          setNums={setNums}
          setCooldown={setCooldown}
          cooldown={cooldown}
        />
      </div>
    </aside>
  )
}