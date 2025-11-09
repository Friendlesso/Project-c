import "./index.css"
import './App.css'
import { useState } from "react"
import { Header } from './components/Header/Header'
import { Todo } from "./components/Todo/Todo"
import { Terminal } from "./components/Terminal/Terminal"
import { Catagotchi } from "./components/Catagotchi/Catagotchi"
import { Information } from "./components/Information/Information"


function App() {

  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <>
      <div className={`flex flex-col relative ${showInfo ? "opacity-25" : ""}`}>
        <Header setShowInfo={setShowInfo} />
        <main className="flex justify-between items-center gap-2">
          <Catagotchi />
          <Todo />
        </main>
        <Terminal />
      </div>
        <Information showInfo={showInfo} setShowInfo={setShowInfo} />
    </>
  )
}

export default App
