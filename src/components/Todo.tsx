export function Todo() {
  return (
    <aside className="border border-white rounded-sm relative h-[65vh] w-0.5/1 mt-5 px-2">
      <h1 className="text-white absolute bg-black px-2 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">TODO</h1>
      {/* Logic for making tasks  */}
      <p className="text-white mt-5">1. Feed Petname 5 times: 1/5</p>
    </aside>
  )
}