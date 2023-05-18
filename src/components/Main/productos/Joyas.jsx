import { useEffect,useState } from "react"

export const Joyas = () => {
    const [joyas, setJoyas] = useState([])
    const mostrarJoyas = async() => {
        await fetch("src/json/productosjoyas.json")
        .then((res)=>res.json())
        .then((data)=>setJoyas(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(joyas)
    }

    useEffect(()=>{mostrarJoyas()},[])

  return (
    <div className="container-productos">
        {joyas.map((joyas)=>(
            <section key={joyas.id} className="mainCard">
                <h1><strong>{joyas.nombre}</strong></h1>
                <img src={joyas.imagen} alt="" />
                <p>{joyas.descripcion}</p>
                <p>{joyasjoyas.categoria}</p>
                <p>{joyas.precio}</p>

            </section>
        ))}
        
    </div>
  )
}