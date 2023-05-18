import { useEffect,useState } from "react"

export const Libros = () => {
    const [libros, setLibros] = useState([])
    const mostrarLibros = async() => {
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setLibros(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(libros)
    }

    useEffect(()=>{mostrarLibros()},[])

  return (
    <div className="container-libros">
        {libros.map((libros)=>(
            <section key={libros.id} className="mainCard">
                <h1><strong>{libros.nombre}</strong></h1>
                <img src={libros.imagen} alt="" />
                <p>{libros.descripcion}</p>
                <p>{libros.categoria}</p>
                <p>{libros.precio}</p>

            </section>
        ))}
        
    </div>
  )
}