import React from 'react'
import { Welcome, Footer, Services, Transactions } from '../components1'

const Payment = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default Payment