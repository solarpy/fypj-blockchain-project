import React from "react";
import { Navbar, Welcome, Services, Transactions, Footer } from "../components";
import "../Payment.css"

const Payment = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default Payment;