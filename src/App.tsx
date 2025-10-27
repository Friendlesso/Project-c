import "./index.css"
import './App.css'
import { Header } from './components/Header/Header'
import { Todo } from "./components/Todo"
import { Terminal } from "./components/Terminal/Terminal"

function App() {

  return (
    <>
      <div className="flex flex-col ">
        <Header />
        <section className="flex justify-end">
          <Todo />
        </section>
        <Terminal />
      </div>
    </>
  )
}

export default App
