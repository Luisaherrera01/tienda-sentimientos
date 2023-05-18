import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Index } from "./components/header/Index"
import  {Main}  from "./components/main/Main"
import {Contactenos} from "./components/main/Contactenos"
import {Joyas} from "./components/main/productos/Joyas"
import {Libros} from "./components/main/productos/Libros"
import {Papeleria} from "./components/main/productos/Papeleria"
import {Peluches} from "./components/main/productos/Peluches"
import {Regalos} from "./components/main/productos/Regalos"

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
  },
  {
    path: "/joyas",
    element:<Joyas/>
  },
  {
    path: "/libros",
    element:<Libros/>
  },
  {
    path: "/papeleria",
    element:<Papeleria/>
  },
  {
    path: "/peluches",
    element:<Peluches/>
  },
  {
    path: "/regalos",
    element:<Regalos/>
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
