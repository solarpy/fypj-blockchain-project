import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { TransactionsProvider } from './context/TransactionContext';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <TransactionsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </TransactionsProvider>
)

