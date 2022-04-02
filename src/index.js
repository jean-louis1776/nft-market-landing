import React from "react"
import ReactDOMClient from "react-dom/client"
import "./index.css"
import App from "./App"

const app = document.getElementById("root")
const root = ReactDOMClient.createRoot(app)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
