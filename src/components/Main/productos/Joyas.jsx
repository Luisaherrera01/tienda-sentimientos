import { useEffect,useState } from "react"
import { Header } from "../../header/Header"
import { Productos } from "../Productos"
import "../../main/styleMain.css"

export const Joyas = () => {
    const [joyas, setJoyas] = useState([])
    const mostrarJoyas = async() => {
        await fetch("src/json/productos.json")
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
        <section className="container-joyas">
        <Productos/>
        {joyas.map((joyas)=>(
            <section key={joyas.id} className="mainCard">
                <h1><strong>{joyas.nombre}</strong></h1>
                <img src={joyas.imagen} alt="" />
                <p>{joyas.descripcion}</p>
                <p>{joyas.categoria}</p>
                <p>{joyas.precio}</p>

            </section>
        ))}
        </section>
    </div>
  )
}