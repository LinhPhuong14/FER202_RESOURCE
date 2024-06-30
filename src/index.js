import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages"
import TodoProvider from "./context/TodoContext"
import "bootstrap/dist/css/bootstrap.min.css"
import { Test } from "./pages/Test"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/test",
        element: <Test />,
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <TodoProvider>
            <RouterProvider router={router} />
        </TodoProvider>
    </React.StrictMode>
)
