import { createBrowserRouter,RouterProvider } from "react-router-dom"
import {Header} from "./components/header/Header"
import  {Main}  from "./components/main/Main"
import {Contactenos} from "./components/main/Contactenos"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header/>
  },
  {
    path: "/productos",
    element:<Main/>
  },
  {
    path: "/contactenos",
    element:<Contactenos/>
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
