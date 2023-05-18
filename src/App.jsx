import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Index } from "./components/header/Index"
import  {Main}  from "./components/main/Main"
import {Contactenos} from "./components/main/Contactenos"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Index/>
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
