import { useEffect,useState } from "react"

export const Productos = () => {
    const [productos, setProductos] = useState([])
    const mostrarProductos = async() => {
        await fetch("src/json/productos.json")
        .then((res)=>res.json())
        .then((data)=>setProductos(data))
        .catch((err)=>{
            console.log(err)
        })
        console.log(productos)
    }

    useEffect(()=>{mostrarProductos()},[])

  return (
    <div className="container-productos">
        {productos.map((productos)=>(
            <section key={productos.id} className="mainCard">
                <h1>{productos.nombre}</h1>
            </section>
        ))}
        
    </div>
  )
}