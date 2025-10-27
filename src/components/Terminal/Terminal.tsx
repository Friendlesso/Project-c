export function Terminal() {
  return(
    <section className="flex flex-col flex-1 w-full relative border border-white rounded-md mt-5">
      <h1 className="px-2 py-2 bg-black  absolute top-0 left-1/12 -translate-x-1/2 -translate-y-1/2">Terminal</h1>
      <div className="flex flex-col items-start px-3 py-5 gap-1">
        <p>Commit coment:</p>
        <p>Last commit:</p>
      </div>
    </section>
  )
}