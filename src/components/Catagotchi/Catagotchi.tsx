import SadCat from "../../assets/Cat Sad.png"


export function Catagotchi() {
  return (
    <section className="flex flex-col justify-center items-center relative w-3/5 h-[65vh] mt-5 border border-white rounded-md">
      <h1 className="bg-black px-2 absolute top-0 -translate-y-1/2">Catagotchi</h1>

      <div className="flex justify-center w-full h-2/3">
        <img
          className="w-auto h-auto object-contain"
          src={SadCat}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end items-start w-full h-1/4 px-5">
        <p>Mood: Sad</p>
        <p>Repo: Project-c</p>
        <p>Commits: 54</p>
      </div>
    </section>
  )
}