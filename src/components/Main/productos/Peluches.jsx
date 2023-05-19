import { useEffect,useState } from "react"
import { Header } from "../../header/Header"
import { Productos } from "../Productos"
import "../../main/styleMain.css"

export const Peluches = () => {
    const [peluches, setPeluches] = useState([])
    const mostrarPeluches = async() => {
        await fetch("src/json/peluches.json")
        .then((res)=>res.json())
        .then((data)=>setPeluches(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(peluches)
    }

    useEffect(()=>{mostrarPeluches()},[])

  return (
    <div>
        <Header/>
        <Productos/>
        <section className="container">
        {peluches.map((peluches)=>(
            <section key={peluches.id} className="mainCard">
                <h1><strong>{peluches.nombre}</strong></h1>
                <img src={peluches.imagen} alt="" />
                <p><strong>Descripción:</strong>{peluches.descripcion}</p>
                <p><strong>Categoria:</strong>{peluches.categoria}</p>
                <p><strong>Precio:</strong>{peluches.precio}</p>

            </section>
        ))}
        </section>
    </div>
  )
}