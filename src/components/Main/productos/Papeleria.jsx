import { useEffect,useState } from "react"

export const Papeleria = () => {
    const [papeleria, setPapeleria] = useState([])
    const mostrarPapeleria = async() => {
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setPapeleria(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(papeleria)
    }

    useEffect(()=>{mostrarPapeleria()},[])

  return (
    <div className="container-papeleria">
        {papeleria.map((papeleria)=>(
            <section key={papeleria.id} className="mainCard">
                <h1><strong>{papeleria.nombre}</strong></h1>
                <img src={papeleria.imagen} alt="" />
                <p>{papeleria.descripcion}</p>
                <p>{papeleria.categoria}</p>
                <p>{papeleria.precio}</p>

            </section>
        ))}
        
    </div>
  )
}