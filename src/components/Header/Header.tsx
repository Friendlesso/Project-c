import { NavMenu } from "./NavMenu"
import { FakeVisualizer } from "./SoundBar"

export function Header() {
  return(
    <header className="flex justify-between items-end border border-white rounded-md px-2 py-2 [-webkit-app-region:drag]">
      <FakeVisualizer />
      <div className="[-webkit-app-region:no-drag]" >
        <NavMenu />
      </div>
      <FakeVisualizer />
    </header>
  )
}