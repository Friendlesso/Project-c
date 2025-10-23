import CloseIcon from "../../assets/icons/Close.svg"
import InfoIcon from "../../assets/icons/Info.svg"
import MinimizeIcon from "../../assets/icons/Minimize.svg"

export function NavMenu() {
  return (
    <nav className="flex w-fit border border-white p-1.5 gap-2 rounded-md"> 
      <button className="flex p-1 border border-white rounded-sm cursor-pointer">
        <img className="w-5 h-5" src={MinimizeIcon} alt="Minimize Window" />
      </button>
      <button className="flex p-1 border  border-white rounded-sm cursor-pointer">
        <img className="w-5 h-5" src={InfoIcon} alt="Info Window" />
      </button>
      <button className="flex p-1 border border-white rounded-sm cursor-pointer">
        <img className="w-5 h-5" src={CloseIcon} alt="Close Window" />
      </button>
    </nav>
  )
}