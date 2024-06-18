import Hero from "./components/hero"
import Navbar from "./components/navbar"
import Exp from "./components/exp"
import Edu from "./components/edu"
import Proj from "./components/proj"
function App() {


  return (
<div className="overflow-x-hidden">
<Navbar />
<Hero />
<Exp />
<Edu />
<Proj />
    </div>
  )
}

export default App
