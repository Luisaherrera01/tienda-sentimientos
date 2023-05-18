import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Header from "./components/header/Header"
import { Main } from "./components/Main/Main"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header/>
  },
  {
    path: "/productos",
    element:<Main/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router ={router} />
    </>
  )
}

export default App
