import { useEffect,useState } from "react"

export const Peluches = () => {
    const [peluches, setPeluches] = useState([])
    const mostrarPeluches = async() => {
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setPeluches(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(peluches)
    }

    useEffect(()=>{mostrarPeluches()},[])

  return (
    <div className="container-peluches">
        {peluches.map((peluches)=>(
            <section key={peluches.id} className="mainCard">
                <h1><strong>{peluches.nombre}</strong></h1>
                <img src={peluches.imagen} alt="" />
                <p>{peluches.descripcion}</p>
                <p>{peluches.categoria}</p>
                <p>{peluches.precio}</p>

            </section>
        ))}
        
    </div>
  )
}