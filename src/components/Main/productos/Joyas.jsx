import { useEffect,useState } from "react"
import { Header } from "../../header/Header"
import { Productos } from "../Productos"
import "../../main/styleMain.css"

export const Joyas = () => {
    const [joyas, setJoyas] = useState([])
    const mostrarJoyas = async() => {
        await fetch("src/json/joyas.json")
        .then((res)=>res.json())
        .then((data)=>setJoyas(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(joyas)
    }

    useEffect(()=>{mostrarJoyas()},[])

  return (
    <div>
        <Header/>
        <Productos/>

        <section className="container">

        {joyas.map((joyas)=>(
            <section key={joyas.id} className="mainCard">
                <h1><strong> {joyas.nombre}</strong></h1>
                <img src={joyas.imagen} alt="" />
                <p><strong>Descripción:</strong> {joyas.descripcion}</p>
                <p><strong>Categoria:</strong> {joyas.categoria}</p>
                <p><strong>Precio:</strong> {joyas.precio}</p>

            </section>
        ))}
        </section>
    </div>
  )
}