import { useEffect,useState } from "react"
import { Header } from "../../header/Header"
import { Productos } from "../Productos"
import "../../main/styleMain.css"

export const Regalos = () => {
    const [regalos, setRegalos] = useState([])
    const mostrarRegalos = async() => {
        await fetch("src/json/regalos.json")
        .then((res)=>res.json())
        .then((data)=>setRegalos(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(regalos)
    }

    useEffect(()=>{mostrarRegalos()},[])

  return (
    <div>
        <Header/>
        <Productos/>

        <section className="container">

        {regalos.map((regalos)=>(
            <section key={regalos.id} className="mainCard">
                <h1><strong>{regalos.nombre}</strong></h1>
                <img src={regalos.imagen} alt="" />
                <p><strong>Descripción:</strong>{regalos.descripcion}</p>
                <p><strong>Categoria:</strong> {regalos.categoria}</p>
                <p><strong>Precio:</strong>{regalos.precio}</p>

            </section>
        ))}
        </section>
    </div>
  )
}