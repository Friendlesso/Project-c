import "./index.css"
import './App.css'
import { Header } from './components/Header/Header'
import { Todo } from "./components/Todo/Todo"
import { Terminal } from "./components/Terminal/Terminal"
import { Catagotchi } from "./components/Catagotchi/Catagotchi"

function App() {

  return (
    <>
      <div className="flex flex-col ">
        <Header />
        <main className="flex justify-between items-center gap-2">
          <Catagotchi />
          <Todo />
        </main>
        <Terminal />
      </div>
    </>
  )
}

export default App
