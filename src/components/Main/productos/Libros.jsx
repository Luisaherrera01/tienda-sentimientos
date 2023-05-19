import { useEffect,useState } from "react"
import { Header } from "../../header/Header"
import { Productos } from "../Productos"

export const Libros = () => {
    const [libros, setLibros] = useState([])
    const mostrarLibros = async() => {
        await fetch("src/json/libros.json")
        .then((res)=>res.json())
        .then((data)=>setLibros(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(libros)
    }

    useEffect(()=>{mostrarLibros()},[])

  return (
    <div>
        <Header/>
        <Productos/>
        <section className="container">
        {libros.map((libros)=>(
            <section key={libros.id} className="mainCard">
                <h1><strong>{libros.nombre}</strong></h1>
                <img src={libros.imagen} alt="" />
                <p><strong>Descripción:</strong>{libros.descripcion}</p>
                <p><strong>Categoria:</strong>{libros.categoria}</p>
                <p><strong>Precio:</strong>{libros.precio}</p>

            </section>
        ))}
        </section>
    </div>
  )
}