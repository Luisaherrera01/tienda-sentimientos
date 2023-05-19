import { useEffect,useState } from "react"
import { Header } from "../../header/Header"
import { Productos } from "../Productos"

export const Papeleria = () => {
    const [papeleria, setPapeleria] = useState([])
    const mostrarPapeleria = async() => {
        await fetch("src/json/papeleria.json")
        .then((res)=>res.json())
        .then((data)=>setPapeleria(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(papeleria)
    }

    useEffect(()=>{mostrarPapeleria()},[])

  return (
    <div>
        <Header/>
        <Productos/>

        <section className="container">
        {papeleria.map((papeleria)=>(
            <section key={papeleria.id} className="mainCard">
                <h1><strong>{papeleria.nombre}</strong></h1>
                <img src={papeleria.imagen} alt="" />
                <p><strong>Descripción:</strong>{papeleria.descripcion}</p>
                <p><strong>Categoria:</strong>{papeleria.categoria}</p>
                <p><strong>Precio:</strong>{papeleria.precio}</p>

            </section>
        ))}
        </section>
    </div>
  )
}