
type PetButtonProps = {
  pets: number;
  setPets: React.Dispatch<React.SetStateAction<number>>;
  num: number | null;
  setNums: React.Dispatch<React.SetStateAction<number | null>>;
  setCooldown: React.Dispatch<React.SetStateAction<boolean>>;
  cooldown: boolean;
}

export function PetButton({ pets, setPets, num, setNums, setCooldown, cooldown }: PetButtonProps) {

  const handleRestes = () => {
    const newRandom = Math.floor(Math.random() * 5) + 1;
    localStorage.setItem("nums", newRandom.toString());
    setNums(newRandom);
    setPets(0);
    localStorage.setItem("pets", "0")
  }

  const handlePets = () => {
    if (num !== null && pets < num) {
      setPets(prev => {
        const newPets = prev + 1;
        localStorage.setItem("pets", newPets.toString());
        return newPets
      })
    }
  }

  return (
    <>
      <button className="border border-white border-dashed rounded-md mx-2"
        onClick={() => handleRestes()}
      >Reste pets</button>
      <button
        className=" 
          flex justify-center 
          border border-white border-dashed 
          rounded-md 
          m-2 
          hover:bg-white
          hover:text-black
          transition-all
          duration-150
          ease-in-out
          cursor-pointer 
          disabled:text-gray-500 
          disabled:border-gray-500 
          disabled:cursor-not-allowed
        "

        onClick={() => {
          handlePets();
          setCooldown(true);
        }}
        disabled={cooldown || (num !== null && pets >= num)}
      >
        <p>Pet</p>
      </button >
    </>
  )
}