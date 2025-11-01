export function Todo() {
  return (
    <aside className="flex flex-col justify-between border border-white rounded-sm relative w-2/5 h-[65vh] mt-5">
      <h1 className="text-white absolute bg-black px-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">TODO</h1>
      {/* Logic for making tasks  */}
      <div>
        <p className="text-white mt-5">1. Feed Petname 5 times: 1/5</p>
        <p className="text-white ">1. Feed Petname 5 times: 1/5</p>
      </div>
      <div className=" flex flex-col">
        <div className="flex flex-row items-center m-2">
          <p>Pets:</p>
          <p className=" border border-white rounded-md w-full mx-2">0:30:00</p>
        </div>
        <button className=" flex justify-center border border-white border-dashed rounded-md m-2">
          <p>Pet</p>
        </button>
      </div>
    </aside>
  )
}