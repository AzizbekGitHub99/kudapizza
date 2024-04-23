import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/home/HomePage"
import Cart from "./pages/cart/Cart"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
