import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import  Contexts  from "./Contexts"

ReactDOM.render(
    <Contexts >
        <React.StrictMode>
            <App />
        </React.StrictMode>

</Contexts>,
document.getElementById("root"))