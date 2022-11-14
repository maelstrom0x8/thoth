import { Route, Routes } from "react-router"
import { Home } from "./components/Pages"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
