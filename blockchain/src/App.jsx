import Navbar from "./Navbar"
import Home from "./pages/Home"
import Exchange from "./pages/Exchange"
import News from "./pages/News"
import Payment from "./pages/Payment"
import Swap from "./pages/Swap"

import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/news" element={<News />} />
        </Routes>
  </div>
</>
  )
}

export default App