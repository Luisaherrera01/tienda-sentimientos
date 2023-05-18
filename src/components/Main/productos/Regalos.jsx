import { useEffect,useState } from "react"

export const Regalos = () => {
    const [regalos, setRegalos] = useState([])
    const mostrarRegalos = async() => {
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setRegalos(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(regalos)
    }

    useEffect(()=>{mostrarRegalos()},[])

  return (
    <div className="container-regalos">
        {regalos.map((regalos)=>(
            <section key={regalos.id} className="mainCard">
                <h1><strong>{regalos.nombre}</strong></h1>
                <img src={regalos.imagen} alt="" />
                <p>{regalos.descripcion}</p>
                <p>{regalos.categoria}</p>
                <p>{regalos.precio}</p>

            </section>
        ))}
        
    </div>
  )
}