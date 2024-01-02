import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import CheckOut from "./pages/CheckOut"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App