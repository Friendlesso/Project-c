import { useEffect, useState } from "react"

export function Todo() {

  const [pets, setPets] = useState<number>(0)
  const [num, setNums] = useState<number|null>(null)


  useEffect(() => {

    const saved = localStorage.getItem("nums")

    if(saved) {
      setNums(Number(saved));
    } else {
      const NewRandom = Math.floor(Math.random() * 5) + 1;
      localStorage.setItem("nums", NewRandom.toString())
      setNums(NewRandom);
    }
  },[])
  
  const handleRestes = () => {
    const newRandom = Math.floor(Math.random() * 5) + 1;
    localStorage.setItem("nums", newRandom.toString());
    setNums(newRandom);
    setPets(0);
  }

  const handlePets = () => {
    if(num !== null && pets < num) {
      setPets(prev => prev + 1);
    }
  }

  return (
    <aside className="flex flex-col justify-between border border-white rounded-sm relative w-2/5 h-[65vh] mt-5">
      <h1 className="text-white absolute bg-black px-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">TODO</h1>
      {/* Logic for making tasks  */}
      <div className="flex flex-col justify-center items-start mx-2">
        <p className="text-white mt-5">1. Feed Petname 5 times: 1/5</p>
        <p className="text-white ">1. Pet Petname 5 times: {pets}/{num}</p>
      </div>
      <div className=" flex flex-col">
        <div className="flex flex-row items-center m-2">
          <p>Pets:</p>
          <p className=" border border-white rounded-md w-full mx-2">0:30:00</p>
        </div>
        <button className="border border-white border-dashed rounded-md mx-2"
          onClick={() => handleRestes()}
        >Reste pets</button>
        <button className=" flex justify-center border border-white border-dashed rounded-md m-2"
        onClick={() => handlePets()}>
          <p>Pet</p>
        </button>
      </div>
    </aside>
  )
}