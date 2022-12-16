
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/Auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App