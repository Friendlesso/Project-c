import CloseIcon from "../../assets/icons/Close.svg"
import InfoIcon from "../../assets/icons/Info.svg"
import MinimizeIcon from "../../assets/icons/Minimize.svg"

export function NavMenu() {

  const handleMinimize = () => {
    window.electronAPI.minimize();
  }

  return (
    <nav className="flex w-fit h-fit border border-white py-1.5 px-2 gap-2 rounded-md"> 
      <button 
        className="flex p-1 border border-white rounded-sm cursor-pointer"
        onClick={handleMinimize}  
      >
        <img className="w-4 h-4" src={MinimizeIcon} alt="Minimize Window" />
      </button>
      <button className="flex p-1 border  border-white rounded-sm cursor-pointer">
        <img className="w-4 h-4" src={InfoIcon} alt="Info Window" />
      </button>
      <button className="flex p-1 border border-white rounded-sm cursor-pointer">
        <img className="w-4 h-4" src={CloseIcon} alt="Close Window" />
      </button>
    </nav>
  )
}