import { useState } from "react"
import CloseIcon from "../../assets/icons/Close.svg"
import HoverCloseIcon from "../../assets/icons/HoverClose.svg"
import InfoIcon from "../../assets/icons/Info.svg"
import HoverInfoIcon from "../../assets/icons/HoverInfo.svg"
import MinimizeIcon from "../../assets/icons/Minimize.svg"
import HoverMinimizeicon from "../../assets/icons/HoverMinimize.svg"

type NavMenuProps = {
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export function NavMenu({ setShowInfo }: NavMenuProps) {
  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({});

  const handleMinimize = () => {
    window.electronAPI.minimize();
  }

  const handleClose = () => {
    window.electronAPI.close();
  }

  const buttons = [
    { key: "minimize", icon: MinimizeIcon, hoverIcon: HoverMinimizeicon, onClick: handleMinimize, alt: "Minimize" },
    { key: "info", icon: InfoIcon, hoverIcon: HoverInfoIcon, onClick: () => setShowInfo(true), alt: "Information" },
    { key: "close", icon: CloseIcon, hoverIcon: HoverCloseIcon, onClick: handleClose, alt: "Close App" },
  ]

  return (
    <nav className="flex w-fit h-fit border border-white py-1.5 px-2 gap-2 rounded-md">
      {buttons.map(btn => (
        <button
          key={btn.key}
          className={`flex p-1 border border-white rounded-sm cursor-pointer ${hovered[btn.key] ? 'bg-white' : ''}`}
          onClick={btn.onClick}
          onMouseEnter={() => setHovered(prev => ({ ...prev, [btn.key]: true }))}
          onMouseLeave={() => setHovered(prev => ({ ...prev, [btn.key]: false }))}
        >
          <img className="w-4 h-4" src={hovered[btn.key] ? btn.hoverIcon : btn.icon} alt={btn.alt} />
        </button>
      ))}
    </nav>
  )
}